import "../css/styles.css";
import { DomElement } from "./utils.js";
import { displayHomepage } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContactPage } from "./contact.js";

console.log("js file is running in browser");

document.addEventListener('DOMContentLoaded',displayHomepage);

//header/home,menu,contact

const header = document.querySelector("header");


header.addEventListener("click", function(event) {
    const closestTab = event.target.closest("button");
    if (!closestTab) {
        console.log("Could not find button element to change tab")
        return;
    }
    console.log(closestTab.id);

    switch (closestTab.id) {
        case "main-header":
        case "home":
            displayHomepage();
            break;
        case "menu":
            displayMenu();
            break;
        case "contact":
            displayContactPage();
            break;
        default:
            console.log(`No id or event listener for ${closestTab} element`);
    }
})

document.body.classList.remove("is-loading");





