// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the description of your project')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions of your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions of your project')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage instructions of your project')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to your project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter who contributed to your project')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions of your project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter the test instructions of your project')
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you want to use for your project?',
        choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause',]
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your Github username')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully created README file');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
       .then(userInput => {
            console.log('userInput')
            writeToFile('./dist/README.md', generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();
