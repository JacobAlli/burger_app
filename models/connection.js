var mysql = require('mysql');

var connection =  mysql.createConnection({
    host: 'localhost',
	user: 'root',
	password: null,
	database: 'burger_database'
});

module.exports = connection;