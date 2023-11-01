import inquirer from 'inquirer';

inquirer
	.prompt(questions)
	.then((answers) => {
		console.log(`Hi ${answers.name}!`);
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
			console.error(error);
		} else {
			// Something else went wrong
			console.error(error);
		}
	});
