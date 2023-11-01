const fs = require('fs');
const fsp = require('fs/promises');

// fs.stat('./test.txt', (err, stats) => {
// 	if (err) {
// 		console.error(err);
// 	}
// 	// we have access to the file stats in `stats`
// 	console.log(stats);
// });

// try {
// 	const stats = fs.statSync('./test.txt');

// 	console.log(stats.isFile()); // true
// 	console.log(stats.isDirectory()); // false
// 	console.log(stats.isSymbolicLink()); // false
// 	console.log(stats.size); // 1024000 //= 1MB
// } catch (err) {
// 	console.error(err);
// }

// fs.stat('./test.txt', (err, stats) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(stats.isFile()); // true
// 	console.log(stats.isDirectory()); // false
// 	console.log(stats.isSymbolicLink()); // false
// 	console.log(stats.size); // 1024000 //= 1MB
// });

async function example() {
	try {
		const stats = await fsp.stat('./test.txt');
		console.log(stats.isFile()); // true
		console.log(stats.isDirectory()); // false
		console.log(stats.isSymbolicLink()); // false
		console.log(stats.size); // 1024000 //= 1MB
	} catch (err) {
		console.log(err);
	}
}
example();
