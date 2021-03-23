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


function generateMarkdown({title, description, tableOfContents, installation, usage, license, contributing, github, email}) {

  return `# ${title}
  ## Description
  > ${description}
  ## Table of Contents
  * Installation
  * Usage
  * Credits
  * License
  * Contribution
  ## Installation
  > ${installation}
  ## Usage
  > ${usage}
  ## License
  > ${license}
  ## Questions
  >  If any other questions or concern feel free to reach me at my email: ${email}
  ## Github account
  > If you would like to check out my github account: ${github}

`;
}

module.exports = generateMarkdown;
