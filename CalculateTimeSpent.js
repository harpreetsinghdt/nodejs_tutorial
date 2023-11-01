const doSomething1 = () => console.log('test');
const measureDoingSomething = () => {
	console.time('start');
	// do something, and measure the time it takes
	doSomething1();
	console.timeEnd('start');
};
measureDoingSomething();
