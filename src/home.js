import HomeImage from "./images/mike-bergmann-tHjXXy1kk_Q-unsplash.jpg";

{
  /* <header>
<h1>Merman's Diner</h1>
<nav>
    <button class="home">Home</button>
    <button class="menu">Menu</button>
    <button class="contact">Contact</button>
</nav>
</header>
<div id="content">
<div class="home-content">
    <img src="/src/images/mike-bergmann-tHjXXy1kk_Q-unsplash.jpg" alt="main-image" class="headline-image">
    <p>Catering to your underwater fishy delights since 1948</p>
</div>
<p class="attrib">Photo by <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>
</div>
<a href="#">GitHub</a>
</body> */
}

// const body = querySelector("body");

// const homeContent = document.createElement("div");
// homeContent.classList.add("home-content");
// const paragraph = document.createElement("p");
// paragraph.innerText = "Catering to your underwater fishy delights since 1948";
// const homeImage = new Image();
// homeImage.src = HomeImage;
// homeImage.classList.add("headline-image");

// homeContent.append(homeImage, paragraph);

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
