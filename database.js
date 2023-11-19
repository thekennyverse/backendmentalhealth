const pgp = require('pg-promise')();
const settings = require('./settings');
const {user, password, host, database} = settings.postgresql;

const db = pgp({
    user,
    password,
    host,
    port: 5432,
    database,
    ssl: {
        rejectUnauthorized: false // To allow connection to Heroku PostgreSQL without SSL certificate validation
    }
});

module.exports = db


