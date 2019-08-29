const Knex = require('knex');
const SqlString = require('sqlstring');
const shortid = require('shortid');

const connectionName = process.env.INSTANCE_CONNECTION_NAME;

const UserDto = {
    fromReq: input => {
        // I would use stronger input validation in prod
        const id = Number(input.id) || Date.now();
        const userid = String(SqlString.escape(input.userId).replace(/["']/g, "")) || shortid.generate();
        const avatarurl = String(SqlString.escape(input.avatarUrl).replace(/["']/g, "")) || "";
        const firstname = String(SqlString.escape(input.firstName).replace(/["']/g, "")) || "";
        const lastname = String(SqlString.escape(input.lastName).replace(/["']/g, "")) || "";
        const phonenumber = String(SqlString.escape(input.phoneNumber).replace(/["']/g, "")) || "";
        const emailaddress = String(SqlString.escape(input.emailAddress).replace(/["']/g, "")) || "";

        return {
            id,
            userid,
            avatarurl,
            firstname,
            lastname,
            phonenumber,
            emailaddress
        };
    },
    fromDb: input => {
        // I would use stronger input validation in prod
        const id = String(input.id);
        const userId = String(SqlString.escape(input.userid).replace(/["']/g, "")) || shortid.generate();
        const avatarUrl = String(SqlString.escape(input.avatarurl).replace(/["']/g, "")) || "";
        const firstName = String(SqlString.escape(input.firstname).replace(/["']/g, "")) || "";
        const lastName = String(SqlString.escape(input.lastname).replace(/["']/g, "")) || "";
        const phoneNumber = String(SqlString.escape(input.phonenumber).replace(/["']/g, "")) || "";
        const emailAddress = String(SqlString.escape(input.emailaddress).replace(/["']/g, "")) || "";

        return {
            id,
            userId,
            avatarUrl,
            firstName,
            lastName,
            phoneNumber,
            emailAddress
        };
    }
};

const knex = Knex({
    client: 'pg',
    connection: {
        host: `/cloudsql/${connectionName}`,
        user: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: 'postgres'
    }
});

const deleteUser = (userId) => knex('users').where('id', userId).del();

const getUsers = () => knex.select('*').from('users').orderBy('id').then(users => users.map(UserDto.fromDb)).catch(console.log);

const updateUser = (user) => knex('users')
    .where({
        id: user.id
    })
    .update(user)
    .then(() => {
        return getUsers();
    }).catch(console.log); // Stronger error handling is needed

const createUser = async (user) => knex.insert(user)
    .into('users')
    .then(() => {
        return getUsers();
    }).catch(console.log); // Stronger error handling is needed

const getHandler = async (req, res) => {
    // We could extend this to return a single user based on a query param
    const users = await getUsers();

    return res.status(200).json({
        data: {
            users
        }
    });
};

const postHandler = async (req, res) => {
    const user = UserDto.fromReq(req.body);
    const users = await createUser(user);

    return res.status(200).json({
        data: {
            users
        }
    });
};

const putHandler = async (req, res) => {
    const user = UserDto.fromReq(req.body);
    const users = await updateUser(user);

    return res.status(200).json({
        data: {
            users
        }
    });
};

const deleteHandler = async (req, res) => {
    const userId = req.query.id;

    try {
        await deleteUser(userId);
    } catch {
        return res.status(500).json({});
    }

    return res.status(204).json({});
};

const unknownHandler = (req, res) => {
    return res.status(500).json({})
};

const optionsHandler = (req, res) => {
    res.set('Access-Control-Allow-Methods', ['GET', 'POST', 'DELETE', 'PUT']);
    res.set('Access-Control-Allow-Headers', ['Content-Type', 'access-control-allow-origin']);
    res.set('Access-Control-Max-Age', '3600');
    return res.status(204).send('');
};

const handlers = new Map();

handlers.set('OPTIONS', optionsHandler);
handlers.set('GET', getHandler);
handlers.set('POST', postHandler);
handlers.set('PUT', putHandler);
handlers.set('DELETE', deleteHandler);
handlers.set('UNKNOWN', unknownHandler)

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.handler = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    if (handlers.has(req.method)) {
        return handlers.get(req.method)(req, res);
    }

    return handlers.get('UNKNOWN')(req, res);
}
