function getLicense(licenseName){
  if(licenseName == "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  if(licenseName == "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(licenseName == "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # License
  ${getLicense(data.license)}

   Project Title
 # ${data.title}

  # Description
  ${data.description}

  # Table of Contents
  
  [→ Installation](#installation)

  [→ Usage](#usage)

  [→ License](#license)

  [→ Contributing](#contributing)

  [→ Tests](#tests)

  [→ Questions](#Questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
 Github Username: [${data.questionOne}](${data.githubLink})
  
  If you have questions or require more information please contact me at: ${data.questionTwo}
`;
}

module.exports = generateMarkdown;
