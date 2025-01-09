function callhim() {
    var container = document.getElementById("container");
    container.style.background = "yellow";
    document.body.style.background = "red";
}

function deletehim() {
    var container = document.getElementById("container");
    // container.remove();
    // container.style.display = "none";
    container.style.opacity = "0";
}