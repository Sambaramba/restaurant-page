import "../css/styles.css";
import { DomElement } from "./utils.js";

console.log("js file is running in browser");

{/* <p class="fade-in"> Welcome to the soul food cafe, a friendly restaurant with a soulful kick.
Our aim is to make a restaurant thats good for the planet, healthy and balanced for the body but tastes good too.
</p> */}



new DomElement("p", {
    class: "fade-in"
}, "Welcome to the soul food cafe, a friendly restaurant with a soulful kick. Our aim is to make a restaurant thats good for the planet, healthy and balanced for the body but tastes good too."
, "div#content"
)