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
