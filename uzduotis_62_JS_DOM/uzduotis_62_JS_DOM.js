let newList = document.createElement("li");
document.querySelectorAll("li").style.fontSize = "36 px";
document.querySelectorAll("li").style.padding = "24 px";

let text = document.createTextNode("Musu produktai");
newList.append(text);


let element1 = document.createElement("div");
let element2 = document.createElement("div");
let element3 = document.createElement("div");

let text1 = document.createTextNode("Example with innerHTML;");
let text2 = document.createTextNode("Example with textContent;");
let text3 = document.createTextNode("Example with appendChild.");

newList.appendChild(element1, element2, element3);

element1.appendChild(text1);
element2.appendChild(text2);
element2.appendChild(text3);

text1.setAttribute("id", "try1");
document.getElementById("try1").innerHTML = element1;
document.write(element2);
window.alert(element3);
