/**
 * Object Methods in Javascript
 * ----------------------------
 *      keys , values , create , entries , seal , freeze , assign 
 */
let obj1 = {
    "empName": "Vijay",
    "empDept": "SE"
}
let result = Object.values(obj1);
console.log(result);

const { empName, empDept } = obj1;
console.log(empName, empDept);

const [key1, key2] = Object.keys(obj1);
console.log(key1, key2);

result = Object.entries(obj1);
console.log(result);

for (let [key, value] of result) {
    console.log(key + " : " + value);
}
console.clear();
const obj2 = {
    "animal": "dog",
    "bread": "Indie"
}
// Object.seal(obj2);

// allows reading and updating 

obj2.animal = "Cat";
obj2.food = "Wiskus";

delete obj2.bread;

console.log(obj2);

console.clear();

const obj3 = {
    "animal": "dog",
    "bread": "Indie"
}

Object.freeze(obj3);

obj3.animal = "Kangaroo";
delete obj3.animal

obj3.food = "Milk";

console.log(obj3);

// console.log(Object.getOwnPropertyDescriptors(obj3));;

console.clear();

let obj = {};

Object.defineProperties(obj, {
    "name": {
        value: "Hemanth",
        enumerable: true,
        writable: true,
        configurable: true
    },
    "salary": {
        value: "10k",
        enumerable: false,
        writable: true,
        configurable: false
    }
});



obj.salary = "20k";
obj.name = "Hemanth Billa"

delete obj.name;

console.log(obj.salary, obj.name);

let obj5 = Object.defineProperty({}, "name", {
    value: "XYZ",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(obj5);


let obj6 = {
    "street": "KPHB",
    "city": "Hyderabad"
}
console.log(Object.getOwnPropertyDescriptors(obj6));
console.log(Object.getOwnPropertyDescriptor(obj6, "street"));

Object.freeze(obj6);
console.clear();
console.log(Object.getOwnPropertyDescriptors(obj6));

console.clear();

let obj7 = {
    "product": "Laptop",
    "price": "35000",
    "brand": "HP"
}

let obj8 = Object.create(obj7);
console.log(obj8);
console.log(obj8.product, obj8.price, obj8.brand);

let obj9 = Object.create(obj7, {
    "service": {
        value: "Hyderabab",
        enumerable: true,
        writable: true,
        configurable: true
    },
    "warranty": {
        value: "2 Years",
        enumerable: true,
        writable: true,
        configurable: true
    }
});
console.log(obj9);


console.clear();

let obj10 = {
    "name": "Rahul"
}
let obj11 = {
    "salary": "30000"
}

let newObj = Object.assign(obj10, obj11);

console.log(newObj);

newObj.salary = "45000";

console.log(obj10);

let obj13 = {
    "xyz": "123"
}

let obj12 = { ...obj13, ...obj11 };
console.log(obj12);

obj12.xyz = "456";

console.log(obj13);

console.log(obj12);
