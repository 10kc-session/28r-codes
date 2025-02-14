let container = document.getElementById("container");

async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
    displayData();
}
function displayData() {
    let products = JSON.parse(localStorage.getItem("products"));
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <img src=${obj.image}>
            <p>${obj.title}</p>
            <button onclick='showProduct(${obj.id})'>See More</button>
        `
        container.appendChild(item);
    })
}
function showProduct(id) {
    window.location.href = `./product.html?id=${id}`;
}

getData();