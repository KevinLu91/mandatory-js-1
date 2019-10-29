let h1Element = document.querySelector("h1");
h1Element.innerHTML = "Fruits & Vegetables Corp";

let aElement = document.querySelector("ul > li:last-Child> a");
aElement.textContent = "Vegetables";

let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");

main.insertBefore (about, contact);
about.textContent="";

let h2About = document.createElement("h2");
let h2Contact = document.createElement("h2");
h2About.textContent = "About";
h2Contact.textContent = "Contact";

contact.appendChild(h2Contact);
about.appendChild(h2About);

contact.insertBefore(h2Contact, contact.querySelector("p"));


let pTag = document.querySelector("p");
pTag.textContent = "We're the best in fruits & vegetables";
about.appendChild(pTag);

let tdElement = document.querySelectorAll("thead > tr > td");

for(let i = 0; i<tdElement.length; i++){
let thElement = document.createElement("th");
thElement.textContent = tdElement[i].textContent;
tdElement[i].replaceWith(thElement);
}

let headElement = document.querySelector("head");
let linkElement = document.createElement("link");
linkElement.rel ="stylesheet";
linkElement.href ="main.css";
headElement.appendChild(linkElement);

let titleElement = document.querySelector("title");
titleElement.textContent = "Fruits & Vegetables Corp";
