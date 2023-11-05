const {
	client,
	accountsCollection,
	connectToDatabase,
} = require('./dbconnect');

const documentsToUpdate = { account_type: 'checking' };

const update = { $push: { transfers_complete: 'TR413308000' } };

const main = async () => {
	try {
		await connectToDatabase();
		let result = await accountsCollection.updateMany(documentsToUpdate, update);
		result.modifiedCount > 0
			? console.log(`Updated ${result.modifiedCount} documents`)
			: console.log('No documents updated');
	} catch (err) {
		console.error(`Error updating document: ${err}`);
	} finally {
		await client.close();
	}
};

main();
