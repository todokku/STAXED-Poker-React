## Initialized Knex

```
npm install knex pg express --save-dev
```

knex migrate:make users;
knex migrate:make admins;
// migrations/\_\_\_\_

knex seed:make users
knex seed:make admins
// sees/\_\_\_\_

routes/api/index.js
