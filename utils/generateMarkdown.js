// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''; 
  }
  return `
  ![Github License](https://img.shields.io/badge/license-${license}-green.svg)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `
  https://opensource.org/licenses/${license}
  `;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `
  Licensed under the [${license}](${renderLicenseLink(license)}) license.
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#testing)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  * [${data.github}](https://github.com/${data.github})

  ## Testing

  ${data.tests}

  ## License

  Copyright (c) ${data.name}.

  ${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;