// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('node:fs');
const generateMarkdown = require("./utils/generateMarkdown");
const licenseLinkData = require('./utils/licenseData');

//Create a choices array from license data file
let choices = [];
//Loop through each license object and create a choice with a name and value
licenseLinkData.forEach((license) => {
  let licObj = {name: license.name, value: license.value}
  choices.push(licObj)
});

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Enter your project description",
  },
  {
    type: 'input',
    name: 'install',
    message: "Enter your installation instructions",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter your project's usage information",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Enter your project's contributions guidelines",
  },
  {
    type: 'input',
    name: 'test',
    message: "Enter the test instructions for your project",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license would you like to use?",
    choices: choices,
  },
  {
    type: 'input',
    name: 'user',
    message: "What is your github username?",

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?"
  },
  
];

// Function to write README file
function writeToFile(fileName, data) {

  //Call the generate markdown function from utils/generateMarkdown
  const readmeData = generateMarkdown(data);


  //Write the data to the README-Eg file. 
  fs.writeFile(fileName, readmeData, 'utf8', (err) => {
    if (err) throw err;
  });

}

// Function to initialise the app
function init() {

  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('./README-Eg.md', answers)
    console.log('Please check the README-Eg.md file to see your results. ')
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("There was an error. Please try again")
    } else {
      console.log("An unknown error has occured.")
    }
  });
}

// Function call to initialize app
init();

