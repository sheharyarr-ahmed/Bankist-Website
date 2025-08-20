"use strict";
// 2. Styles, ATTRIBUTES AND CLASSES

// all of the styles are inline CSS
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); // you may see this will not get logged on because this was not created manually by us unlike backgroundColor
console.log(message.style.backgroundColor); //this will get logged on becuase we created it upper

// the ones which are not created manually can be seen like this
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
// changing the height thorugh parsing beacuse number + string involved
message.style.height = parseFloat(getComputedStyle(message).height + 40 + "px");
console.log(message.style.height);

// now to learn about the css cusotm properties or css variables basically whats happening element we can chnage the standard styles like from root(document element)
// theres an root elemetn in teh style.css file wherer properties are defined so we will change them
// document.documentElement.style.setProperty("--color-primary", "orangered"); // changes will take effect

// now ATTRIBUTES
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //at first its bankist logo now we will set it here
logo.alt = "beautiful minimalist logo";
console.log(logo.alt); //changed now
console.log(logo.src);
console.log(logo.className);

// but if we added an custom attribute with in the img elememt so that will cannot be logged in
// but to see that logo.getAttruibute(name of it )
// see the difference between these two attributes one shows absolute link whereas the other relative
console.log(logo.src);
console.log(logo.getAttribute("src"));

// DATA ATTRIBUTES(used while working in ui) this is anothert thing which getAttrbutes when the property name starts with data for example we insert an attribute in an element then see the working of it we made

logo.setAttribute("data-version-number", 30);
console.log(logo.getAttribute("data-version-number")); //instead iof this as the property name starts with data use this instead
console.log(logo.dataset.versionNumber); //notice the dash represents the camelCase

// css classes
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()
