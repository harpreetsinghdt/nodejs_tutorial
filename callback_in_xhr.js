var XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
	if (xhr.readyState === 4) {
		xhr.status === 200 ? console.log(xhr.responseText) : console.error('error');
	}
};
xhr.open('GET', 'http://worldsrank.com');
xhr.send();
