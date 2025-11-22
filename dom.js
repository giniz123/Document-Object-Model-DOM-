// DOM

// const elm = document.getElementById("first");
// const elm = document.getElementsByTagName("div");
// const elm = document.getElementsByClassName("first");
// const elm = document.querySelector(".info>div>p");
// const elm = document.querySelectorAll(".info ");

// console.log(elm);

// const elm = document.querySelector(".info");
// const val = elm.innerHTML;

// console.log(val);

// document.writeln("End of console");
// document.writeln("End of console");
// document.writeln("End of console");

// const elm = document.querySelector(".message");
// const val = elm.innerText;
// elm.innerHTML = "<h3>Server messages have been updated</h3>";
// console.log(elm);

// const elm = document.querySelector("body");

// const textNode = document.createTextNode("Hello this is text node");
// elm.appendChild(textNode);
// const newElement = document.createElement("p");
// newElement.innerText =
//   "Hello, this is paragraph element added from Javascript!";

// elm.appendChild(newElement);

// elm.insertBefore(newElement, document.querySelector(".display"));

// elm.removeChild(document.querySelector(`[href="google.com"]`));

// elm.replaceChild(newElement, document.querySelector(`[href="google.com"]`));

///////////////////////////////
///////////////////////////////
///////////////////////////////

/* CSS Manipulation from DOM */

// const googleElm = document.querySelector(`[href="google.com"]`);

// googleElm.style.fontSize = "2rem";
// googleElm.style.color = "green";
// googleElm.style.textDecoration = "none";

// Changing attribute of HTML

// getAttribute()

// const elm1 = document.querySelector(`[href="google.com"]`);
// const attbr = elm1.getAttribute("href");
// console.log(attbr);

// document
//   .querySelector(".display")
//   .setAttribute(
//     "style",
//     "font-size:2rem; color: orangered; text-decoration: underline"
//   );

// document.querySelector(".display").setAttribute("href", "linked");

// document.querySelector(".display").removeAttribute("href");

// document.querySelector("a").removeAttribute("href");

// Changing HTML class names

// const elm2 = document.querySelector(".message");

// elm2.className = "hello";
// elm2.classList.add("success");

// elm2.classList.remove("message");

// elm2.classList.toggle("success"); => if exits then it removes else it just adds
// console.log(elm2.classList);

// DOM Events
// It is when you do some actions then somethings happen (i.e some events happen)

// 1. One way to create event combining javascript and html
// const changeUI = (e) => {
//   console.log("Event triggered");
//   //   alert(`You clicked on "Click Me!`);
//   console.log(e);
// };

// 2. Another way to create event only using javascript
// Syntax => element.addEventListner("click", callfunction)

let counter = 0;
const clickMe = document.querySelector(".display");

// clickMe.addEventListener("click", (e) => {
//   //   console.log("Event triggered");
//   //   console.log(e);
//   clickMe.classList.toggle("success");
// });

const func = (e) => {
  //   console.log("Event triggered");
  //   console.log(e);
  clickMe.classList.toggle("success");
  console.log(counter++);
  if (counter === 2) {
    return clickMe.removeEventListener("click", func);
  }
};
clickMe.addEventListener("click", func);
