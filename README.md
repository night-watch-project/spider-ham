# Sponge

Hassle-free web scraping service.

## FEATURES

### Core Features

-   Support client-side-rendered web pages
-   Auto extract metadata and article content
-   Extract DOM elements via CSS selectors
-   Domain blocking _(when `BLOCKLIST_URL` environment variable provided)_
-   HTTP proxy _(when `HTTP_PROXY` environment variable provided)_

### Live Version Features

-   Bundled with a blocklist of over 57,000 adware and malware domains
-   Built-in user-agent pool
-   Built-in rotating proxies

## INSTALLATION

### Requirements

-   Node.js >= 14
-   Environment variables specified in [.env.example](https://github.com/night-watch-project/sponge/blob/master/.env.example)

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

## USAGE

Start the app and go to `/docs` for interactive API documentation.

## CHANGELOG

Read more [here](https://github.com/night-watch-project/sponge/blob/master/CHANGELOG.md).

## TODO

Read more [here](https://github.com/night-watch-project/sponge/blob/master/TODO.md).
