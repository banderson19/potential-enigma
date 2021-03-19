// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// require('events').EventEmitter.defaultMaxListeners = 25;


// TODO: Create an array of questions for user input
const promptUser = () => {
//     for (var i = 0; i < questions.length; i++) {
//         inquirer.prompt(questions[i]);
//         promptUser();
//     }
// }
// const questions = [
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'description',
            message: 'Description of your repository? (Required)',
            validate: description => {
                if(description) {
                    return true;
                } else {
                    console.log('Enter a description')
                    return false;
                }
            }
        },{
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Table of contents for your repository?',
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Contribution']
        },{
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installation => {
                if(installation) {
                    return true;
                } else {
                    console.log('Enter installation steps')
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.(Required)',
            validate: usage => {
                if(usage) {
                    return true;
                } else {
                    console.log('Enter instructions on how to use your application')
                    return false;
                }
            }
        },{
            type: 'checkbox',
            name: 'License',
            message: 'The last section of a good README is a license. (Required)',
            choices:['MIT License',  'GNU GENERAL PUBLIC LICENSE'],
            validate: license => {
                if(license) {
                    return true;
                } else {
                    console.log('Licensing is required')
                    return false;
                }
            }
        },{
            type: 'checkbox',
            name: 'Contributing',
            message: 'Would u like to contribute to the repository',
            choices: ['[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)']
        },{
            type: 'input',
            name: 'Questions',
            message: 'Here is alink to my github for additional questions'
        }

    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
      });
}

// TODO: Create a function to initialize app
function init() {
    return promptUser();
    // return inquirer.prompt(promptUser);
}

// Function call to initialize app
init();
