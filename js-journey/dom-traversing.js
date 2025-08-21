// 6. DOM TRAVERSING
const h1 = document.querySelector("h1");
// going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "red";

// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest(".header").style.background = "var(--gradient-secondary)"; //selecting the nearest parent elemtn which has the class of header
h1.closest("h1").style.background = "var(--gradient-primary)"; // selecting the element itself

// going sideways: siblings
console.log(h1.nextElementSibling); //to check elements with in teh conatainer
console.log(h1.previousElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// anothe rexample of dom traversing
console.log(h1.parentElement.children);
console.log([...h1.parentElement.children]);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
