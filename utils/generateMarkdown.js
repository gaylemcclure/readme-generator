const licenseData = require("./licenseData");
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const licenseText = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    return licenseText;
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const link = `(${license})`
    return link;
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  if (license) {
    const text = `Distributed under the ${license}. For more information, see <a href=${link}>here</a>`;
    console.log(text)
    return text;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  //Filter the license data to call the correct info for each function
  const newLicense = licenseData.filter((license) => license.value === data.license);

  //Call the functions to create the correct data
  const text = renderLicenseBadge(newLicense[0].value);
  const link = renderLicenseLink(newLicense[0].link);
  const textSection = renderLicenseSection(newLicense[0].name, newLicense[0].link)
  const shield = text + link;

  return `# ${data.title}

  ${shield}
  
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
  ${textSection}
  
  ## CONTRIBUTING
  ${data.contribution}
  
  ## TESTS
  ${data.test}
  
  ## QUESTIONS
  Github Username: <a href='https://github.com/${data.user}'>${data.user}</a>  
  Feel free to email me at ${data.email} for further questions. 
  `;
}

module.exports = generateMarkdown;
