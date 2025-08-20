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
