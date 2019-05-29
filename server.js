const express = require('express');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3',
    },
    useNullAsDefault: true,
}

const db = knex(knexConfig);

const server = express();

server.use(express.json());

module.exports = server;