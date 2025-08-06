// js update css
const text = document.querySelector("header");
const itemList = document.querySelector("#item-list");
const items = itemList.querySelectorAll("li");

function run() {
// method 1: add css classes into classList - DOMTokenList

// text.className="card text-red";
    text.classList.add("card","text-red");
// method 2: add css class to the element
    itemList.classList.add("card","text-red");
// classList Function: remove css class
    text.classList.remove("text-red");
// classList function: replace css class
    text.classList.replace("card", "text-red");
// toggle function to keep the css state value
    text.classList.toggle("hidden");
// loop nodelist to update css
items.forEach((item,index) => {
    if (index===1) {
        item.style.outline="2px solid red";

    }


});
}

document.getElementById("clear").onclick = run;

