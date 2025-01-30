// Callbacks
// ---------

// function x(callback) {
//     var res = callback(10, 20);
//     return res;
// }
// function y(a, b) {
//     return a + b;
// }
// console.log(x(y));

// function call(callback) {
//     callback();
// }
// call(function () {
//     console.log("Javascript");
// });
// call(function () { console.log("Javascript is Awesome"); });

// function print(callback) {
//     console.log(callback);
//     callback();
// }
// print(() => console.log("Javascript"));

// higher order function
// function demo(callback) {
//     console.log(callback(20));
// }
// demo(a => a + 10);


// function demo(callback1, callback2) {
//     console.log("Callback 1 is Invoked");
//     console.log(callback1());
//     console.log("Callback 2 is Invoked");
//     console.log(callback2());
// }
// demo(() => { return "Callback 1 Executed" },
//     () => { return "Callback 2 Executed" });


// var demo = (a, b) => {
//     console.log("Invoked");
//     a(10, 40);
//     console.log("Again Invoked");
//     b(30, 50);
//     a(60, 50);
//     b(40, 10);
// }
// demo((a, b) => console.log(a + b), (a, b) => console.log(a - b));


/**
 * invoked
 * 50
 * aga
 * -20
 * 110
 * 30
 */
// function one() {
//     console.log("Callback 1 Executed");
// }
// function two() {
//     console.log("Callback 2 Executed");
// }
// demo(one, two);


// var vs let vs const  (Scopes)

/**
 * 1. global scope  
 *      When a variable or function is declared outside the block or outside the 
 *      function is know global scope
 * 2. block scope
 *      The Variable which is declared inside a block {} and cannot be 
 *      accessed from outside of the block is know as block scope 
 *      note : var is global scope varaible , block scope doesnt works
 * 3. local / function scope
 *      The Variable which is declared inside the function and can be accessed
 *      within the function only 
 * 4. lexical scope
 */

// var -> block
// let and const -> block
// var , let ,const -> function

var a;
var a = 30;
console.log(a);
let b;
b = 20;
console.log(b);
const c = 70; // undefined
// const c = 50;
console.log(c);