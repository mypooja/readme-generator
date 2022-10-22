import inquirer from 'inquirer';
import fs from 'fs';

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions of your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage information of your project?',
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines of your project?',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions of your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the license for this project?',
        choices: [
          "GNU",
          "MIT",
          "Open"
        ]
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },
    ])
    .then((answers) => {
      const readmePageContent = generateReadMe(answers);

      fs.writeFile('GeneratedReadMe.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });

const generateReadMe = ({ title, description, instructions, usage, guidelines, testInstructions, license, github,  email }) =>
`
## Title
${title}

## Table of Contents
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Github Username](#github-username)
- [Email](#email)

## Description
${description}

## Installation Instructions
${instructions}

## Usage Information
${usage}

## Contribution Guidelines
${guidelines}

## Test Instructions
${testInstructions}

## License
${license}

## Github Username
${github}

## Email
${email}
`;