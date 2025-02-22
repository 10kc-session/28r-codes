/** 
 *  Modules in Javascript (ES6)
 *  ---------------------------
 *     create seperate file -> and add your code and export
 *      1. named export
 *      2. default export       
 *      import {target} from 'location'
 */
// import { removeDuplicates, obj } from './modules.js';
// import convertToMap from './modules.js';

// import convertToMap, { removeDuplicates, obj, isPalindrome } from './modules.js';

// import * as all from './modules.js';

// const { removeDuplicates, obj, isPalindrome, convertToMap } = all;

const { removeDuplicates, obj, isPalindrome, convertToMap } = await import('./modules.js');
let arr = [1, 1, 1, 2, 3, 4, 5, 1, 3, 7, 8, 4, 5];
console.log(removeDuplicates(arr));
console.log(obj);

arr = Object.entries(obj);

console.log(convertToMap(arr));

console.log(isPalindrome("Madam"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("hemanth"));

