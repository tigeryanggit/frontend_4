// events

const clearBtn = document.querySelector("#clear");
function onClear() {
    const itemList = document.querySelector("ul");
    const items = document.querySelectorAll("li");
    // method 1: simply update content
    items.forEach((item,index)=>{
        if(index===1) {
            itemList.removeChild(item);
        }
    })
    // itemList.innerHTML="";
}

// direct adding callback to element's api
clearBtn.onclick = () =>{
    alert("clear items");

}

// clear callback by reassign api to null
clearBtn.onclick = null;


// method 2: add event listener
// clearBtn.addEventListener("click", onClear);



// combine setTimeout with event listener
//　valid within 2 seconds
function handleClear () {
    setTimeout(onClear,2000);
}

clearBtn.addEventListener("click",handleClear);
// remove the functions after 5 seconds
setTimeout(() => clearBtn.removeEventListener("click",handleClear),5000);


// =========================================================
// mouse events

const logo = document.querySelector("img");

const onDoubleClick = () => {
    if (document.body.style.backgroundColor != "purple") {
        document.body.style.backgroundColor ="purple";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor ="cyan";
        document.body.style.color = "red";
    }

};




//check on image
logo.addEventListener("dblclick",onDoubleClick);   //double click, quick press
logo.addEventListener("click",onDoubleClick);      //single click
logo.addEventListener("contextmenu",onDoubleClick);      //right click
logo.addEventListener("mousedown",onDoubleClick);      //mouse down
logo.addEventListener("mouseup",onDoubleClick);      //mouse up
logo.addEventListener("wheel",onDoubleClick);      //mouse wheel
logo.addEventListener("mouseover",onDoubleClick);      //mount over / hover
logo.addEventListener("mouseout",onDoubleClick);      //mouse out
logo.addEventListener("dragstart",onDoubleClick);      //drag start
logo.addEventListener("drag",onDoubleClick);      //onDrag
logo.addEventListener("dragend",onDoubleClick);      //drag end


