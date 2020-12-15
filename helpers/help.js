const chalk = require('chalk');

/**
 * This function prints help menu to the screen
 */
const manual = () => {

  console.log(chalk.red("Usage: dictionary [OPTION] [OPTION]\ndictionary -d word"));

  // console.log(" - Sorry, just printing help here");
  process.exit(0);
};

module.exports = {
  manual
};