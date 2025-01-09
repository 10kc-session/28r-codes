var container = document.getElementById("container");
var image = document.createElement("img");

function cat() {
    image.src = "../Images/img4.jpg"
    container.appendChild(image);
}
function snake() {
    image.src = "https://www.victorpest.com/media/Articles/Victorpest/How-to-Remove-Snakes-from-your-Property.jpg";
    container.appendChild(image);
}
function dog() {
    image.src = "../Images/img3.webp"
    container.appendChild(image);
}
function rabbit() {
    image.src = "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg"
    container.appendChild(image);
}