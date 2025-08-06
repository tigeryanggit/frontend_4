//HTML Collections

let output;

//a. get child from parent - return node list
const parent = document.querySelector(".container");
console.log(parent);

//b. get children from parent - return html collection ***
output = parent.children;

//c. get forth child from parent


output = parent.children[3];
output.innerText;
console.log(output.innerText);
console.log(output.className);
console.log(output.nodeName);

//update children property

output.innerText = "new text";
output.style.color = "red";

//d. from child to get parent

parent1 = output.parentElement;
console.log(parent1);


//e. get first child from parent

firstChild = parent1.firstElementChild;
console.log(firstChild);


//f. get last child from parent

lastChild = parent1.lastElementChild;
console.log(lastChild);


//g. get next sibling from child

secondChild = firstChild.nextElementSibling;
console.log(secondChild);



//h. get previous sibling from child

forthChild = lastChild.previousElementSibling;
console.log(forthChild);



// i. get n-child from parent

const lastFormChild = document.querySelector("form div:nth-child(2)");
console.log(lastFormChild);
// firstFormChild = parent2.firstElementChild;
// console.log(firstFormChild)