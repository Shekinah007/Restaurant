function menuComponent() {
  let foodItems = [
    { name: "Salsa", description: "Tomatoes, pepper, garlic..." },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
    { name: "Colorato", description: "Tomato Sauce, pepper, Basil" },
  ];

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  foodItems.forEach((entry) => {
    let item = document.createElement("div");
    item.classList.add("item");

    item.innerText = entry.name;
    menuContent.append(item);
  });

  return menuContent;
}

export default menuComponent;
