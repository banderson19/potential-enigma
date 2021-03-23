// TODO: Include packages needed for this application
const { constants } = require('buffer');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// require('events').EventEmitter.defaultMaxListeners = 25;


// TODO: Create an array of questions for user input
const promptUser = () => {
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
            name: 'usage',
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
            name: 'license',
            message: 'The last section of a good README is a license. (Required)',
            choices:['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                ],
            validate: license => {
                if(license) {
                    return true;
                } else {
                    console.log('Licensing is required')
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'github',
            message: 'Here is alink to my github account'
        },{
            type: 'input',
            name: 'email',
            message: 'Here is alink to my email for addtional questions'
        }
    ])
    .then(projectData => {
        const file = './utils/generateMarkdown.md';
        console.log('111', projectData) 
        writeFile(file, projectData)

    })

};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    const pageMD = generateMarkdown(data);
    fs.writeFile(fileName, pageMD, function(err) {
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
