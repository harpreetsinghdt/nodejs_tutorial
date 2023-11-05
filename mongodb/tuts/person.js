var { MongoClient } = require('mongodb');

// Connect to the db
const uri = 'mongodb://127.0.0.1:27017/';
// const uri = require('./mongodb_atlas_uri');
const client = new MongoClient(uri);
const personCollection = client.db('person').collection('inhouse');

const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log('connected');
	} catch (error) {
		console.log(error);
	}
};
const insertData = [
	{ firstName: 'Steve', lastName: 'Jobs' },
	{ firstName: 'Bill', lastName: 'Gates' },
	{ firstName: 'James', lastName: 'Bond' },
];
const main = async () => {
	try {
		await connectToDatabase();
		// let result = await personCollection.insertOne({
		// 	name: 'raja',
		// 	age: 28,
		// 	address: 'new city',
		// 	type: 'inhouse',
		// });
		let result = await personCollection.insertMany(insertData);
		console.log(result);
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
};

main();

// MongoClient.connect(uri, function (err, db) {
// 	if (err) throw err;
// 	var dbo = db.db('mymongodb');

// 	dbo.collection('Persons', function (err, collection) {
// 		collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
// 		collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
// 		collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

// 		db.collection('Persons').count(function (err, count) {
// 			if (err) throw err;

// 			console.log('Total Rows: ' + count);
// 		});
// 	});
// });
