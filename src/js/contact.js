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
    const contactInnerContainer = new DomElement ("div",{id: "contact-inner-container"},"");

    const contactInfoSection = new DomElement ("section",{class: "contact-section"},"");
    const contactInfoHeader = new DomElement ("h3",{},"Contact Us");
    contactInfoSection.append(contactInfoHeader);

    const openingTimesSection = new DomElement ("Section",{},"");
    
    contactInnerContainer.append(contactInfoSection,openingTimesSection);
    contactContainer.append(contactInnerContainer);
    contentDiv.append(contactContainer);
}

export { displayContactPage };