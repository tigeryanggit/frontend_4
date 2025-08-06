// create element
const div = document.createElement("div");
// add a class to the element
div.className = "text-red";
// add id to the element
div.id ="my-element";
div.setAttribute("title", "my element");
// <div class="my-element" id="my-element" title="my element"></div>
const text = document.createTextNode("Hello World");
// append the text node to the element
div.appendChild(text);

// <div class="my-element" id="my-element" title="my element">Hello World (child of div)</div>

// document.querySelector("ul").appendChild(div);

// create items method 1
function createListItem(item) {
    const li = document.createElement("li");
    li.innerHTML=`${item}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                `;
    document.querySelector("ul").appendChild(li);
    
} 

createListItem("Banana");
createListItem("Water Melon");


// create items method 2

function createListItem2(item, mark) {
    // step 1: create element
    const li = document.createElement("li");
    // step 2: create text node
    li.appendChild(document.createTextNode(item));
    // step 3: create button
    const button = document.createElement("button");
    button.className="remove-item btn-link text-red";
    // step 4: create icon (font awesome)
    const icon = document.createElement("i");
    icon.className = "fa-solid " + mark;
    
    // append sub-items layer by layer
    button.appendChild(icon);
    li.append(button);
    document.querySelector("ul").appendChild(li);
    
}

createListItem2("Cat","fa-xmark");
createListItem2("Tiger","fa-check");
