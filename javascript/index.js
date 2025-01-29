// /**
//  *  Anonymous functions and Arrow Functions *
//  *  ----------------------------------------
//  *      The Functions which are stored in variable as a value are know as first
//  *      class functions or function expressions
//  *
//  *       The Functions which are not having any
//  *       function name and stored in a variable or
//  *       passed as argument to another function
//  *       is known as anonymous functions
//  *
//  *      Use :
//  *              callbacks , promises , DOM , Events,
//  *              Asynchronous Operations
//  *         Syn :
//  *                 variable referenceVariable = function(parameter1 ,.....,parameterN){
//  *                      // statements
//  *                      [return value]
//  *                 }
//  *
//  * Arrow Function
//  * --------------
//  *      The Function without function keyword and function name and denoted by
//  *      => is known as arrow function
//  *      This is Short hand of Anonymous function.
//  *      Introduced in ES6
//  *      This function is stored in varaible or passed as an argument to another function
//  *      In Arrow Function , this keyword behaviour is different compared to
//  *      named function and anonymous function.
//  *
//  *      USE:
//  *              callbacks , promises , DOM , Events,
//  *              Asynchronous Operations
//  *
//  *      Syn :  varaible refVar = ([parameters]) => {
//  *                      // statements
//  *                     [return value]
//  *              }
//  *              refVar([arguments]);
//  *
//  */
// var x = () => console.log("Javascript");
// x();

// var y = () => {
//     console.log("1");
//     console.log("2");
// }
// y();

// var z = a => console.log(a + 10);
// z(10);

// var a = (x, y) => {
//     console.log(x + y);
//     console.log(x * y);
// }
// a(2, 3);

// var b = x => x + 10;
// console.log(b(10));


// var c = () => "Javascript is Awesome";
// console.log(c());


// // write a arrow function which takes three parameters
// // and returns sum of three numbers

// console.clear();

// var sum = (a, b, c) => {
//     return a + b + c;
// }
// // console.log(sum(10, 20, 30));

// /**
//  * write a arrow function which takes two parameter ,
//  * one is array reference , second is element to insert
//  * in array , and finally return the length of updated
//  * array
//  */


// var arrray = [1, 2, 3, 4];
// var element = 5;

// var insertElement = (arr, ele) => arr.push(ele);
// console.log(insertElement(arrray, element));

// /**
//  *  write a arrow function which takes arguments as array
//  *  and deletes all elements from an array and return
//  *  empty array
//  */

// var deleteAllElements = (arr) => {
//     // var length = arr.length;
//     // for (var i = 0; i < length; i++) {
//     //     arr.pop();
//     // }
//     arr.length = 0;
//     return arr;
// }
// console.log(deleteAllElements([1, 2, 3, 4]))

// // var x = function () {
// //     console.log("Print");
// // }
// // console.log(x);
// // x();

// // //  write a anonymous function which takes
// // // two argument and return there sum

// // var sum = function (a, b) {
// //     return a + b;
// // }
// // console.log(sum(10, 30));

// // var printName = function (a, b, c) {
// //     console.log(a, b, c);
// //     return a + b + c;
// // }
// // console.log(printName("x", "y", "z"));

/**
 *  Callbacks in javascript
 *  -----------------------
 *      The function defination which is passed as 
 *      argument to another function , methods , constructor
 *      is known as callback functions
 * 
 *      Callbacks may execute at a time or 
 *      takes some period of duration and executes later
 * 
 *      Use : 
 *              Asynchronous Operations , Event Handling , 
 *              Timers , DOM
 *      Syn :   
 *              function functionName(anotherFunctionDefination){
 *                     anotherFunctionDefination([parameters]);
 *                      [return value]
 *              }
 *              functionName(anotherFunctionDefination);
 */

function x(callback) {
    console.log(callback);
    callback();
}
function y() {
    console.log("Hello World");
}
x(y);