import { DomElement, removeAllChildNodes } from "./utils.js";

function displayMenu() {
    console.log("display menu ran");

    const contentDiv = document.querySelector("#content");

    //clear content section
    removeAllChildNodes(contentDiv);
    const menuContainer = new DomElement (
        "div",
        { id: "menu-container", class:  "fade-in inner-content-container"}, "");
    
    const menuHeader = new DomElement (
        "h2",
        {},
        "Menu"
    )
    menuContainer.append(menuHeader);
    contentDiv.appendChild(menuContainer);

}

export { displayMenu };