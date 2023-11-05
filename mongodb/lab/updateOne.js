const {
	client,
	accountsCollection,
	connectToDatabase,
	ObjectId,
} = require('./dbconnect');

const documentToUpdate = { _id: new ObjectId('65459d110dd35dde560537ff') };

const update = { $inc: { balance: 1000 } };

const main = async () => {
	try {
		await connectToDatabase();
		let result = await accountsCollection.updateOne(documentToUpdate, update);
		result.modifiedCount === 1
			? console.log('Updated one document')
			: console.log('No documents updated');
	} catch (err) {
		console.error(`Error updating document: ${err}`);
	} finally {
		await client.close();
	}
};

main();
