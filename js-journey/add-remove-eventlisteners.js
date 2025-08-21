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

// we can also add events with in html just like iline css
