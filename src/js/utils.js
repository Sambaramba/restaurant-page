class DomElement {
    // add ,parentSelector to parameters if adding in func
    constructor (type,attributes,text) {
        this.element = document.createElement(type)
        // const parentElement = document.querySelector(`${parentSelector}`);
        console.log(parentElement);
        for (const attribute in attributes) {
            this.element.setAttribute(attribute, attributes[attribute])
        }
        this.element.textContent = text;
        // parentElement.appendChild(this.element);
        return this.element;
    }
    // return Element
}

const removeAllChildNodes = function(element) {
    while(element.firstChild) {
        console.log(element.firstChild);
        element.removeChild(element.firstChild);
    }
}

export { DomElement, removeAllChildNodes };