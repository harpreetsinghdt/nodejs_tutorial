const {
	client,
	accountsCollection,
	connectToDatabase,
	ObjectId,
} = require('./dbconnect');

const documentToDelete = { _id: new ObjectId('6547bcecf226c31a30565d23') };

const main = async () => {
	try {
		await connectToDatabase();
		let result = await accountsCollection.deleteOne(documentToDelete);
		result.deletedCount === 1
			? console.log('Deleted one document')
			: console.log('No documents deleted');
	} catch (err) {
		console.error(`Error deleting documents: ${err}`);
	} finally {
		await client.close();
	}
};

main();
