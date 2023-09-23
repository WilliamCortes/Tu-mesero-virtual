import { fakeProducts } from "../modules/constants.js";

const menuList = document.getElementById("menu-list");

const fillList = (node) => {
  if (!node) return;
  fakeProducts.forEach(({ label, value, src }, index) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = label;

    const name = document.createElement("p");
    name.textContent = label;

    const price = document.createElement("p");
    price.textContent = "$ " + value;

    const product = document.createElement("a");
    product.href = `detail.html?productId=${index}`;
    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);

    const card = document.createElement("li");
    card.className = "menu-card";
    card.appendChild(product);

    node.appendChild(card);
  });
};

fillList(menuList);
