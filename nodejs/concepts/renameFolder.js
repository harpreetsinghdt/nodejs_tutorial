const fs = require('fs');
const folderPath = './test/sample/new.txt';
const newfolderPath = './test/sample/newtxt';
fs.rename(folderPath, newfolderPath, (err) => {
	if (err) {
		console.error(err);
	}
	// done
});

// try {
// 	fs.renameSync('/Users/joe', '/Users/roger');
// } catch (err) {
// 	console.error(err);
// }

// const fsp = require('fs/promises');
// async function example() {
// 	try {
// 		await fsp.rename('/Users/joe', '/Users/roger');
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// example();
