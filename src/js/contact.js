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
    //phone no, address,opening hours,email address
    // Address: Unit 4B, Millennium Promenade, Harbourside,Bristol, BS1 5SZ
    const phoneNumberHeader = new DomElement ("h5", {}, "Phone Number:");
    const phoneNumberContent = new DomElement ("p", {}, "0117 496 0123");
    const addressHeader = new DomElement ("h5",{}, "Address");
    const addressContent = new DomElement ("p",{}, `Unit 4B, 
                                                    Millennium Promenade,
                                                    Harbourside,
                                                    Bristol,
                                                    BS1 5SZ`);
    const emailHeader = new DomElement ("h5", {}, "Email address:");
    const emailContent = new DomElement ("p", {}, "enquiries@soulfoodcafe.co.uk");
    // const contactEmail = new DomElement ("p", {}, "Email address: enquires@soulcafe.com");
    contactInfoSection.append(contactInfoHeader, phoneNumberHeader, phoneNumberContent,addressHeader,addressContent, emailHeader, emailContent);


    
    const openingTimesSection = new DomElement ("Section",{},"");
    const openingTimesHeader = new DomElement ("h3", {}, "Opening Times");
    const openingTimesContainer = new DomElement ("div", {id: "times-container"}, "");

    const mondayContainer = new DomElement ("div", {}, "");
    const mondayLabel = new DomElement ("p", {class: "day-label"}, "Monday :");
    const mondayHours = new DomElement ("p", {}, "Closed");
    mondayContainer.append(mondayLabel, mondayHours);

    const weekdaysContainer = new DomElement ("div", {}, "");
    const weekdaysLabel = new DomElement ("p", {class: "day-label"}, "Tues - Friday :");
    const weekdaysHours = new DomElement ("p", {}, "7am - 6pm");
    weekdaysContainer.append(weekdaysLabel, weekdaysHours);

    const saturdayContainer = new DomElement ("div", {}, "");
    const saturdayLabel = new DomElement ("p", {class: "day-label"}, "Saturday :");
    const saturdayHours = new DomElement ("p", {}, "8am - 5:30pm");
    saturdayContainer.append(saturdayLabel,saturdayHours);

    const sundayContainer = new DomElement ("div", {}, "");
    const sundayLabel = new DomElement ("p", {class: "day-label"}, "Sunday :");
    const sundayHours = new DomElement ("p", {}, "8:30am - 5pm");
    sundayContainer.append(sundayLabel,sundayHours);

    openingTimesSection.append(openingTimesHeader, openingTimesContainer);
    openingTimesContainer.append(mondayContainer, weekdaysContainer, saturdayContainer, sundayContainer);
    
    contactInnerContainer.append(contactInfoSection,openingTimesSection);
    contactContainer.append(contactInnerContainer);
    contentDiv.append(contactContainer);
}

export { displayContactPage };