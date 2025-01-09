/**
 *  DOM
 * ----
 *  document.body
 *  document.images
 *  document.links
 *  document.head , title , forms , URL 
 */

var div1 = document.getElementById("text-1");
div1.innerText = "<b>Javascript</b>";

var div2 = document.getElementById("text-2");
div2.innerHTML = "<b style='color : red'>Javascript</b>"
console.log(div2.innerHTML);
console.log(div2);

var flag = window.confirm("Do you really want to delete ?");
console.log(flag);

if (flag) {
    div2.remove();
}


/**
 * if(condition){
 * 
 * }else{
 *      
 * }
 */