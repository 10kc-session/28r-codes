let table = document.getElementById("table");
async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    displayData(data);
}
function displayData(data) {
    createHeader(data[0]);
    let tbody = document.createElement("tbody");
    data.forEach(obj => {
        let tr = document.createElement("tr");
        for (let key in obj) {
            if (key !== "rating") {
                let td = document.createElement("td");
                if (key === "image") {
                    let img = document.createElement("img");
                    img.src = obj[key];
                    td.appendChild(img);
                } else {
                    td.innerText = obj[key];
                }
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}
function createHeader(obj) {
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    for (let key in obj) {
        if (key !== "rating") {
            let th = document.createElement("th");
            th.innerText = key;
            theadRow.appendChild(th);
        }
    }
    thead.appendChild(theadRow);
    table.appendChild(thead);
}

getData();