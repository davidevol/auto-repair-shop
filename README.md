## Description

this is a partial deliverable from my week 16 project, it contains the ability to create a client and see it

## Installation

```bash
$ npm install
```

### create an .env file like this

```bash
PORT=3000

POSTGRES_HOST=localhost
POSTGRES_PASSWORD=pass
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PORT=5432
```

### import postman collection to test

```bash
In a workspace, Import the file AUTO-REPAIR-SHOP.postman_collection.json, which contains the basic queries for testing the api.
```

## run the app


```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
