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

// // 1. for selecting the elements
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

// // 2. Styles, ATTRIBUTES AND CLASSES

// // all of the styles are inline CSS
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.color); // you may see this will not get logged on because this was not created manually by us unlike backgroundColor
// console.log(message.style.backgroundColor); //this will get logged on becuase we created it upper

// // the ones which are not created manually can be seen like this
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// // changing the height thorugh parsing beacuse number + string involved
// message.style.height = parseFloat(getComputedStyle(message).height + 40 + "px");
// console.log(message.style.height);

// // now to learn about the css cusotm properties or css variables basically whats happening element we can chnage the standard styles like from root(document element)
// // theres an root elemetn in teh style.css file wherer properties are defined so we will change them
// // document.documentElement.style.setProperty("--color-primary", "orangered"); // changes will take effect

// // now ATTRIBUTES
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt); //at first its bankist logo now we will set it here
// logo.alt = "beautiful minimalist logo";
// console.log(logo.alt); //changed now
// console.log(logo.src);
// console.log(logo.className);

// // but if we added an custom attribute with in the img elememt so that will cannot be logged in
// // but to see that logo.getAttruibute(name of it )
// // see the difference between these two attributes one shows absolute link whereas the other relative
// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// // DATA ATTRIBUTES(used while working in ui) this is anothert thing which getAttrbutes when the property name starts with data for example we insert an attribute in an element then see the working of it we made

// logo.setAttribute("data-version-number", 30);
// console.log(logo.getAttribute("data-version-number")); //instead iof this as the property name starts with data use this instead
// console.log(logo.dataset.versionNumber); //notice the dash represents the camelCase

// // css classes
// // classList.add()
// // classList.remove()
// // classList.toggle()
// // classList.contains()

///////////////////////////////////////
// developing

//3.  implementing the smooth scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect(); //to get the co ordinates of the section, an built in method
  console.log("co ordinates of section 1", s1coords); // left means x axis, top means y axis
  console.log(
    "co ordinates of learn more button",
    e.target.getBoundingClientRect()
  );
  // btnScrollTo.getBoundingClientRect()// instead of writing btnSrollTo we can also write e.target(btnscrollTo)

  console.log(
    "current scroll of the web-page x-axis and y-axis",
    window.scrollX,
    window.scrollY
  );
  console.log(
    "height and width of the viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // now setting the scrolling and its effect
  // method 1, involving calculation or numbers
  // window.scrollTo( // the first paramter is always x axis, the other is y axis
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  //  method 2, passing the parameters as an object
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });
  // method 3, for modern day browsers
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

// 4. adding and removing event listeners
const h1 = document.querySelector("h1");
// h1.addEventListener("click", function (e) {
//   alert("you clicked on h1");

// });

// now instead of clicking we use new event
const alertH1 = function () {
  alert("hovering over h1");
};
h1.addEventListener("mouseenter", alertH1);
// h1.removeEventListener("mouseenter", alertH1);
setTimeout(() => {
  //if you do not take mosue on h1 wirh 3 seconds this wil remive the event
  h1.removeEventListener("mouseenter", alertH1);
}, 3000);

// we can also add events with in html just like inline css

// 4. event porpagations (capturing, listening, bubbling(from down to top or opposite of capturing) are the three phases)
const randomInt = (min, max) => Math.abs(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// working of the caputring and bubling
//what really happening is here is that if the nested(child) element have an eventlistener and its parentelement also have an eventlisten so by clicking on the child(nested)'s its own eventlistener will get triggered but at the same time the parent's event will also get triggered. and when we click on the parent's event its own event will get riggered but not its child's(nested) event, here in this case nav__link is the nested element and its parents are nav__links(container), nav both of them are its parents and all three of them have event listeners attache when we click on the nested child the other two parents event will also get triggerd and when if we clcik on any one of the parent's event(nav__links) then itself and its parent's event will get triggered but not its child(which is na__link)
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK CLICKED", e.target, e.currentTarget); //both target and current target points the same thing.
  // e.stopPropagation(); // to stop the bubbling or event propogation, but it is an bad technique, only use in comlex applications.
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER CLICKED", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV CONTAINER CLICKED", e.target, e.currentTarget);
  },
  true
); //That last parameter (true) in addEventListener controls how the event is captured in the event propagation cycle. When an event (like click) happens on an element, it goes through three phases:
// 	1.	Capturing Phase (Top → Target)
// The event starts at the top (e.g., document), travels down the DOM tree toward the target element.
// 	2.	Target Phase
// The event reaches the target element itself (the one that was clicked).
// 	3.	Bubbling Phase (Target → Top)
// Then the event bubbles back up the DOM tree, triggering handlers on parent elements if they exist.
// (By default, most event listeners listen in this phase.)
// This makes the .nav’s event listener run on the way down (capturing), before the event even reaches the .nav__link target.

// If you removed the true, the same handler would run on the way back up (bubbling), after the child’s handlers. and if something is not present at the place of third paramter so it is false by default.
