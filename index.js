const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: "What does this project do?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['MIT', 'Apache', 'Boost'],
    }


];

// function to write README file
function writeToFile(fileName, data) {
//return fs.writeFileSync()
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers => {
    console.log(answers)
    fs.writeFileSync("README.md", generateMarkdown(answers) )
})
}

// function call to initialize program
init();
