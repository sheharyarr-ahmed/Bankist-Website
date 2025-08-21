///////////////////////////////////////
// implementing tabbed components/ operations (section 2)

// and an example of adding and removing classes
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
