# JSON


JSON, or JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is a text-based data format that represents structured data in the form of key-value pairs. JSON is widely used for data exchange between a server and a web application, as well as for configuration files.

- JSON data is represented as `key-value pairs`.
- Data is enclosed in curly braces `{}`.

#### Key-Value Pairs:

- Each key is a string enclosed in double quotation marks.
- Keys and values are separated by a colon.
- Key-value pairs are separated by commas.

## JS Object -> JSON
- We can convert a Js Object into JSON using `JSON.stringfly(jsObject_name)`
```javascript
const jsonData = JSON.stringfly(jsObject);
```

## JSON -> JS Object
- We can convert a JSON into JS Object using the method `JSON.parse(jsonData)`
```javascript
const jsObject = JSON.parse(jsonData);
```
