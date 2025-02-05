/**
 * Callback Hells
 * Promises
 * Async and Await
 */

// let add = (val, callback) => callback(val + 10, true);
// let sub = (val, callback) => callback(val - 5, false);
// let div = (val, callback) => callback(val / 2, false);
// let mul = (val, callback) => callback(val * 3, true);

// let add = val => Promise.resolve(val + 10);
// let sub = val => Promise.resolve(val - 5);
// let div = val => Promise.resolve(val / 2);
// let mul = val => Promise.resolve(val * 3);


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


/**
 * Async and Await
 * ---------------
 *  Async keyword use to convert function into asynchornous function and 
 *  these function returns promises internally
 *  
 */

// async function conf() {
//     let res = await Promise.resolve("One");
//     console.log(res);
//     let xyz = await 10;
//     console.log(xyz);
//     console.log("Three");
// }
// conf();
// console.log("Two");

// https://fakestoreapi.com/products


/**
 * fetch method is used to get the data from given link and it return a promise object
 * we can perform all http request using fetch i.e get , post , put , patch , delete
 * URL , options
 *      -> 
 */

// fetch("https://fakestoreapi.com/products")
//     .then(response => console.log(response))

// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let result = await response.json();
//     result.forEach(obj => console.log(obj.title))
// }
// getData();

// function validateOrderId(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 1000, "Order Validated")
//     });
// }

// function processPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(reject, 2000, "Payment Failed")
//     });
// }

// function sendEmail(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 1000, "Email Sent")
//     });
// }
// async function placeOrder(orderId) {
//     try {
//         let validateOrderResult = await validateOrderId(orderId);
//         console.log(validateOrderResult);

//         let processPaymentResult = await processPayment(orderId);
//         console.log(processPaymentResult);

//         let sendEmailResult = await sendEmail(orderId);
//         console.log(sendEmailResult);
//     } catch (err) {
//         console.error(err);
//     }
// }
// placeOrder(12345);
// console.log(2000);

// function placeOrder(orderId) {
//     validateOrderId(orderId).then(res => {
//         console.log(res);
//         return processPayment(orderId);
//     }).then(res => {
//         console.log(res);
//         return sendEmail(orderId)
//     }).then(res => console.log(res));

// }
// placeOrder(12345);