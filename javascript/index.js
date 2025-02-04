/**
 * Callback Hells
 * Promises
 * Async and Await
 */

// let add = (val, callback) => callback(val + 10, true);
// let sub = (val, callback) => callback(val - 5, false);
// let div = (val, callback) => callback(val / 2, false);
// let mul = (val, callback) => callback(val * 3, true);

let add = val => Promise.resolve(val + 10);
let sub = val => Promise.resolve(val - 5);
let div = val => Promise.resolve(val / 2);
let mul = val => Promise.resolve(val * 3);


// add(20)
//     .then(addRes => sub(addRes))
//     .then(subRes => div(subRes))
//     .then(divRes => mul(divRes))
//     .then(finalRes => console.log(finalRes))
//     .catch(err => console.error(err))
// Promise.resolve(10)
//     .then(res => `Ten : ${res}`).then(res => console.log(res))



// add(10, function (addRes, status) {
//     if (status) {
//         sub(addRes, function (subRes, status) {
//             if (status) {
//                 div(subRes, function (divRes, status) {
//                     if (status) {
//                         mul(divRes, function (finalRes, status) {
//                             if (status) {
//                                 console.log(finalRes)
//                             } else {
//                                 console.log("Multiplication Failed");
//                             }
//                         })
//                     } else {
//                         console.log("Division Failed");
//                     }
//                 })
//             } else {
//                 console.log("Subtraction Failed");
//             }
//         })
//     } else {
//         console.log("Addition Failed")
//     }
// });

// let promise = new Promise((resolve, reject) => {
//     resolve("Promise Rejected");
// });
// promise.then((res) => {
//     console.log(res);
//     return "javascript"
// }).catch(err => console.error(err));

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolve")
//     }, 100);
// });
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 2 Reject");
//     }, 2000);
// });
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 Resolved");
//     }, 500);
// });
// let promises = [promise1, promise2, promise3];
// Promise.all(promises).then(res => console.log(res)).catch(err => console.error(err));
// Promise.allSettled(promises).then(res => console.log(res)).catch(err => console.error(err));
// Promise.race(promises).then(res => console.log(res)).catch(err => console.error(err));
// Promise.any(promises).then(res => console.log(res)).catch(err => console.error(err));
// Promise.resolve("Javascript").then(res => console.log(res));
// Promise.reject("Rejected").catch(errr => console.error(errr));


// promise1.then(res => {
//     console.log(res);
//     promise2.then(res => {
//         console.log(res);
//         promise3.then((res) => {
//             console.log(res);
//         })
//     })
// });
