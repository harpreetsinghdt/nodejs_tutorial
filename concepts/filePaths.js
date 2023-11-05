const path = require('path');

const notes = '/users/joe/notes.txt';
const pathInfo = [
	path.dirname(notes),
	path.basename(notes),
	path.extname(notes),
	path.basename(notes, path.extname(notes)),
];
console.log(pathInfo);

const name = 'harry';
const hpath = path.join('/', 'users', name, 'notes.txt');
console.log(hpath);
console.log(path.resolve('notes.txt'));
console.log(path.resolve('tmp', 'notes.txt'));
console.log(path.resolve('/etc', 'joe.txt'));
console.log(path.normalize('/users/joe/..//test.txt'));
