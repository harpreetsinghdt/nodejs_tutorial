var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'harpnine@gmail.com',
		pass: 'Ferry@1river',
	},
});

var mailOptions = {
	from: 'harpnine@gmail.com',
	to: 'harpreetsinghdt@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
