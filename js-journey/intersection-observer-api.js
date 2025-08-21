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
  console.log("this is entry", entry);

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
