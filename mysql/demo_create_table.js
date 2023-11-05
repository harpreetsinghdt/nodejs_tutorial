var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodedb',
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Success!');
	// const sql =
	// 	'CREATE table users (userid int(4) AUTO_INCREMENT PRIMARY KEY, name varchar(255), age int(10))';
	// const sql = 'alter table users modify userid int(4) AUTO_INCREMENT PRIMARY KEY';
	// const sql = 'alter table users add column address varchar(255)';
	// const sql = 'describe users';
	// const sql = 'insert into users (name,age) values ("John doe", 22)';
	// const sql = 'select * from users';
	// var sql = 'INSERT INTO users (name, address) VALUES ?';
	var values = [
		['John', 'Highway 71'],
		['Peter', 'Lowstreet 4'],
		['Amy', 'Apple st 652'],
		['Hannah', 'Mountain 21'],
		['Michael', 'Valley 345'],
	];
	// const sql = 'Select * from users where address like "S%"';
	var name = 'Amy';
	var adr = 'Mountain 21';
	// con.query(sql, [name, adr],function (err, result, fields) {}
	// var sql = 'SELECT * FROM users WHERE address = ' + mysql.escape(adr);
	// var sql = 'SELECT * FROM users WHERE address = ? ';
	// var sql = 'SELECT * FROM users LIMIT 5 OFFSET 2';
	var sql = 'SELECT * FROM users LIMIT 2, 5';
	// var sql ='SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id';
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		// console.log('Result: ' + result);
		for (const obj of result) {
			console.log(obj);
		}
		// for (const obj of fields) {
		// 	console.log(obj);
		// }
	});
});
