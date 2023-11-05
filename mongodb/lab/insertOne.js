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

const main = async () => {
	try {
		await connectToDatabase();
		// TODO: Insert the sample accounts into the database
		let result = await accountsCollection.insertOne(sampleAccount);

		console.log(`Inserted ${result.insertedId} documents`);
		console.log(result);
	} catch (err) {
		console.error(`Error inserting documents: ${err}`);
	} finally {
		await client.close();
	}
};

main();
