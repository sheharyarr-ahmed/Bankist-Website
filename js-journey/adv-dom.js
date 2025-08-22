//LIFECYCLE DOM EVENTS
document.addEventListener("DOMContentLoaded", function (e) {
  //when html is parsed
  console.log("HTML parsed and DOM tree built!");
});

window.addEventListener("load", function (e) {
  //when page fully loaded
  console.log("page fully loaded", e);
});
// window.addEventListener("beforeunload", function (e) { //when the user tries to close this page/tab
//   e.preventDefault();
// console.log(e);
// e.returnValue = ""; //no matter what you return it will display the browser's leave page only
// });
