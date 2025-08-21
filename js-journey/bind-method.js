// // 7. adding the fade animation on the navigation links, again the use of event delegation by selecting the parent which is nav for nan links and the logo
// const nav = document.querySelector(".nav");
// nav.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
// nav.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });
// method 2 if fading animationbyb redducing DRY and variable handleHover created.
// const nav = document.querySelector(".nav");
// const handleHover = function (e, opacity) {
//   // before, here was only 1 arg but see the methods below
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity; //before, here was the value but see the methods below
//     });
//     logo.style.opacity = opacity;
//   }
// };

// /mehtod 1 of passing the arguements to an event handler's function that is also an function.
// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });

// mehtod 2 of passing the arguements to an event handler's function that is also an function.
const nav = document.querySelector(".nav");
const handleHover = function (e) {
  // before, here was only 1 arg but see the methods below
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this; //we use this here in the below even listener method we used the bind method on handleover function so we actually bouding the handleHover function to use the arg we provided below in its function where the keyword this is present.
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
