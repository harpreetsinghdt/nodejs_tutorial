const fs = require('fs');
const folderPath = './test/sample/temps/';

fs.mkdir(folderPath, (err) => {
	if (err) {
		console.log(err);
	}
	console.log('created .');
});

// try {
// 	if (!fs.existsSync(folderPath)) {
// 		fs.mkdirSync(folderPath);
// 	}
// } catch (err) {
// 	console.error(err);
// }

// const fs = require('fs');

// const fld = fs.readdirSync(folderPath);
// console.log(fld);

// fs.readdirSync(folderPath).map((fileName) => {
// 	return path.join(folderPath, fileName);
// });
