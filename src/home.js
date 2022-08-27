import HomeImage from "./images/mike-bergmann-tHjXXy1kk_Q-unsplash.jpg";

function homeComponent() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  const paragraph = document.createElement("p");
  paragraph.innerText = "Catering to your underwater fishy delights since 1948";
  const homeImage = new Image();
  homeImage.src = HomeImage;
  homeImage.classList.add("headline-image");

  homeContent.append(homeImage, paragraph);

  console.log("Hjekflmi");
  return homeContent;
}

export default homeComponent;
