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
    
    //can you make copyable dom elements with class?

    //for each  - div,header,price,description

    function createMenuItem (name,price,text) {
        const menuItemDiv =  new DomElement ("div", {class: "menu-item-container"},"");

        // const namePriceContainer = new DomElement ("span", {class: "name-price"},"");
        const nameOfItem = new DomElement ("h4", {},`${name}`);
        const priceOfItem = new DomElement ("p", {},`${price}`);
        
        const description = new DomElement ("p", {},`${text}`);

        // namePriceContainer.append(nameOfItem,priceOfItem);
        // menuItemDiv.append(namePriceContainer,description);
        menuItemDiv.append(nameOfItem,priceOfItem,description);
        // parent.appendChild(menuItemDiv);
        return menuItemDiv;
    }


    const breakfastSection = new DomElement ("section", {}, "");
    const breakfastHeader = new DomElement ("h3", {}, "Breakfast");
    breakfastSection.append(breakfastHeader);

    //breakfast menu items
    const veggieBreakfast = createMenuItem("vegetarian Breakfast", "£13", "Sausages, Eggs, Creamy garlic Spinach mornay, Grilled Tomatoes, Mushrooms, Wholemeal Bread and butter")
    // const divider = new DomElement ("span", {class: "menu-divider"},"");
    // menuItemDiv.cloneNode(false);

    breakfastSection.append(veggieBreakfast);

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