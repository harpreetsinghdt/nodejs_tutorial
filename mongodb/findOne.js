const {
	client,
	accountsCollection,
	connectToDatabase,
	ObjectId,
} = require('./dbconnect');

// Document used as a filter for the find() method
// const documentsToFind = { _id: new ObjectId('65459d110dd35dde560537ff') };
const documentsToFind = { account_id: 'MDB011235813' };

const main = async () => {
	try {
		await connectToDatabase();
		// find() method is used here to find documents that match the filter
		// let result = await accountsCollection.findOne(documentsToFind);
		let result = await accountsCollection.find(documentsToFind);

		await result.forEach((doc) => console.log(doc));
	} catch (err) {
		console.error(`Error finding documents: ${err}`);
	} finally {
		await client.close();
	}
};

main();
