
// create items method 2

function createNewElement(element,classes) {
    const ele = document.createElement(element);
    ele.className = classes;
    return ele;
}   

function createNewText(text,classes) {
    const t = document.createTextNode(text);
    t.className = classes;
    return t;
}

function appendChild(parent, child) {
    return parent.appendChild(child);
}

function createListItem(item, mark) {

    const li = createNewElement("li","item");
    const button = createNewElement("button","remove-item btn-link text-red");
    const icon = createNewElement("i", "fa-solid "+mark);

    appendChild(li, createNewText(item,null));
    appendChild(button,icon);
    appendChild(li, button);
    const ul = document.querySelector("ul");    
    appendChild(ul, li);
}

createListItem("Mango","fa-check");