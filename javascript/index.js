const URL = "https://invited-nervous-weaver.glitch.me/students";
let input = document.getElementById("name");
let studentId = document.getElementById("studentid");
async function editData(id) {
    let response = await fetch(`https://invited-nervous-weaver.glitch.me/students/${id}`);
    let student = await response.json();
    console.log(student);
    input.value = student.name;
    studentId.value = student.id;
}
async function saveData() {
    let stId = studentId.value;
    let methodRequest = stId ? "PUT" : "POST";
    let url = stId ? `https://invited-nervous-weaver.glitch.me/students/${stId}` : URL;
    let options = {
        "method": methodRequest,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "name": input.value
        })
    }
    let response = await fetch(url, options);
    if (response.ok) {
        input.value = '';
        getData();
    }
}

async function getData() {
    let response = await fetch(URL);
    let students = await response.json();
    displayData(students);
}

function displayData(students) {
    let container = document.getElementById("container");
    container.innerHTML = ``;
    students.forEach(student => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p><b>ID : </b>${student.id} </p>
            <p><b>NAME : </b>${student.name}</p>
            <button onclick='editData("${student.id}")'>Edit</button>
            <button onclick='deleteData("${student.id}")'>Delete</button>
        `;
        container.appendChild(item);
    });
}

async function deleteData(id) {
    let options = {
        "method": "DELETE"
    }
    let response = await fetch(`https://invited-nervous-weaver.glitch.me/students/${id}`, options);
    if (response.ok) {
        console.log("Deleted");
        getData();
    }
}

async function deleteAllData() {
    let response = await fetch(URL, { method: "GET" });
    let students = await response.json();
    students.forEach(student => deleteData(student.id));
}


getData();