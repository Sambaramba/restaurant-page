import { DomElement, removeAllChildNodes } from "./utils.js";

function displayContactPage() {
    console.log("display contact page ran");

    const contentDiv = document.querySelector("#content");

    //clear content section
    removeAllChildNodes(contentDiv);
    const contactContainer = new DomElement (
        "div",
        { id: "contact-container", class:  "fade-in inner-content-container"},
         ""
        );
    const contactInfoContainer = new DomElement ("div",{id: "contact-info-container"},"");
    const contactHeader = new DomElement ("h2",{},"Contact Us");
    
    contactContainer.append(contactInfoContainer);
    contactInfoContainer.append(contactHeader);
    contentDiv.append(contactContainer);
}

export { displayContactPage };