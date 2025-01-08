/**
 * DOM manipulations
 * -----------------
 *   To manipulate our elements , 
 *   every tag is an object 
 *      
 *      document
 *          body
 *          documentElement
 *          title
 *          head
 *          links
 *          images
 *          URL
 *          forms
 */
console.log(window);
console.log(window.document.documentElement);
console.log(window.document.body);
console.log(window.document.title);
window.document.title = "DOM"
console.log(window.document.head);
console.log(document.title);
var body = document.body;
console.log(body);
var links = document.links;
console.log(links);
var images = document.images;

console.clear();
// var div = document.createElement("div");
// div.innerText = "Created My First Element Using createElement()";

// document.body.appendChild(div);

// console.log(div.innerText);
// console.log(div.innerHTML);

// console.log(document.body.innerText);
// console.log(document.body.innerHTML);

// var div = document.createElement("div");
// div.className = "container";
// console.log(div);

// var img = document.createElement("img");
// img.src = '../Images/img4.jpg';

// var h2 = document.createElement("h2");
// h2.innerText = "Cat Image";

// var p = document.createElement("p");
// p.innerText = "Domestic cats are characterized by retractable claws, powerful bodies, acute senses, long tails, and specialized teeth adapted for hunting prey. The following article deals with general characteristics of the domestic cat. For information on larger cats, see their individual entries (such as lion, tiger, and leopard).";

// div.append(img, h2, p);
// // div.appendChild(img);
// // div.appendChild(h2);
// // div.appendChild(p);

// document.body.appendChild(div);

var header = document.createElement("header");

var img = document.createElement("img");
img.src = '../Images/img4.jpg';

var item = document.createElement("div");
item.className = "item";

var a1 = document.createElement("a");
a1.innerText = "Menu";
a1.href = "#"

var a2 = document.createElement("a");
a2.innerText = "About";
a2.href = "#"

var a3 = document.createElement("a");
a3.innerText = "Contact";
a3.href = "#"

item.append(a1, a2, a3);

header.append(img, item);

document.body.appendChild(header);