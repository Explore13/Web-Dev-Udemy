# NPM
- NPM - Node Package Manager
- The name npm `(Node Package Manager)` stems from when npm first was created as a package manager for Node.js.
- All npm packages are defined in files called `package.json`. The content of package.json must be written in JSON.
- JSON - JavaScript Object Notation

### CREATE NODE PACKAGE
- npm init
- Fill up everything

### INSTALL MODULE
- Go to npm website and find the module, read the documentation
- Change to the folder `cd <folder name>`
- `npm install <package>`
- `dependencies` will be added to `package.json` file automatically.
- #### There are two module systems in NodeJs `CJS` and `ESM`

# 1. CJS
- CJS - Common JS
- `var generateName = require('sillyname');`

# 2. ESM
- ESM - EcmaScript Modules
- `import generateName from 'sillyname';`

### NOTE : 
To use `EcmaScript(ESM)` we have to go package.json and add `"type": "module"` after the `"main": "index.js"`

