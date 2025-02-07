async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    displayData(data);
}
function displayData(data) {
    let container = document.getElementById("container");
    data.forEach(obj => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <div class="image-container"> <img src = '${obj["image"]}'> </div>
            <p>${obj["title"]}</p>
            <p>${obj["category"]}</p>
            <div class='text-container'>${obj["description"]}</div>
        `
        container.appendChild(item);
    });
}
getData();