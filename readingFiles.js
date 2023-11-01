const fs = require('fs');
// fs.readFile('./test.txt', 'utf8', (err, data) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(data);
// });

// try {
// 	const data = fs.readFileSync('./test.txt', 'utf8');
// 	console.log(data);
// 	console.log('data read.');
// } catch (err) {
// 	console.error(err);
// }

const fsp = require('fs/promises');
async function example() {
	try {
		const data = await fsp.readFile('./test.txt', { encoding: 'utf8' });
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
example();
