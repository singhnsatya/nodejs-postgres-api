const knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const config = require('./db');
const envConfig = config[environment];

module.exports = knex(envConfig)