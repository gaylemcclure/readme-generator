// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
  {shield}
  
  ## DESCRIPTION
  ${data.description}
  
  ## TABLE OF CONTENTS
  
  <ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#licence">Licence</a> </li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#tests">Tests</a></li>
  <li><a href="#questions">Questions</a></li>
  </ol>
  
  ## INSTALLATION
  ${data.install}
  
  ## USAGE
  ${data.usage}
  
  ## LICENCE
  Distributed under the ${data.licence}.
  
  ## CONTRIBUTING
  ${data.contribution}
  
  ## TESTS
  ${data.test}
  
  ## QUESTIONS
  Github Username: <a href='https://github.com/${data.user}'>${data.user}</a>  
  Feel free to email me at ${data.email} for further questions. 
  `
  ;
}

module.exports = generateMarkdown;
