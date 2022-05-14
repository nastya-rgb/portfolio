"use strict";

let lastScrollTop = 0;
const navi = document.getElementById("header")
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.classList.add("header_hidden")

    }
    else {
        header.classList.remove("header_hidden")
    }
    lastScrollTop = scrollTop;
}),
  
    
    document.getElementById('focusmeplease').focus();

