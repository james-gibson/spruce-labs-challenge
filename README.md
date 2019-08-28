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

Cloud function handler. Manages

- GET: `/` returns `{ messages:{id:number, userid:string, avatarurl:string, msg:string}[], error }`
- POST: `/` with body

```
{id:number, userid:string, avatarurl:string, msg:string}
```

returns

```
{ messages:{id:number, userid:string, avatarurl:string, msg:string}[], error }
```

## Notes

- Create db table:

```
CREATE TABLE users (
    id bigint primary key,
    userId varchar(20) NOT NULL,
    avatarUrl varchar(200) NOT NULL,
    firstName varchar(30) NOT NULL,
    lastName varchar(30) NOT NULL,
    phoneNumber varchar(20) NOT NULL,
    emailAddress varchar(200) NOT NULL
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
- Avatars. Currently when the app loads you are assigned a random image. Ideally this would be user chosen
- Architectural diagram. Detailed graphic identifying all the components of the app

## Bugs

- Server crashes without reporting an error.
- Linting currently doesnt pass

## Problems encountered:

## -
