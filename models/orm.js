var connection = require('./connection');

module.exports = {

	selectAll: function(table){
		connection.connect();

		var sqlString = 'SELECT * FROM '+ table;

		connection.query(sqlString, function(err, result) {
			res.send(result);
		})
	}
}