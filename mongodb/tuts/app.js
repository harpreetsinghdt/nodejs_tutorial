const { MongoClient } = require('mongodb');
const uri = require('../mongodb_atlas_uri');

// require('dotenv').config();
// const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
const dbname = 'bank';
const collection_name = 'accounts';

const accountsCollection = client.db(dbname).collection(collection_name);

// Connect to the database
const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log(
			`Connected to the ${dbname} database \n Full connection string ${uri}`
		);
	} catch (error) {
		console.log('Error 1: ', error);
	}
};

const sampleAccount = {
	account_holder: 'Harp saini',
	accound_id: 9874563210,
	account_type: 'saving',
	balance: 100978684,
	last_updated: new Date(),
};
const sampleAccounts = [
	{
		account_holder: 'Harp saini',
		accound_id: 9874563210,
		account_type: 'saving',
		balance: 100978684,
	},
	{
		account_holder: 'Harp singh',
		accound_id: 9874568547,
		account_type: 'checking',
		balance: 158978684,
	},
];

const main = async () => {
	try {
		await connectToDatabase();
		// let result = await accountsCollection.insertOne(sampleAccount);
		let result = await accountsCollection.insertMany(sampleAccounts);
		console.log(`Inserted id: ${result.insertedCount}`);
		console.log(result);
	} catch (error) {
		console.log('Error 2: ', error);
	} finally {
		await client.close();
	}
};
main();
