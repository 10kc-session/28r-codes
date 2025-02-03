/**
 * Callback Hells
 * Promises
 * Async and Await
 */

let add = (val, callback) => callback(val + 10, true);
let sub = (val, callback) => callback(val - 5, false);
let div = (val, callback) => callback(val / 2, false);
let mul = (val, callback) => callback(val * 3, true);

add(10, function (addRes, status) {
    if (status) {
        sub(addRes, function (subRes, status) {
            if (status) {
                div(subRes, function (divRes, status) {
                    if (status) {
                        mul(divRes, function (finalRes, status) {
                            if (status) {
                                console.log(finalRes)
                            } else {
                                console.log("Multiplication Failed");
                            }
                        })
                    } else {
                        console.log("Division Failed");
                    }
                })
            } else {
                console.log("Subtraction Failed");
            }
        })
    } else {
        console.log("Addition Failed")
    }
});



let promise = new Promise((resolve, reject) => {
    resolve("Success State");
});

// console.log(promise);

promise
    .then((result) => {
        console.log(result);
        return "Javascript is Awesome";
    })
    .then(res => console.log(res));

/**
 *      new Promise(callback); -> this will invoke promise constructor and creates a new 
 *      promise with resolve state or rejected state which is given in callback 
 */