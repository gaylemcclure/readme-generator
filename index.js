// Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
let inquirer = require('inquirer');
const fs = require('node:fs');

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
    choices: [
      {
        key: "AP",
        name:'Apache license 2.0',
        value: 'Apache_2.0'
      },
      {
        key: "GP",
        name:'GNU General Public license v3.0',
        value: 'GPLv3'
      },
      {
        key: 'IBM',
        name: "IBM Public License Version 1.0",
        value: 'IPL_1.0'
      },
      {
        key: "MIT",
        name:'MIT license',
        value: 'MIT'
      },
      {
        key: "BSD",
        name:'BSD 2-Clause "Simplified" license',
        value: 'BSD_2--Clause'
      },
      {
        key: "CCO",
        name:'Creative Commons Zero v1.0',
        value: 'CC0_1.0'
      },
      {
        key: "EPL",
        name:'Eclipse Public license 2.0',
        value: 'EPL_1.0'
      },
      {
        key: "MOZ",
        name:'Mozilla Public license 2.0',
        value: 'MPL_2.0'
      },
      {
        key: "UL",
        name:'The Unlicense',
        value: 'Unlicense'
      },

    ]
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
  console.log(data.license)

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

