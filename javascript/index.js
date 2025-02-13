let container = document.getElementById("container");
let btnContainer = document.getElementById("btn-container");

async function getData() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP Request : ${response.statusText}`);
        }
        let result = await response.json();
        localStorage.setItem("products", JSON.stringify(result));
        createButton();
        displayData();
    } catch (err) {
        console.error(err);
    }
}
function createButton() {
    btnContainer.innerHTML = ``;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length !== 0) {
        let result = Array.from(new Set(products.map(obj => obj.category)));
        result.forEach(ele => {
            let button = document.createElement("button");
            button.className = "btn btn-outline-secondary px-3 py-2 fs-3";
            button.textContent = ele;
            button.addEventListener("click", () => {
                filterData(ele);
            })
            btnContainer.appendChild(button);
        })
    }
}
function filterData(category) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length !== 0) {
        let result = products.filter(obj => obj.category === category);
        displayData(result);
    }
}

function displayData(filterProducts) {
    container.innerHTML = ``;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (filterProducts !== undefined) {
        products = filterProducts;
    }
    if (products.length === 0) {
        container.innerHTML = "No data Available";
    } else {
        products.forEach(obj => {
            let item = document.createElement("div");
            item.className = "border border-3 border-warning m-2 p-2 d-flex gap-2 align-items-center    ";
            item.innerHTML = `
                <div>
                    <img class='w-100 object-fit-contain' style='height : 250px' src=${obj.image}>
                </div>
                <div>
                    <h3 class="text-center">Title : ${obj.title}</h3>
                <p class="mb-0">Description : ${obj.description}</p>
                <p class="fw-bold">Category : ${obj.category}</p>
                </div>
            `;
            container.appendChild(item);
        })
    }
}



window.onload = getData;