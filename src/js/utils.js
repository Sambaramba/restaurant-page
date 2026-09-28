class DomElement {
    
    constructor (type,attributes,text) {

        //Create dom element
        this.element = document.createElement(type)
        
        //Add attributes to element
        for (const attribute in attributes) {
            this.element.setAttribute(attribute, attributes[attribute])
        }

        //Add text to element
        this.element.textContent = text;
        
        return this.element;
    }
}

const removeAllChildNodes = function(element) {
    if(!element.firstChild) {
        return
    }
    while(element.firstChild) {
        console.log(element.firstChild);
        element.removeChild(element.firstChild);
    }
}

export { DomElement, removeAllChildNodes };