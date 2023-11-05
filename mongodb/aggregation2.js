const client = require('./client');
const dbname = 'bank';
const collection_name = 'accounts';
const accountsCollection = client.db(dbname).collection(collection_name);

const pipeline = [
	{
		$match: { account_type: 'checking', balance: { $gte: 1500 } },
	},
	{
		$sort: { balance: -1 },
	},
	{
		$project: {
			_id: 0,
			account_id: 1,
			account_type: 1,
			balance: 1,
			gdp_balance: { $divide: ['$balance', 1.3] },
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
