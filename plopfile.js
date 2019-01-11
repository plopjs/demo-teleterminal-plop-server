const chalk = require('chalk');

module.exports = function (plop) {

	const delayOutput = txt => d => new Promise((resolve) => {
		setTimeout(() => resolve(plop.renderString(txt, d)), 2000);
	});
	const required = v => (!!v.trim() || 'Required.');

	plop.setWelcomeMessage(chalk.yellow(`
 ____  _               ____
|  _ \\| | ___  _ __   / ___|  ___ _ ____   _____ _ __
| |_) | |/ _ \\| '_ \\  \\___ \\ / _ \\ '__\\ \\ / / _ \\ '__|
|  __/| | (_) | |_) |  ___) |  __/ |   \\ V /  __/ |
|_|   |_|\\___/| .__/  |____/ \\___|_|    \\_/ \\___|_|
              |_|
`));

	plop.setGenerator('web-site', {
		description: 'New web stack',
		prompts: [{
			type: 'input',
			name: 'name',
			validate: required,
			message: 'What would you like to call this site?'
		}, {
			type: 'list',
			name: 'framework',
			message: 'Which UI framework would you like?',
			choices: [
				{name: 'React', value: 'React'},
				{name: 'Vue', value: 'Vue'},
				{name: 'Angular', value: 'Angular'},
				{name: 'AngularJs (1.x)', value: 'AngularJs'},
			]
		}],
		actions: [
			delayOutput('Created Git Repo => "Site-{{framework}}-{{pascalCase name}}"'),
			delayOutput('Created CI/CD Pipeline'),
			delayOutput('Setup Hosting => "https://{{kebabCase name}}.somedomain.com"')
		]
	});

	plop.setGenerator('micro-service', {
		description: 'New micro service',
		prompts: [{
			type: 'input',
			name: 'name',
			validate: required,
			message: 'What would you like to call this micro service?'
		}],
		actions: [
			delayOutput('Created Git Repo => "MicroSvc-{{pascalCase name}}"'),
			delayOutput('Created CI/CD Pipeline'),
			delayOutput('Created K8 Cluster => "https://api.somedomain.com/{{kebabCase name}}"')
		]
	});
};
