const knex = require('./connection');

module.exports = {
	getAll() {
		return knex('users');
	},
	createUser(user) {
		return knex('users').insert(user, '*');
	}
}