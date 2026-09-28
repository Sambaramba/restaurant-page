import { DomElement, removeAllChildNodes } from "./utils.js";

function displayContactPage() {

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
    const contactInfoHeader = new DomElement ("h3", {id: "contact-info-header"}, "Contact Us");

    const phoneNumberHeader = new DomElement ("h5", {}, "Phone Number:");
    const phoneNumberContent = new DomElement ("p", {}, "0117 496 0123");

    const addressHeader = new DomElement ("h5",{}, "Address:");
    const addressFirstLine = new DomElement ("p",{}, "Unit 4B");
    const addressSecondLine = new DomElement ("p",{}, "Millennium Promenade,");
    const addressThirdLine = new DomElement ("p",{}, "Harbourside,");
    const addressFourthLine = new DomElement ("p",{}, "Bristol,");
    const addressFifthLine = new DomElement ("p",{}, "BS1 5SZ");

    const emailHeader = new DomElement ("h5", {}, "Email address:");
    const emailContent = new DomElement ("p", {}, "enquiries@soulfoodcafe.co.uk");
    contactInfoSection.append(contactInfoHeader,
                              phoneNumberHeader, 
                              phoneNumberContent,
                              addressHeader,
                              addressFirstLine,
                              addressSecondLine,
                              addressThirdLine,
                              addressFourthLine,
                              addressFifthLine, 
                              emailHeader, 
                              emailContent
                            );

    const divider = new DomElement ("hr", {class: "divider"},"");

    const openingTimesSection = new DomElement ("Section",{},"");
    const openingTimesHeader = new DomElement ("h3", {id: "opening-times-header"}, "Opening Times");
    const openingTimesContainer = new DomElement ("div", {id: "times-container"}, "");

    const mondayLabel = new DomElement ("p", {class: "day-label"}, "Monday :");
    const mondayHours = new DomElement ("p", {class: "day-hours"}, "Closed");

    const weekdaysLabel = new DomElement ("p", {class: "day-label"}, "Tues - Friday :");
    const weekdaysHours = new DomElement ("p", {class: "day-hours"}, "7am - 6pm");
    
    const saturdayLabel = new DomElement ("p", {class: "day-label"}, "Saturday :");
    const saturdayHours = new DomElement ("p", {class: "day-hours"}, "8am - 5:30pm");
    
    const sundayLabel = new DomElement ("p", {class: "day-label"}, "Sunday :");
    const sundayHours = new DomElement ("p", {class: "day-hours"}, "8:30am - 5pm");

    openingTimesSection.append(openingTimesHeader, openingTimesContainer);
    openingTimesContainer.append(mondayLabel, mondayHours, weekdaysLabel, weekdaysHours, saturdayLabel, saturdayHours, sundayLabel, sundayHours);
    contactInnerContainer.append(contactInfoSection, divider, openingTimesSection);
    contactContainer.append(contactInnerContainer);
    contentDiv.append(contactContainer);
}

export { displayContactPage };