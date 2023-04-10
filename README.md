## Description

week 17 project delivery

## Installation 👨🏽‍💻

```bash
$ npm install
```

### 1. Create an `.env` file like this

```bash
PORT=3000

POSTGRES_HOST=localhost
POSTGRES_PASSWORD=pass
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PORT=5432

JWT_SECRET=somepassword
```

### 2. Import postman collection to use api

In a workspace, Import the file `AUTO-REPAIR-SHOP.postman_collection.json`, which contains the basic queries for testing the api.


## 3. Run the app

```bash
# development
$ npm run start:dev
```

## Project Structure 🕸
```
auto-repair-shop/         
├─ src/                                      <- contains all app files
│  ├─ controllers/                           <- contains controllers definitions and logic
│  ├─ database/                              <- contains database configuration files and connection setup
│  ├─ emtities/                              <- contains entities models and typeorm decorators
│  ├─ errors/                                <- contains error classes and custom error handling logic
│  ├─ middlewares/                           <- contains middlewares logic, such as authentication and authorization
│  ├─ repositories/                          <- contains repositories logic, which communicate with the database
│  ├─ routes/                                <- contains routes definitions and logic
│  ├─ service/                               <- contains business logic of the application
│  └─ utils/                                 <- contains utility functions
│  └─ app.ts                                 <- entry point for the application
│  └─ server.ts                              <- creates database connection and starts the server
├─ test/                                     <- will have tests in the future
├─ .eslintrc.js                              <- configuration file for ESLint
└─ tsconfig.json                             <- configuration file for TypeScript
└─ AUTO-REPAIR-SHOP.postman_collection.json  <- ready-made settings for the postman app

```
