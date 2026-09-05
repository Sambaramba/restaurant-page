import { DomElement, removeAllChildNodes } from "./utils.js";

function displayMenu() {
    console.log("display menu ran");

    const contentDiv = document.querySelector("#content");

    //clear content section
    removeAllChildNodes(contentDiv);
    const menuContainer = new DomElement (
        "div",
        { id: "menu-container", class:  "fade-in inner-content-container"},
         ""
        );
    
    const menuHeader = new DomElement ("h2",{},"Menu")
    
    const breakfastSection = new DomElement ("section", {}, "");
    const breakfastHeader = new DomElement ("h3", {}, "Breakfast");
    breakfastSection.append(breakfastHeader);

    const lunchSection = new  DomElement ("section", {}, "");
    const lunchHeader = new DomElement ("h3", {}, "Lunch");
    lunchSection.append(lunchHeader);

    const dessertSection = new  DomElement ("section", {}, "");
    const dessertHeader = new DomElement ("h3", {}, "Desserts");
    dessertSection.append(dessertHeader);

    const drinksSection = new  DomElement ("section", {}, "");
    const drinksHeader = new DomElement ("h3", {}, "Drinks");
    drinksSection.append(drinksHeader);


    menuContainer.append(menuHeader, breakfastSection, lunchSection, dessertSection, drinksSection);
    contentDiv.appendChild(menuContainer);

}

export { displayMenu };