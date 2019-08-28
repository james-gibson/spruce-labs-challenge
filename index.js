const Knex = require('knex');
const SqlString = require('sqlstring');
const shortid = require('shortid');

const connectionName = process.env.INSTANCE_CONNECTION_NAME;

const UserDto = {
    extractUser: input => {
        console.log('extract: ', input)
        // I would use stronger input validation in prod
        const id = Number(input.id);
        const userid = String(SqlString.escape(input.userid).replace(/["']/g, "")) || shortid.generate();
        const avatarurl = String(SqlString.escape(input.avatarurl).replace(/["']/g, "")) || "";
        const firstname = String(SqlString.escape(input.firstname).replace(/["']/g, "")) || "";
        const lastname = String(SqlString.escape(input.lastname).replace(/["']/g, "")) || "";
        const phonenumber = String(SqlString.escape(input.phonenumber).replace(/["']/g, "")) || "";
        const emailaddress = String(SqlString.escape(input.emailaddress).replace(/["']/g, "")) || "";

        return {
            id,
            userid,
            avatarurl,
            firstname,
            lastname,
            phonenumber,
            emailaddress
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
const getUsers = () => knex.select('*').from('users').orderBy('id').catch(console.log);
const getUser = (userId) => knex.select('*').from('users').where({
    id: userId
}).orderBy('id').catch(console.log);
const updateUser = (user) => knex('users')
    .where({
        id: user.id
    })
    .update(user);

const createUser = async (user) => knex.insert(user)
    .into('users')
    .then(() => {
        return getUsers();
    }).catch(console.log);

const getHandler = async (req, res) => {
    // this is where we want to to an id split

    const users = await getUsers();

    return res.status(200).json({
        data: {
            users
        }
    });
};

const postHandler = async (req, res) => {
    const user = UserDto.extractUser(req.body);
    console.log(user);
    const users = await createUser(user);

    return res.status(200).json({
        data: {
            users
        }
    });
};

const putHandler = async (req, res) => {

    const user = UserDto.extractUser(req.body);
    console.log(user);
    const users = await updateUser(user);

    return res.status(200).json({
        data: {
            users
        }
    });
};

const deleteHandler = async (req, res) => {
    // extract user id here
    const userId = req.query.id;
    console.log('delete: ', userId);
    try {
        const deleted = await deleteUser(userId);
    } catch {
        return res.status(500).json({});
    }


    return res.status(204).json({});
};
// const putHandler = (req, res) => {
//     return unknownHandler(req, res);
// };

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
