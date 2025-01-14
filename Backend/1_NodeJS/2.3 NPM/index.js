/*
var generateName = require('sillyname'); //CJS-Common JS
import generateName from 'sillyname'; //ESM-EcmaScript Modules

To use EcmaScript we have to go package.json and add "type": "module", after the "main": index.js

Both are sillyName
*/
import generateName from 'sillyname';
import superheroes from 'superheroes';

var sillyName = generateName();
/*
console.log('My name is ' + sillyName);
console.log(`My name is ${sillyName}.`); 
console.log('My name is',sillyName);

All are same
 */

// superheroes.all; ---> console.log(superheroes.all); will print all names of superheroes
//=> ['3-D Man', 'A-Bomb', …]
 
var superHero=superheroes.random();
//=> 'Spider-Ham'

console.log(`My name is ${sillyName} and ${superHero}!`); 

