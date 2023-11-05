const client = require('./client');

const ObjectId = require('bson').ObjectId;
const dbname = 'bank';
const collection_name = 'accounts';

const accountsCollection = client.db(dbname).collection(collection_name);

// Connect to the database
const connectToDatabase = async () => {
	try {
		// await client.connect();
		await client.close();
		console.log(
			`Connected to the ${dbname} database 🌍`
		);
	} catch (err) {
		console.error(`Error connecting to the database: ${err}`);
	}
};

module.exports = { client, connectToDatabase, accountsCollection, ObjectId };