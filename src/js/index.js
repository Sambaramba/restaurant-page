import "../css/styles.css";
import { DomElement } from "./utils.js";
import { displayHomepage } from "./home.js";

console.log("js file is running in browser");

document.addEventListener('DOMContentLoaded',displayHomepage);

//header/home,menu,contact

const header = document.querySelector("header");


header.addEventListener("click", function(event) {
    const closestTab = event.target.closest("button");
    console.log(closestTab.id);
    if (!closestTab) {
        console.log("Could not find button element to change tab")
    }

    switch (closestTab.id) {
        case "main-header":
        case "home":
            displayHomepage();
            break;
        case "menu":
            console.log("add menu display function");
            break;
        case "contact":
            console.log("add contact display function");
            break;
        default:
            console.log(`No id or event listener for ${closestTab} element`);
    }
})





