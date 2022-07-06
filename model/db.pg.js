'use strict';
const { Client } = require('pg');
const knex = require('knex');

const client = new Client({
    // user: process.env.PG_USER,
    // host: process.env.PG_HOST,
    // database: process.env.PG_DATABASE,
    // password: https://data.heroku.com/dataclips/myuyvblbtehgbranaxcpokofmrwq,
    port: 1000,
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
    // idleTimeoutMillis: 0,
    // connectionTimeoutMillis: 0
});

client.connect((err) => {
    if (err)
        throw err;
});

module.exports = client
