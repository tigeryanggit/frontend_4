document.addEventListener("DOMContentLoaded",()=>{
    const header = document.querySelector("header");

    function toggleHeaderTransparency() {

        if(window.scroll>0) {
            header.classList.add("transparency");
        }
        else {
            header.classList.remove("transparency");

        }
        
    }

    window.addEventListener(("scroll"),toggleHeaderTransparency);
}
);

