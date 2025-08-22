"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

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
// button scrolling
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
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

///////////////////////////////////////
// 5. page navigation
// here we will learn about the event delegation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// now here comes the part of evenmt delegation and an better way of doing the above method and prage navigation

// steps:
// 1. Add event listener to the common parent which in this case is the '.nav__links(container of the links)
// 2. determine what element originated the event
// 3. make a matching strategy

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  // now the matching strategy
  if (e.target.classList.contains("nav__link")) {
    //if the element getting clicked on contains the class
    console.log("LINK CLICKED");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

///////////////////////////////////////
// 6. implementing tabbed components/ operations (section 2)
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab"); // we add closest because in the button there are two more child elements sapna nd text there we use the conccept of event delegatio, because when we click the btn content it culd bt eh number or the text it triggers the whole btn parent elememt.
  // console.log(clicked);
  // the beneath condition is called the guard clause
  if (!clicked) return; //if the function of clicked is false or null immdediateyly stops the function going forward, if the clciked is happened in the container of the operations tab container
  //to remove the previous active classes from previoulsy activated tab and contents
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  //to activate tab.
  clicked.classList.add("operations__tab--active");
  //to activate content area.
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
  // console.log(clicked.dataset.tab);
});

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

///////////////////////////////////////
// Experimenting the intersection observer api

// second thing created the call back function and teh options object

// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// // first thing created
// const observer = new IntersectionObserver(obsCallBack, obsOptions);

// //calling it
// observer.observe(section1);
// This tells the observer to watch section1.
// Now whenever section1 enters/exits the viewport (based on your threshold), the obsCallBack runs.

// implementing the sticky nav bar using intersectong observer api
const header = document.querySelector("header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log("this is entry", entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // threshold: 0
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// implementation of revealing sections of through observer api
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  // console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
///////////////////////////////////////
// lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replacing src with data-src after loading (.dataset.src)
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
//Tell observer to watch each lazy-loaded image
imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////
// adding the slider in the third section
const slider = function () {
  //enclosing this all slider into an slider function
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector(".dots");

  // slider.style.transform = `scale(0.5) translateX(-800px)`;
  // slider.style.overflow = `visible`;
  // slides.forEach(
  //   (s, i) =>
  //     (s.style.transform =
  //       //first image translatex. = 0%
  //       //second image translatex. = 100%
  //       //third image translatex. = 200%
  //       `translateX(${100 * i}%)`)
  // );

  // functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // createDots();

  // highlighting the dot of current slide
  const activateDot = function (slide) {
    // remove active class from all dots
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    // add active class to the clicked/current dot
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  // activateDot(0);
  const goToSlide = function (slide) {
    slides.forEach(
      // now we want the translate x property to move in the negative values like -(negative)
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // goToSlide(0);

  //moving to next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //goingn to previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  //EventListeners
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
  //when we click on one of the dots
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
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

// //3.  implementing the smooth scrolling
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect(); //to get the co ordinates of the section, an built in method
//   console.log("co ordinates of section 1", s1coords); // left means x axis, top means y axis
//   console.log(
//     "co ordinates of learn more button",
//     e.target.getBoundingClientRect()
//   );
//   // btnScrollTo.getBoundingClientRect()// instead of writing btnSrollTo we can also write e.target(btnscrollTo)

//   console.log(
//     "current scroll of the web-page x-axis and y-axis",
//     window.scrollX,
//     window.scrollY
//   );
//   console.log(
//     "height and width of the viewport",
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
//   // now setting the scrolling and its effect
//   // method 1, involving calculation or numbers
//   // window.scrollTo( // the first paramter is always x axis, the other is y axis
//   //   s1coords.left + window.scrollX,
//   //   s1coords.top + window.scrollY
//   // );
//   //  method 2, passing the parameters as an object
//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: "smooth",
//   // });
//   // method 3, for modern day browsers
//   section1.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// // 4. adding and removing event listeners
// const h1 = document.querySelector("h1");
// // h1.addEventListener("click", function (e) {
// //   alert("you clicked on h1");

// // });

// // now instead of clicking we use new event
// const alertH1 = function () {
//   alert("hovering over h1");
// };
// h1.addEventListener("mouseenter", alertH1);
// // h1.removeEventListener("mouseenter", alertH1);
// setTimeout(() => {
//   //if you do not take mosue on h1 wirh 3 seconds this wil remive the event
//   h1.removeEventListener("mouseenter", alertH1);
// }, 3000);

// // we can also add events with in html just like inline css

// // 4. event porpagations (capturing, listening, bubbling(from down to top or opposite of capturing) are the three phases)
// const randomInt = (min, max) => Math.abs(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// // console.log(randomColor());

// working of the caputring and bubling
//what really happening is here is that if the nested(child) element have an eventlistener and its parentelement also have an eventlisten so by clicking on the child(nested)'s its own eventlistener will get triggered but at the same time the parent's event will also get triggered. and when we click on the parent's event its own event will get riggered but not its child's(nested) event, here in this case nav__link is the nested element and its parents are nav__links(container), nav both of them are its parents and all three of them have event listeners attache when we click on the nested child the other two parents event will also get triggerd and when if we clcik on any one of the parent's event(nav__links) then itself and its parent's event will get triggered but not its child(which is na__link)
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK CLICKED", e.target, e.currentTarget); //both target and current target points the same thing.
//   // e.stopPropagation(); // to stop the bubbling or event propogation, but it is an bad technique, only use in comlex applications.
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER CLICKED", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log("NAV CONTAINER CLICKED", e.target, e.currentTarget);
//   },
//   true
// ); //That last parameter (true) in addEventListener controls how the event is captured in the event propagation cycle. When an event (like click) happens on an element, it goes through three phases:
// 	1.	Capturing Phase (Top → Target)
// The event starts at the top (e.g., document), travels down the DOM tree toward the target element.
// 	2.	Target Phase
// The event reaches the target element itself (the one that was clicked).
// 	3.	Bubbling Phase (Target → Top)
// Then the event bubbles back up the DOM tree, triggering handlers on parent elements if they exist.
// (By default, most event listeners listen in this phase.)
// This makes the .nav’s event listener run on the way down (capturing), before the event even reaches the .nav__link target.

// If you removed the true, the same handler would run on the way back up (bubbling), after the child’s handlers. and if something is not present at the place of third paramter so it is false by default.

// // 6. DOM TRAVERSING
// const h1 = document.querySelector("h1");
// // going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "red";

// // going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)"; //selecting the nearest parent elemtn which has the class of header
// h1.closest("h1").style.background = "var(--gradient-primary)"; // selecting the element itself

// // going sideways: siblings
// console.log(h1.nextElementSibling); //to check elements with in teh conatainer
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // anothe rexample of dom traversing
// console.log(h1.parentElement.children);
// console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });
