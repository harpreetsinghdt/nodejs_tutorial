const { MongoClient } = require('mongodb');

var uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

const main = async () => {
	try {
		await client.connect((err,db)=>{
			var dbo = db.db('mymongodb');
			var myobj = { name: 'Company Inc', address: 'Highway 37' };
			dbo.collection('customers').insertOne(myobj, function (err, res) {
				if (err) throw err;
				console.log('1 document inserted');
				db.close();
			});
		});
		console.log('Connected to MongoDB Atlas!');
		// list out all the databases in the cluster
		const dbs = await client.db().admin().listDatabases();
		console.table(dbs.databases);
	} catch (error) {
		console.error(error);
	} finally {
		await client.close();
	}
};

main();
