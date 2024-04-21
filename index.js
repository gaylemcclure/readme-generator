// TODO: Include packages needed for this application
const markdown = require("./utils/generateMarkdown")
let inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
    name: 'licence',
    message: "What licence would you like to use?"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

  inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();







  //Sections - Title, Licence, Description, Installation, Usage, COntributing, Tests, Questions

  //Input------
    //Title of project - Title Section
    //Description
    //Installation Instructions
    //Usage Information
    //Contribution guidelines
    //Test instructions
    //Github username - questions section
    //Email address - questions section


  //List
    //Licence options - uses licence function - Licence section


