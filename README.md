# spider-ham

Peter Porker as Spider-Ham

## FEATURES

### Core Features

- Render and retrieve HTML of any client-side-rendered web pages
- Scrape text content, attribute value or inner HTML of any elements with CSS selectors
- Auto extract metadata
- Support custom request headers such as user-agent, cookies,...
- Support HTTP proxy _(SSR only for now)_

### Live Version Features

## INSTALLATION

### Requirements

- Node.js >= 14
- Environment variables specified in [.env.example](https://github.com/night-watch-project/spider-ham/blob/master/.env.example)

### Instructions

#### Without Docker (dev environment)

```shell
$ npm i             # yarn install
$ npm run start:dev # yarn start:dev
```

#### With Docker (prod environment)

```shell
$ npm run docker:build:app  # yarn docker:build:app
$ npm run docker:start:prod # yarn docker:start:prod
```

## CHANGELOG

Read more [here](https://github.com/night-watch-project/spider-ham/blob/master/CHANGELOG.md).

## TODO

Read more [here](https://github.com/night-watch-project/spider-ham/blob/master/TODO.md).
