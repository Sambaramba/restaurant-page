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
    // const divider = new DomElement ("span", {class: "menu-divider"},"");
    // menuItemDiv.cloneNode(false);

    
    function createSubSection (name, text) {
        const subSectionDiv = new DomElement ("div", {class: "sub-section-container"}, "");
        const divider = new DomElement ("hr", {class: "menu-divider"},"");
        const header = new DomElement ("h4", {}, `${name}`);
        const description = new DomElement ("p", {}, `${text}`);
        subSectionDiv.append(divider,header, description);
        return subSectionDiv;
    }

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
    // breakfastSection.append(breakfastHeader);

    //breakfast menu items
    const veggieBreakfast = createMenuItem("Vegetarian Breakfast", "£13", "Sausages, Eggs, Creamy garlic Spinach sauce, Grilled Tomatoes, Mushrooms, Wholemeal Bread and butter")
    const veganBreakfast = createMenuItem("Vegan Breakfast", "£13", "Sausages, Scrambled Tofu, Creamy garlic Spinach sauce, Grilled Tomatoes, Mushrooms, Wholemeal Bread and butter")

    breakfastSection.append(breakfastHeader,veggieBreakfast, veganBreakfast);


    const lunchSection = new  DomElement ("section", {}, "");
    const lunchHeader = new DomElement ("h3", {}, "Lunch");

    //lunch menu items
    const nachos = createMenuItem("Loaded Nachos", "14", "lentil/fake mince chilli,Jalapenos, Tomato Salsa, Guacamole, Light Creme Fraiche,Olives,Wholemeal Tortilla Nachos");
    //"all pizzas come on wholemeal base with low-fat high-protein cheese but can subsite to chickpea base if allergic to gluten"
    const pizzaSubSection = createSubSection("Pizzas", "All pizzas come on wholemeal base with low-fat high-protein cheese but can substitute to chickpea base if allergic to gluten");
    const texMexPizza = createMenuItem("Tex Mex Pizza", "£15", "Black Beans, mince/nutritional yeast,Sweetcorn, peppers,onions,jalepenos, enchilada sauce, spinach, coriander");
    const spinachMushPizza = createMenuItem("Spinach and mushroom pizza", "£15", "Spinach, mushrooms,black olives,artichoke,sweetcorn,garlic, fake chicken/nutritional yeast");
    pizzaSubSection.append(texMexPizza, spinachMushPizza);

    const burgerSubSection = createSubSection("Burgers", "All burgers come in wholemeal buns, served with large fresh salad and baked chips")
    const blueCheeseBurger = createMenuItem("Blue Cheese Burger","£15","Blue cheese, chedder cheese, fake beef/lentil patty, caramalised onions, baby spinach");
    const doubleCheeseBurger = createMenuItem("Bacon Double Cheese Burger", "£16", "Cheddar Cheese, 2 Patties(fake meat/lentil), fake bacon");
    burgerSubSection.append(blueCheeseBurger, doubleCheeseBurger);

    lunchSection.append(lunchHeader,nachos,pizzaSubSection, burgerSubSection);


    const dessertSection = new  DomElement ("section", {}, "");
    const dessertHeader = new DomElement ("h3", {}, "Desserts");

    //desert items
    const banoffiePie = createMenuItem("Banoffie Pie","£7", "Vanilla oat base, toffee caramel, bananas, oaty whipped creamy mascapone, dark choc shavings");
    const veganBanoffiePie = createMenuItem("Vegan Banoffie Pie","£7", "Vanilla oat base, date caramel, bananas, oaty whipped cream, dark choc shavings");
    const biscoffCheesecake = createMenuItem("Biscoff Cheesecake", "£7", "Creamy vanilla cheesecake with crushed Biscoff® pieces. Topped with delicious Biscoff® spread & crumb, on crunchy oaty vanilla biscuit base.")
    const etonMess = createMenuItem("Clotted cream Eton Mess", "£7", "delicious clotted cream, with fresh berries and broken up bits of crunchy meringue, drizzled with raspberry coulis");
    dessertSection.append(dessertHeader,banoffiePie, veganBanoffiePie, biscoffCheesecake,etonMess);

    const drinksSection = new  DomElement ("section", {}, "");
    const drinksHeader = new DomElement ("h3", {}, "Drinks");
    drinksSection.append(drinksHeader);


    menuContainer.append(menuHeader, breakfastSection, lunchSection, dessertSection, drinksSection);
    contentDiv.appendChild(menuContainer);

}

export { displayMenu };