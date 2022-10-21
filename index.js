const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title of project?',
    },
    {
        type: 'input',
        name: 'describtion',
        message: 'write describtion of ur project?',
      },
      {
        type: 'input',
        name: 'contents',
        message: 'write about table of contents?',
      },
    {
      type: 'input',
      name: 'inst',
      message: 'write installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'usage information',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What is contribution guidelines?',
    },
    {
    type: 'input',
      name: 'instructions',
      message: 'What is test instructions?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const readmePageContent = generatereadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

