const fs = require('fs');
const dir = './test/sample';
// fs.rmdir(dir, (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(`${dir} is deleted!`);
// });

fs.rm(dir, { recursive: true, force: true }, (err) => {
	if (err) {
		throw err;
	}
	console.log(`${dir} is deleted!`);
});
