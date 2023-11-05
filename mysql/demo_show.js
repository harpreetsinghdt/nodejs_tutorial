var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodedb',
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
	const sql = 'Show databases';
	con.query(sql, function (err, result) {
		if (err) throw err;
		// console.log('Result: ' + result);
		for (const obj of result) {
			console.log(obj);
		}
	});
});
