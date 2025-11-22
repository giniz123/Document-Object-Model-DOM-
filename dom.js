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

document
  .querySelector(".display")
  .setAttribute(
    "style",
    "font-size:2rem; color: orangered; text-decoration: underline"
  );

document.querySelector(".display").setAttribute("href", "linked");

document.querySelector(".display").removeAttribute("href");

document.querySelector("a").removeAttribute("href");
