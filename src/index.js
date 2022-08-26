import Print from "./print";
import Background from "./kyaw-tun-k6BHLfw_jUg-unsplash.jpg";
import "./style.css";

import homeComponent from "./home";
import contactContent from "./contact";
import contactComponent from "./contact";

Print();
homeComponent();

const content = document.querySelector("#content");
const contactButton = document.querySelector(".contact");
const homeButton = document.querySelector(".home");

function component() {
  const element = document.createElement("div");

  element.classList.add("hello");
  element.innerText = "HEllo";

  return element;
}

// document.body.appendChild(component());

// content.append(homeComponent());
content.append(contactComponent());

// content.append(component());

contactButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(contactComponent());
});
homeButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(homeComponent());
});
