const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
const path = ('path')

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
        type: 'input',
        name: 'toc',
        message: 'Write a table of contents separated by commas.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'describe usage.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['MIT', 'Apache', 'Boost'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the rules for contributing?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Run tests.'
    },
    {
        type: 'input',
        name: 'questionOne',
        message: 'What is your github'
    },
    {
        type: 'input',
        name: 'questionTwo',
        message: 'Enter Email address'
    },


];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers => {
    console.log(answers)
    fs.writeFileSync("README.md", generateMarkdown(answers))
    // writeToFile('README.md',generateMarkdown())

})
}

// function call to initialize program
init();
