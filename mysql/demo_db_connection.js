var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
	const sql = 'CREATE DATABASE nodedb';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('Result: ' + result);
	});
});
