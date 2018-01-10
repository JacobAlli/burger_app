var connection = require('./connection');

module.exports = {

	selectAll: function(table, callback){

		var sqlString = `SELECT * FROM ${table}`;

        connection.query(sqlString, callback);
	},

    updateEaten: function(table, burger, callback){

        var sqlString = `UPDATE ${table} SET eaten = ${1} WHERE id = ${burger}`;

        connection.query(sqlString, callback);
    },

    addBurgerToList: function(table, burger, callback){

        var sqlString = `INSERT INTO ${table}(${'`name`'}, eaten) VALUES (${'"'+burger+'"'}, 0)`;

        connection.query(sqlString, callback);
    },

};