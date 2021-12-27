// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: "What is your github username? (Required)",
    validate: usernameInput => {
      if(usernameInput) {
        return true;
      } else {
        console.log('Please enter your github username.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'repo',
    message: "What is your github repository name? (Required)",
    validate: repoInput => {
      if(repoInput) {
        return true;
      } else {
        console.log('Please enter your github repository.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email? (Required)",
    validate: emailInput => {
      if(emailInput) {
        return true;
      } else {
        console.log('Please enter your email.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description explaining what, why and how you created this project. (Required)',
    validate: descriptionInput => {
      if(descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What steps are required for installation of your project, if any?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for how to use your project'
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "List anyone else who has contributed to your project?"
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What steps are required for testing?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use for your project?',
    choices: ['Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'gpl-license', 'lgpl-license', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'None']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve ({
        ok: true,
        message: 'Readme.md Created'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then(readmeData => {
      return generateMarkdown(readmeData);
    })
    .then(data => {
      return writeToFile('./dist/README.md', data)
    })
    .catch(err => {
      console.log(err)
    })
}

// Function call to initialize app
init();