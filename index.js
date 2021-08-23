// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const emailValidator = require("email-validator");

// TODO: Create an array of questions for user input
const questions = [
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
            name: "testing",
            message: "How does someone test your project?",
        },
        {
            type: "list",
            name: "license",
            choices: [
                "MIT",
                "Apache 2.0",
                "GPL 3.0",
                "BSD 3",
                "None"
            ],
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
            validate(input) {
                if (emailValidator.validate(input)) {
                  return true;
                } else {
                  return "Please enter a valid email address.";
                }
              },
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Success: Your file has been generated.")
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile(
        `${answers.title}_README.md`,
        generateMarkdown.generateMarkdown(answers)
      );
    });
  }

// Function call to initialize app
init();