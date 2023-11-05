const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (s, t) => {
	console.log(`started ${s} to ${t}`);
});

eventEmitter.emit('start', 1, 20);
