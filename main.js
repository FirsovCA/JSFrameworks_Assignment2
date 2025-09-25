/*
Group 8
Sergei Firsov,
Luigi Jose Lauron,
Fredy Sanchez Granciano
*/

// Import all arrow functions from utilities.js file using destructuring.
import {
    greetNewStudent,
    convertKmToMiles,
    getAverageOfNumericArray,
    generatePassword
} from './utilities.js';

// Print returning results of those functions to the terminal to demonstrate that they work well.
console.log(greetNewStudent('Ethan', 'Miller', 14599890));
console.log(convertKmToMiles(100));
console.log(getAverageOfNumericArray([ 15, 74, 0, -48, 230 ]));
console.log(generatePassword(12));