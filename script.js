"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault(); //to prevent page to jumoing back to top when clciking ont eh anchor tag of open account
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal); replacing it with the forEachLoop

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Learning

// // for selecting the elements
// console.log(document.documentElement); //gives the html structure
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");

// console.log(allSections);

// console.log(document.getElementById("section--1"));
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);
// console.log(document.getElementsByClassName("btn"));

// // creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = "We use cookie for improved functionality and analytics";
// message.innerHTML =
//   "We use cookie for improved functionality and analytics. <button class = 'btn btn--close-cookie'>Got it!</button>";

// header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true)); //making it available at two places

// // header.before(message);
// // header.after(message);

// // deleting the elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove(); //another way of doing the same thing is written below.
//     // message.parentElement.removeChild(message);
//   });
