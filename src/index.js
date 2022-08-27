import Print from "./print";
import Background from "./kyaw-tun-k6BHLfw_jUg-unsplash.jpg";
import "./style.css";

import homeComponent from "./home";
import contactComponent from "./contact";
import menuComponent from "./menu";

Print();
homeComponent();

const content = document.querySelector("#content");
const contactButton = document.querySelector(".contact");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

function component() {
  const element = document.createElement("div");

  element.classList.add("hello");
  element.innerText = "HEllo";

  return element;
}

// document.body.appendChild(component());

content.append(homeComponent());

contactButton.addEventListener("click", () => {
  content.innerHTML = "";
  contactButton.classList.add("selected");
  homeButton.classList.remove("selected");
  menuButton.classList.remove("selected");
  content.append(contactComponent());
});

homeButton.addEventListener("click", () => {
  content.innerHTML = "";
  homeButton.classList.add("selected");
  contactButton.classList.remove("selected");
  menuButton.classList.remove("selected");
  content.append(homeComponent());
});

menuButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(menuComponent());
  menuButton.classList.add("selected");
  homeButton.classList.remove("selected");
  contactButton.classList.remove("selected");
});
