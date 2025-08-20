// 4. event porpagations
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
