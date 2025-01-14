import inquirer from 'inquirer';
import en from 'dictionary-en'

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message : "Enter Your Word",
        name : "Word",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let word = answers.Word;

    console.log(answers.Word);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });