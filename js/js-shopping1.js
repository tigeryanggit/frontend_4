// document properties

let output;

//a. document.all - HTMLAllCollection, different with HTMLCollection
output = document.all;
// console.log(output);

//b. document.documentElemet - html tags in text for 
output = document.documentElement;
console.log(output);

//c. document.head - head tags in text form
output = document.head;

//d. HTMLCollecion of head tag direct child
output = document.head.children;
console.log(output);

//e. document other properties
output = document.doctype;
console.log(output);
output = document.domain;
console.log(output);
output = document.URL;
console.log(output);
output = document.characterSet;
console.log(output);
output = document.contentType;
console.log(output);

//f. document.forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].action;
output = document.forms[0].method;
console.log(output);
// document.forms[0].id="my-form"
console.log(document.forms[0].id);

//g. document.links
output = document.links;
output = document.links[0];
output = document.links[0].href="http://www.google.com";
output = document.links[0].id="google";
output = document.links[0].className="google";
output = document.links[0].classList;

console.log(output);

//h. document.images
output = document.images[0].src;
console.log(output);

//HTMLCollections not an array
//i. convert HTMLCollection to array
const forms = Array.from(document.forms);
forms.forEach((x)=>{

    console.log(x);
    console.log(typeof x);
});



// ============================================================================
// select elements   --return Nodelist

//Queryselector ==> Array,   GetElementId ==> need to convert to Array

//a. selector by class

const listItems = document.querySelectorAll(".item");
// select all the text content of li
console.log(listItems[1].innerText);
// select all the html of li
console.log(listItems[1].innerHTML);
// console.log(listItems);
// apply css style into nodelist item

listItems[0].style.color="red";

// queryselector update css is ok
//normal array high order
listItems.forEach((x,index)=>{
    x.style.color="red";
    x.style.fontSize="28px";
    x.style.textDecoration="underline";

    if (index==1){
        x.remove();
    }

    // can't simply modify the nodelist html structure
    // nodeList includes textNode and other Node structures
    if (index==0) {
        x.innerHTML=
        `test
                <button class="remove-item btn-link text-red">
                    Hello
                    <i class="fa-solid fa-xmark">world</i>
                </button>`
    }

});

//===============================================================================
//b. select by element class name - return HTMLCollection

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2[2].innerText);


//convert HTMLCollection to array first
//print the 3rd item innerText

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((listitem,index)=>{
    console.log(listitem.innerText);


});


//==============================================================================
// c. select by element tag name

const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);


//==============================================================================
// d. select by id

const listItems4 = document.getElementById("item-form");
console.log(listItems4);


