import { DomElement, removeAllChildNodes } from "./utils.js";

function displayHomepage() {
    console.log("display homepage ran");
    const contentDiv = document.querySelector("#content");

    //clear content section
    removeAllChildNodes(contentDiv);
    
    const welcomeMsg = new DomElement (
        "div",
        { id : "welcome-msg",
          class: "fade-in inner-content-container"
        }, ""
    )
    const welcomeHeader = new DomElement (
        "h2",
        {class: "fade-in" },
        "Welcome!"
    )
    
    const firstWelcomeParagraph = new DomElement (
        "p",
        { class: "fade-in"},
         `Welcome to the soul food cafe, a friendly restaurant with a soulful kick.
          Our aim is to make a restaurant thats good for the planet, healthy and balanced for the body but tastes good too. 
          This combination hopefully creates something that feels good for the soul.`
    )
    const secondWelcomeParagraph = new DomElement (
        "p",
        { class: "fade-in"},
        `We are a vegetarian/vegan restaurant that aims to be transparent about what we do and how we do it. 
        We hopefully create a nice relaxing atmosphere and peace of mind with our ethics. 
        We also have live bands and djs to get a bit of funk and soul into our lives in the evenings when the cafe the has closed`
    )
    const welcomeList = new DomElement ("ul",{}, "");
    
    const listItem1 = new DomElement ("li",{}, "Well balanced meals");
    const listItem2 = new DomElement ("li",{}, "Not losing none veggie/vegan qualities");
    const listItem3 = new DomElement ("li",{}, "Fairtrade");
    const listItem4 = new DomElement ("li",{}, "Both fake meat and non fake meat options for each meal");
    const listItem5 = new DomElement ("li",{}, "Cosy and welcoming restaurant atmosphere");
    const listItem6 = new DomElement ("li",{}, "Play lovely soulful and chilled music");
    const listItem7 = new DomElement ("li",{}, "Clean energy and sustainable throughout the chain");
    const listItem8 = new DomElement ("li",{}, "We aim to be sincere and transparent");

    welcomeList.append(listItem1,listItem2,listItem3,listItem4,listItem5,listItem6,listItem7,listItem8);
    welcomeMsg.append(welcomeHeader,firstWelcomeParagraph,secondWelcomeParagraph,welcomeList);
    contentDiv.appendChild(welcomeMsg);

    return;
}

export { displayHomepage };