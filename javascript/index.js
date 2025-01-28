// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[4]);
// // console.log(arr.length);
// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// // console.table(arr);
// /**
//  *  for in loop , for of loop
//  *  -------------------------
//  *  syn :
//  *          for(keys/indexes in obj/array/string){
//  *
//  *          }
//  *  for of
//  *  ------
//  *      array , strings , set , maps
//  *          for(variable value of any DataStru){
//  *
//  *          }
//  */
// var arr = [1, 2, 3, 4, 5];
// for (var index in arr) {
//     console.log(arr[index]);
// }
// var str = "Hello World";
// for (var index in str) {
//     console.log(str[index]);
// }

// console.clear();

// for (var ele of arr) {
//     console.log(ele);
// }

// for (var char of str) {
//     console.log(char);
// }

// console.clear();

// arr = ["Srinivas", "Vinay", "Ravi", "Kavitha", "Midhilesh"];
// // console.log(arr);
// var res = arr.push("Bharath");
// console.log(arr);
// console.log(res);
// //  ...
// arr.push("Ayesha", "Naresh");
// console.table(arr);

// arr.unshift("Arun");
// console.table(arr);

// console.log(arr.unshift("Pooja", "Alekya", "Shilpa"));
// console.table(arr);

// var res = arr.pop();
// console.table(arr);
// console.log(res);

// arr.shift();
// console.table(arr);

// for (i = 1; i <= 5; i++) {
//     arr.shift();
// }

// console.table(arr);


//  write a function to find even numbers in array ?
//  isEven
// one pare -> arr

// function isEven(arr) {
//     for (var ele of arr) {
//         if (ele % 2 == 0) {
//             console.log(ele);
//         }
//     }
// }
// isEven([2, 1, 5, 6, 3, 2, 7, 8, 9, 3, 3, 1, 5, 7, 7]);

// function seperateEvenAndOdd(arr) {
//     var evenArray = [];
//     var oddArray = [];
//     for (var ele of arr) {
//         if (ele % 2 == 0) {
//             evenArray.push(ele);
//         } else {
//             oddArray.push(ele);
//         }
//     }
//     console.log(`Even Array : ${evenArray}`);
//     console.log(`Odd Array : `, oddArray);
// }
// seperateEvenAndOdd([2, 1, 4, 12, 13, 76, 98, 32, 75]);

//  [1,1,3,4,1,2,3,4,5,1,0];
//  [0,1,1,12,3,3,4,5];

// function isPrime(ele) {
//     if (ele <= 1) return false;
//     for (var i = 2; i <= Math.floor(ele / 2); i++) {
//         if (ele % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function displayData(arr) {
//     for (var ele of arr) {
//         if (isPrime(ele)) {
//             console.log(ele);
//         }
//     }
// }
// displayData([13, 15, 7, 9, 12, 5, 7, 4]);


var arr = [2, 5, 3, 4, 1];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr);
}
