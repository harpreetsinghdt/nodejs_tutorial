const {
	client,
	accountsCollection,
	connectToDatabase,
} = require('./dbconnect');

const documentsToDelete = { balance: { $lt: 500 } };

const main = async () => {
	try {
		await connectToDatabase();
		let result = await accountsCollection.deleteMany(documentsToDelete);
		result.deletedCount > 0
			? console.log(`Deleted ${result.deletedCount} documents`)
			: console.log('No documents deleted');
	} catch (err) {
		console.error(`Error deleting documents: ${err}`);
	} finally {
		await client.close();
	}
};

main();
