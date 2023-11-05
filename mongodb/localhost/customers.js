var MongoClient = require('mongodb').MongoClient;
// var uri = 'mongodb://localhost:27017?tls=true';
const uri = require('../mongodb_atlas_uri');
const myClientSettings = {};
const client = new MongoClient(uri);

// try {
// 	client.connect();
// 	console.log('connected.')
// } catch (error) {
// 	console.log(error)
// }

const main = async () => {
	try {
		await client.connect();
		const cloudsCollection = client.db('sky').collection('clouds');
		let result = cloudsCollection.insertOne({
			tech:'aws',
			region:'toronto',
			areacode:2587
		})
		console.log('Connected to MongoDB compass!');
		// list out all the databases in the cluster
		const dbs = await client.db().admin().listDatabases();
		// console.table(dbs.databases);
	} catch (error) {
		console.error(error);
	} finally {
		await client.close();
	}
};

main();

// MongoClient.connect(url, function (err, db) {
// 	if (err) throw err;
// 	var dbo = db.db('mymongodb');
// 	dbo.createCollection('customers', function (err, res) {
// 		if (err) throw err;
// 		console.log('Collection created!');
// 		db.close();
// 	});
// });
