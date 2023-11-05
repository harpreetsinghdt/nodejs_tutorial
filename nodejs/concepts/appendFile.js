// const fs = require('fs');
// const content = 'Some content! ';
// fs.appendFile('file.log', content, (err) => {
// 	if (err) {
// 		console.error(err);
// 	}
// 	// done!
// });

const fs = require('fs/promises');
async function example() {
	try {
		const content = 'Some content! ';
		await fs.appendFile('test.txt', content);
	} catch (err) {
		console.log(err);
	}
}
example();
