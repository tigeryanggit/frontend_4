// event object's properties

const logo = document.querySelector("img");
logo.addEventListener("click",function (e) {
    console.log(e.clientX,e.clientY);
    console.log(e.currentTarget);
});

// target - the element that triggered the event
// current target - the element that is currently handling the event
// type - event type
// timeStamp - timestamp of the event triggered
// clientX - x position of the mouse click relative to window
// clientY - y position of the mouse click relative to window
// offsetX - x position of the mouse click relative to element
// offsetY - Y position of the mouse click relative to element
// pageX - x position of the mouse click relative to page
// pageY - y position of the mouse click relative to page
// screenX - x position of the mouse click relative to screen
// screenY - y position of the mouse click relative to screen



// prevent browser default behavior / stop actions
document.querySelector("a").addEventListener("click",function (e) {
    e.preventDefault();
    console.log("a Link was clicked");
});

function onDrag(e) {
    document.querySelector("h1").textContent = `X: ${e.clientX} Y:${e.clientY}`;
}

logo.addEventListener("drag", onDrag);

// =========================================================
// keyboard events

const itemInput = document.getElementById("item-input");
// key press


const onKeyPress = e=> console.log("keypress");
itemInput.addEventListener("keypress",onKeyPress);

//key up
const onKeyUp = e=> console.log("key up");
itemInput.addEventListener("keyup", onKeyUp);

//key down
const onKeyDown = (e) => {
    if (e.key==="Enter") {
        e.preventDefault();
        console.log("enter was pressed");
    }

    if (e.code==="Digit1") {
        console.log("you press 1");
    }
    if (e.repeat) {
        console.log("you are holding down" + e.key);
    }
    console.log("Shift:" + e.shiftKey);
    console.log("Control:" + e.ctrlKey);
    console.log("Shift:" + e.shiftKey);
    console.log("Alt:" + e.altkey);

    if (e.shiftKey && e.key==="K"){
        console.log("you pressed shift and k");
    }
};


itemInput.addEventListener("keydown", onKeyDown);

// =====================================================
// input events 

const itemInput2 = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

// input event handler get the value of the input field
function onInput(e) {
    heading.textContent = e.target.value;
}

itemInput2.addEventListener("input", onInput);

// checkbox 
function onChecked(e) {
    const isChecked = e.target.checked;
    console.log(isChecked);
    heading.textContent = isChecked ? "checked" : "not checked";
}

priorityInput.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);
