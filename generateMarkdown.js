// License data object for storing information about different licenses
const licenseData = {
    'MIT': {
      badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      link: '[MIT License](https://opensource.org/licenses/MIT)',
    },
    'GPL 3.0': {
      badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      link: '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)',
    },
    'Apache 2.0': {
      badge: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      link: '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
    },
  };
  
  /**
   * Function to render the license badge for a given license.
   * @param {string} license - The license name (e.g., "MIT", "GPL 3.0", "Apache 2.0").
   * @returns {string} - The Markdown for the license badge, or an empty string if no license is provided.
   */
  function renderLicenseBadge(license) {
    return licenseData[license]?.badge || '';  
  }
  
  /**
   * Function to render the license link for a given license.
   * @param {string} license - The license name.
   * @returns {string} - The Markdown for the license link, or an empty string if no license is provided.
   */
  function renderLicenseLink(license) {
    return licenseData[license]?.link || '';
  }
  
  /**
   * Function to render the License section of the README.
   * If no license is specified, returns a fallback message: "No license specified."
   * @param {string} license - The license name.
   * @returns {string} - The License section in Markdown format.
   */
  function renderLicenseSection(license) {
    if (!license) return '## License\nNo license specified.';
    return `## License\nThis project is licensed under the ${license} license.`;
  }
  
  /**
   * Function to generate the full Markdown for the README file.
   * @param {Object} data - The data object containing project details.
   * @param {string} data.title - The project title.
   * @param {string} data.description - The project description.
   * @param {string} data.installation - Installation instructions.
   * @param {string} data.usage - Usage instructions.
   * @param {string} data.contributing - Contribution guidelines.
   * @param {string} data.tests - Testing instructions.
   * @param {string} data.license - The project license (e.g., "MIT", "GPL 3.0", "Apache 2.0").
   * @param {string} data.email - The contact email for questions.
   * @param {string} data.github - The GitHub username for the project owner.
   * @returns {string} - The complete Markdown for the README file.
   */
  function generateMarkdown({
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    email,
    github
  }) {
    return `# ${title}
    
    ## Description
    ${description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Contributing
    ${contributing}
    
    ## Tests
    ${tests}
    
    ${renderLicenseSection(license)}
    
    ## Questions
    For any questions, contact me at [${email}](mailto:${email}).
    You can also find more of my work at [${github}](https://github.com/${github}).
    
    ${renderLicenseBadge(license)}
    `;
  }
  
  export default generateMarkdown;