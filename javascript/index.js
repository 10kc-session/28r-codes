/**
 *  Variables ? 
 *  -----------
 *      Variable is container which is used to store the data and 
 *      to perform specific operations
 *      In Javascript there are four variables
 *          1. var
 *          2. let  
 *          3. const
 *          4. global variable (automatic)
 * 
 *      var , let and const variables can be hoisted in javascript
 *      
 *      Syn : 
 *              varaible variableName/identifier/referenceVaraible = value;
 *              Ex : var a = 10; 
 * 
 *       declaration 
 *              varaible variableName; -> undefined
 *       assignment
 *              variableName = value;
 *       initialization
 *              -> declaration + assignment
 *              variable variableName = value;
 *      identifiers
 *      -----------
 *          identifiers cannot start with numbers 
 *          in identifiers only two special characters are allowed 
 *              i.e _ , $
 *          we have to follow name convention in any language
 *           for variables -> camel case
 *           for classes   -> pascal case
 *           for final variables -> Capital letters 
 *          identifiers cannot be keywords
 */

var a; // undefined -> declaration
console.log(a); // undefined
a = 20;   // 20   -> assingment
console.log(a); // 20

var b = 30; // initilization
console.log(b); // 30

var _c;
console.log(_c);

var $ = 10;
console.log($);

var _1234 = 1234;
console.log(_1234);

var A = 10; // not a good practice 
console.log(A);

var isMale = true;
console.log(isMale);

// var isFemale;
// console.log(isFemale); // undefined , isFemale ,

console.clear();

var _1_2_34;
console.log(1234);

console.clear();

var $123Abc_x;
// console.log($123abc_x);

console.log(xyz); // undefined
var xyz;


console.clear();

console.log(xyz); // undefined
var xyz; // ->  undefined
var xyZ = 10; // -> 10 X undefined
console.log(xyZ); // 10 
xyZ = xyz; // re assingnment
console.log(xyZ); // xyz , undefined , 10 , not defined
console.log(xyz); // undefined , 10 , not defined


// var _$1_#_3 = 10;
// console.log(_$1_#_3);

console.clear();

var let = 10;
console.log(let);

// var const = 20;
// console.log(const);
