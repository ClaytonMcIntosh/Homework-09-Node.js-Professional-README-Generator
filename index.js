const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage infomation:",
    },
    {
      type: "rawlist",
      name: "license",
      message: "Please select a license to use:",
      choices: ["MIT", "GNU  2.0", "GNU  3.0", "Apache License 2.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter tests instructions:",
    },
    {
      type: "input",
      name: "gitHubName",
      message: "Please enter your GitHub account name:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email:",
    },
  ])
  .then(function (answer) {
    // console.log(answer);
    if (answer.license === "MIT") {
      var badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answer.license === "GNU  2.0") {
      var badge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    } else if (answer.license === "GNU  3.0") {
      var badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (answer.license === "Apache License 2.0") {
      var badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    const readme = `
# ${answer.projectTitle}

${badge}
    
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

License type: ${answer.license}

${badge}

(click badge for official infomation)

## Contributing

${answer.contributing}

## Tests

${answer.tests}

## Questions

If you have any questions, you can reach me on my [GitHub account](https://github.com/${answer.gitHubName}) or at my [email](mailto:${answer.email}).
`;
    fs.writeFile("README.md", readme, function (err) {
      if (err) {
        return console.log("Sorry, an ERROR occurred. Please try again.");
      }
      console.log("README.md created sucessfully!");
    });
  });
