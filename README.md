# spruce-labs-challenge

## Demo

See [here](https://james-gibson.github.io/spruce-labs-challenge/)

## Project setup

```
npm install
```

### Compiles and hot-reloads UI for development

```
npm run serve
```

### Compiles and minifies for production to `./dist`

```
npm run build
```

### Customize Vue configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project architecture

### Synopsis

Statically hosted vue app backed with a single cloud function and postgres db. This should enable rapid scaling to match demand.

### `src/main.js`

Bootstrap into the vue app. Configures polling schedule on load.

### `src/App.vue`

The vue app.

### `index.js`

Cloud function handler. See the [swagger docs](https://james-gibson.github.io/spruce-labs-challenge/swagger/)

## Notes

- Create db table:

```
CREATE TABLE users (
    id bigint primary key,
    userid varchar(20) NOT NULL,
    avatarurl varchar(200) NOT NULL,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    phonenumber varchar(20) NOT NULL,
    emailaddress varchar(200) NOT NULL
);
```

- Other ideas considered:

  - Deploying the server to heroku instead of cloud functions

- Additional constraint:
  - As free as possible. The cloud db is the largest cost in this stack (\$7-ish/mo). The site is statically hosted on github pages

## Next steps

- Security!! The server currently has no authentication. Placing this behind an oAUTH solution would be the first place I'd start
- Test coverage. Implementing the core functionality took a little longer then I expected
- Accessibility. While the app is mostly semantic html more focus could be given here
- Infrastructure as code. I manually created the db and cloud functions, I'd want to convert that into ansible/terraform/etc
- CI/CD. Wire in cloud buildpacks to keep deployments up to date
- Stronger UI/UX. Perhaps give the app a stronger focus
- Architectural diagram. Detailed graphic identifying all the components of the app

## Bugs

- Add user modal doesn't clear on save
- Server crashes without reporting an error.
- Linting currently doesnt pass

## Why did I make the decisions I did?

- Users: One of the most common CRUD use cases, simple to test
- Serverless: Enable dynamic scaling based on service load (We'd have to adjust the cloud db to handle more concurrent connections)
