"use strict";
// for selecting the elements
console.log(document.documentElement); //gives the html structure
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");

console.log(allSections);

console.log(document.getElementById("section--1"));
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookie for improved functionality and analytics";
message.innerHTML =
  "We use cookie for improved functionality and analytics. <button class = 'btn btn--close-cookie'>Got it!</button>";

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true)); //making it available at two places

// header.before(message);
// header.after(message);

// deleting the elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove(); //another way of doing the same thing is written below.
    // message.parentElement.removeChild(message);
  });
