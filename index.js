// TODO: Include packages needed for this application
const inquierer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
inquierer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of the project.",
        },
        {
            type: "input",
            name: "install",
            message: "Enter any installation instructions required.",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter instructions on how to use the project.",
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter any contribution guidelines.",
        },
        {
            type: "input",
            name: "test",
            message: "How does someone test your project?",
        },
        {
            type: "list",
            name: "license",
            choices: [],
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github username.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your E-mail address",
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//i like buttcheeks