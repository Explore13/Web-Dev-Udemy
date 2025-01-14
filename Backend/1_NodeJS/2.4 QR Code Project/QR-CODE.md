# QR-CODE GENERATOR
 - Name : qr-code-generator
 - Version : 1.0.0
 - Description : Generate QR-Code from any URL
 - Author : Surya Ghosh

## Process

- Use the inquirer npm package to get user input.
- Use the qr-image npm package to turn the user entered URL into a QR code image.
- Create a txt file to save the user input using the native fs node module.

### Steps :

- `change the directory in terminal`
- `npm init`
- `npm i inquirer qr-image`
- Read the documentation of `inquirer` package

## Inquirer Package

- Change `"type":"module"` inside `package.json`
- import `inquirer`
- copy and paste the sample code taking from the documentation
- Read the documentation carefully
- There are many values of `questions` object, we use `message` and `name`.
- We write object's values inside `{}`

#### Checking :

```javascript
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      /* Pass your questions in here */
      message: "Type Your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });
```

```javascript
Type Your URL:  www.google.com
{ URL: 'www.google.com' }
```

### Take the user input into a variable

- Add below code replacing `console.log(answers);`

```javascript
const url = answers.URL;
```

## QR-Image

- Import `qr-image`
- #### Code
```javascript
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      /* Pass your questions in here */
      message: "Type Your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url = answers.URL;
    // console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```

- #### Console

```javascript
Type Your URL:  https://linktr.ee/suryaghosh_13
The file has been saved!
```