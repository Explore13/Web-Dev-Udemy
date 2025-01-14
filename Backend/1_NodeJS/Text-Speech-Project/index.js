import googleTTS from "google-tts-api";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: "Enter Your Text Here : ",
      name: "text",
    }
  ])
  .then((answers) => {
    const textToSpeak = answers.text;
    const language = "en"; // Language code for English

    // Generate a URL for the speech audio
    const audioURL = googleTTS.getAudioUrl(textToSpeak, {
      lang: language,
      slow: true, // Set to true for a slower speech rate
    });

    console.log("The Audio File : " + audioURL);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
