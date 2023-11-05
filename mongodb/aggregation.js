const client = require('./client');
const dbname = 'bank';
const collection_name = 'accounts';
const accountsCollection = client.db(dbname).collection(collection_name);

const pipeline = [
	{ $match: { balance: { $gt: 10000 } } },
	{
		$group: {
			_id: '$account_type',
			total_balance: { $sum: '$balance' },
			avg_balance: { $avg: '$balance' },
		},
	},
];

const main = async () => {
	try {
		await client.connect();
		console.log('Connected to database');
		let result = await accountsCollection.aggregate(pipeline);
		for await (doc of result) {
			console.log(doc);
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
};
main();
