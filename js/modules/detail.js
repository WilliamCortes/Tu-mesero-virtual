import { fakeProducts } from "../modules/constants.js";

const productCard = document.getElementById("detail-product");
const amount = document.getElementById("detail-amount");
const price = document.getElementById("detail-price");
const total = document.getElementById("detail-total");

const productId = Number(
  new URLSearchParams(location.search)?.get("productId")
);

const product = fakeProducts[productId];

amount.value = 1;
price.value = product.value;
total.value = product.value * amount.value;

const handleAmount = ({ target }) => {
  total.value = product.value * target.value;
};

amount.addEventListener("change", handleAmount);

const addProduct = (node, { label, value, src, description }) => {
  if (!node || !label) return;

  const image = document.createElement("img");
  image.src = src;
  image.alt = label;

  const name = document.createElement("h2");
  name.textContent = label;

  const content = document.createElement("p");
  content.textContent = description + " " + description;

  const price = document.createElement("p");
  price.textContent = "Valor Unitario: $ " + value;

  node.appendChild(image);
  node.appendChild(name);
  node.appendChild(content);
  node.appendChild(price);
};

product && addProduct(productCard, product);
