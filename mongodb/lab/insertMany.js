const {
	client,
	accountsCollection,
	connectToDatabase,
} = require('./dbconnect');

const sampleAccount = {
	account_id: 'MDB011235813',
	account_holder: 'Ada Lovelace',
	account_type: 'checking',
	balance: 60218,
	last_updated: new Date(),
};

const sampleAccounts = [
	{
		account_id: 'MDB011235813',
		account_holder: 'Ada Lovelace',
		account_type: 'checking',
		balance: 60218,
		last_updated: new Date(),
	},
	{
		account_id: 'MDB829000001',
		account_holder: 'Muhammad ibn Musa al-Khwarizmi',
		account_type: 'savings',
		balance: 267914296,
		last_updated: new Date(),
	},
];

const main = async () => {
	try {
		await connectToDatabase();
		// TODO: Insert the sample accounts into the database
		// let result = await accountsCollection.insertOne(sampleAccount);
		let result = await accountsCollection.insertMany(sampleAccounts);
		console.log(`Inserted ${result.insertedCount} documents`);
		console.log(result);
	} catch (err) {
		console.error(`Error inserting documents: ${err}`);
	} finally {
		await client.close();
	}
};

main();
