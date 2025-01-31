/**
 *  Array Iterative Methods
 *  -----------------------
 *      forEach , map , filter , reduce , reduceRight , find , some , every 
 */
// let arr = [1, 2, 3, 4, 5, 6];
// let evenArr = [];
// arr.forEach((ele) => {
//     if (ele % 2 == 0) {
//         evenArr.push(ele);
//     }
// });
// console.log(evenArr);

// arr = [2, 3, 4, 5, 6, 7, 8];
// //  arr = [4 , 9 , 16 , 25 , 36 , 49 , 64];

// arr.forEach((ele, index, arr) => {
//     arr[index] = ele * ele;
// });
// console.log(arr);

// arr = [2, 3, 4, 5, 6, 7];
// let temp = [];
// arr.forEach((ele) => {
//     temp.push(ele * ele);
// })
// console.log(temp);


arr = [1, 2, 3, 4, 5, 6, 7, 8];
let res = arr.map((ele) => ele * 3);
// console.log(res);

console.log(arr.map(ele => "Javascript"));

// [false , false , true , true , .....]

//

// let res = arr.filter((ele, index, arr) => {
//     console.log(ele, index, arr);
//     return ele % 2 != 0;
// });
// console.log(res);


/**
 *   filter elements from array where elements lenght should be > 5
 *      ["javascript" , "java" , "jvm" , "node js" , "filter method"]
 *      ["javascript" , "node js" , "filter method"]
 */
// arr = ["javascript", "java", "jvm", "node js", "filter method"];

// console.log(arr.filter(ele => ele.length > 5));

arr = [10, 20, 40, 50, 32, 31, 90, 4];
// find elements from an array which can divisible by 3 and store in array

arr.filter(ele => ele % 3 == 0).forEach(ele => console.log(ele));

/**
 *      take a array of elements , multiple by 2 and add 1 , later find the number
 *      is even and print the value by method chaining
 */
// [22 , 42 , 102 , 66 , 64 , 182 , 10]  [22 , 42 , 102 , 66 , 64 , 182 , 10]
// arr.map(ele => (ele * 2) + 2).filter(ele => ele % 2 == 0).forEach(ele => console.log(ele));


//  sum of elements
console.clear();

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);
// 

arr = [30, 50, 10, 30];

res = arr.reduce((initialValue, currentValue) => initialValue + currentValue, 30);

arr = ["javascript", "is", "awesome"];

res = '';
for (let str of arr) {
    res = res + " " + str;
}

res = arr.reduceRight((a, b) => a + " " + b);

console.log(res);



