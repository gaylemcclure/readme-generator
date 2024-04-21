// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const licenseText = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    return licenseText;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Creating an array to find the correct link
  const licenseLinkData = [
    {
      value: "Apache_2.0",
      link: "https://opensource.org/licenses/Apache-2.0",
    },
    {
      value: "GPLv3",
      link: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
      value: "IPL_1.0",
      link: "https://opensource.org/licenses/IPL-1.0",
    },
    {
      value: "MIT",
      link: "https://opensource.org/licenses/MIT",
    },
    {
      value: "BSD_2--Clause",
      link: "https://opensource.org/license/bsd-2-clause",
    },
    {
      value: "CC0_1.0",
      link: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      value: "EPL_1.0",
      link: "https://opensource.org/licenses/EPL-1.0",
    },
    {
      value: "MPL_2.0",
      link: "https://opensource.org/licenses/MPL-2.0",
    },
    {
      value: "Unlicense",
      link: "http://unlicense.org/",
    },
  ];

  if (license) {
    let text = "";
    licenseLinkData.map((link) => {
      if (link.value === license) {
        text = `(${link.link})`;
      }
    });
    return text;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const text = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const shield = text + link;
  console.log(shield);
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
  Distributed under the ${data.licence}.
  
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
