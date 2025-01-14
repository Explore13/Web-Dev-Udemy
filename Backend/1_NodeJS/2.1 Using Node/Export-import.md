# Export-Import in JS

## 1. Common JavaScript Method(CJS)

#### Export :

- We use `module.exports` object to export and `require` function to import in CJS

- ##### Exporting in CJS :

```javascript
// Exporting in a CommonJS module
const variable1 = "Value 1";
const variable2 = "Value 2";

module.exports = {
  variable1,
  variable2,
};
```

- ##### Importing in CJS :

```javascript
// Importing in a CommonJS module
const myModule = require("./myModule");
console.log(myModule.variable1);
console.log(myModule.variable2);
```

## 2. EcmaScript Module Method (ESM)

- At first we have to create a `package.json` file by `npm init`
- We have to add `"type": "module"` inside the `package.json` file
- We use `export default` to export a single variable
<!-- - We should use `export` to export multiple variables instead of using `export default` -->

### Single Variable :

##### Export :

```javascript
var a = 12;
export default a;
```

##### Import :

```javascript
import data from "./export.js";
console.log(data);
```

### Multiple Variables :

#### Method-1 :

- If we use `export default` then we have to follow this process.
- ##### Export :

```javascript
var a = 12;
var b = 13;
export default { a, b };
```

- ##### Import :

```javascript
import values from "./export.js";
console.log(values);
console.log(values.a);
console.log(values.b);
```

#### Method-2 :

- We can use only `export`, follow below process
- ##### Export :

```javascript
const variable1 = "value 1";
const variable2 = "Value 2";
export { variable1, variable2 };
```

- ##### Import :

```javascript
import { variable1, variable2 } from "./export.js";
console.log(variable1);
console.log(variable2);
```

## Note : 
In ESM, the file extension is usually `.mjs` for ESM modules, although you can use the `.js` extension for ESM if you use the `"type": "module"` field in your package.json 