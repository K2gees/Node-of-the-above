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
  #Believe it or Node

  #Project Title
  ${data.title}

  #Description
  ${data.description}

  #License
  ${getLicense(data.license)}
`;
}

module.exports = generateMarkdown;
