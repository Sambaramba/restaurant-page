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
    
    const startersSection = new DomElement ("section", {}, "");
    const starterHeader = new DomElement ("h3", {}, "Starters");
    startersSection.append(starterHeader);

    const mainsSection = new  DomElement ("section", {}, "");
    const mainsHeader = new DomElement ("h3", {}, "Mains");
    mainsSection.append(mainsHeader);

    const dessertsSection = new  DomElement ("section", {}, "");
    const dessertsHeader = new DomElement ("h3", {}, "Desserts");
    dessertsSection.append(dessertsHeader);

    const drinksSection = new  DomElement ("section", {}, "");
    const drinksHeader = new DomElement ("h3", {}, "Drinks");
    drinksSection.append(drinksHeader);


    menuContainer.append(menuHeader, startersSection, mainsSection, dessertsSection, drinksSection);
    contentDiv.appendChild(menuContainer);

}

export { displayMenu };