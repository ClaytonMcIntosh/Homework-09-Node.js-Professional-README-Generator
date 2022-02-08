const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
  ])
  .then(function (answer) {
    const readme = `# ${answer.projectTitle}

    ${answer.badge}
    
    ## Description
    
    ${answer.description}
    
    ## Table of Contents
    
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)
    
    
    ## Installation
    
    ${answer.installation}
    
    ## Usage
    
    ${answer.usage}
    
    ## License
    
    ${answer.license}
    
    ## Contributing
    
    ${answer.contributing}
    
    ## Tests
    
    ${answer.tests}
    
    ## Questions
    
    ${answer.Questions}
    
    If you have any questions, you can reach me on my [GitHub account](https://${answer.gitHubName}.io) or at my [email](mailto:${answer.email}).
    `;
    fs.writeFile("README.md", readme, function (err) {
      if (err) {
        return console.log("Sorry, an ERROR occurred. Please try again.");
      }
      console.log("README.md created sucessfully!");
    });
  });
