const fs = require('fs');

const text = 'must learn language';

// fs.writeFile('./testwrite.js', text, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('Files written successfully.');
// });

// try {
// 	fs.writeFileSync('./testfile.txt', text);
// 	// file written successfully
// 	console.log('Files written successfully.');
// } catch (err) {
// 	console.error(err);
// }

const line = 'this is the content to add to file';
const fsp = require('fs/promises');
async function example() {
	try {
		await fsp.writeFile('./testwrite.txt', line, { flag: 'a' });
		console.log('Files written successfully.');
	} catch (err) {
		console.log(err);
	}
}
example();
