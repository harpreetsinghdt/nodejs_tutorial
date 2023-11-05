const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(uri);

const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log('Database connected.');
	} catch (error) {
		console.log(error);
	}
};

const main = async () => {
	try {
		await connectToDatabase();
		const myobj = { name: 'saini Inc', address: 'Highway 50' };

		const dbo = client.db('mymongodb');
		const col = dbo.collection('customers');
		const result = await col.insertOne(myobj);
		console.log('Document inserted');
		console.log(result);
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};
main();
