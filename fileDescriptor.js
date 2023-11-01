const fs = require('fs');
// fs.open('./test.txt', 'r', (err, fd) => {
// 	// fd is our file descriptor
// 	console.log(fd);
// });

// try {
// 	const fd = fs.openSync('./test.txt', 'r');
// 	console.log(fd);
// } catch (err) {
// 	console.error(err);
// }

const fsp = require('fs/promises');
// Or const fs = require('fs').promises before v14.
async function example() {
	let filehandle;
	try {
		filehandle = await fsp.open('./test.txt', 'r');
		console.log(filehandle.fd);
		console.log(await filehandle.readFile({ encoding: 'utf8' }));
	} finally {
		if (filehandle) await filehandle.close();
	}
}
example();
