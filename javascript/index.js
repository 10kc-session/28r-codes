// function Dog(name, breed, age) {
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.getData = function () {
//         console.log(this.name, this.breed, this.age)
//     }
// }
// let dog1 = new Dog("Pinky", "indie", 3);
// // dog1.getData();

// let dog2 = new Dog("blacky", "German", 1);
// // dog2.getData();

// function printObjData(salary, address) {
//     console.log(this);
//     console.log(`Employee Name is ${this.empName} and His Department is ${this.empDept}
// and salary is ${salary} and address is ${address}`);
// }
// let obj = {
//     "empName": "Srinivas",
//     "empDept": "Software"
// }
// // printObjData.call(obj, 20000, 'hyderabad');
// // printObjData.apply(obj, [20000, 'hyderabad']);
// result = printObjData.bind(obj);
// result(20000, 'hyderabad');


// // let obj1 = {
// //     "empName": "Rajesh",
// //     "empDept": "Software",
// //     "balance": "50000",
// //     "getBalance": function () {
// //         console.log(this.balance);
// //     }
// // }
// // let obj2 = {
// //     "empName": "Ravi Kumar",
// //     "empDept": "Hardware",
// //     "balance": "45000"
// // }

// // obj1.getBalance.call(obj2);
// // obj1.getBalance.apply(obj2);
// // obj1.getBalance.bind(obj2)();

// // printObjData.call(obj1);
// // printObjData.apply(obj1);
// // printObjData.bind(obj1)();
// // call , apply and bind

let container = document.createElement("div");

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums", { method: "GET" });
    let result = await response.json();
    localStorage.setItem("albums", JSON.stringify(result));
    displayData();
}
function displayData() {
    container.innerHTML = ``;
    container.classList.add('container');
    let albums = JSON.parse(localStorage.getItem("albums")) || [];
    if (albums.length > 0) {
        albums.forEach((obj, index) => {
            const { id, title } = obj;
            let item = document.createElement("div");
            item.innerHTML = `
                <p><b>id:</b>${id}</p>
                <p><b>title:</b>${title}</p>
                <button onclick='extraData(${index})'>See More</button>
                <button onclick = 'deleteData(${index})'>Delete</button>
            `;
            container.appendChild(item);
        });
    }
    document.body.appendChild(container);
}

function deleteData(index) {
    let albums = JSON.parse(localStorage.getItem("albums")) || [];
    albums.splice(index, 1);
    localStorage.setItem("albums", JSON.stringify(albums));
    displayData();
}


function extraData(index) {
    // window.location.href = `./more.html?id=${index}`;
    window.open(`./more.html?id=${index}`, "_blank");
}


















getData();