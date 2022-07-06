'use strict';
const { Client } = require('pg');
const knex = require('knex');

const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    // connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0
});

client.connect((err) => {
    if (err)
        throw err;
});

module.exports = client