// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for the project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests or instructions for running tests:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Writing data to a file and adding error handling
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err); // Descriptive error message
    } else {
      console.log('README.md has been generated!'); // Success message
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Renamed variable for clarity
      writeToFile('README.md', readmeContent);         
    })
    .catch((error) => {
      console.error('Error during inquirer prompts:', error); // Descriptive error message
    });
}

// Initialize the app by calling the init function
init();