const orderList = document.getElementById("order-list-tbody");
const orderTotal = document.getElementById("order-total-tfoot");

const fakeProducts = [
  { label: "Salmon salsa de camarones", value: 50200, amount: 1 },
  { label: "Churrasco", value: 25100, amount: 2 },
  { label: "Vino Tinto", value: 50200, amount: 1 },
  { label: "Hamburguesa", value: 16750, amount: 3 },
  { label: "service", value: 20000, amount: 1 },
];

let fakeTotal = 0;
const addProducts = (node) => {
  if (!node) return;
  fakeProducts.forEach(({ label, value, amount }) => {
    const product = document.createElement("td");
    product.textContent = label;
    const price = document.createElement("td");
    price.textContent = value * amount;
    const tr = document.createElement("tr");
    tr.appendChild(product);
    tr.appendChild(price);
    node.appendChild(tr);
    fakeTotal += value * amount;
  });
};

const addTotal = (node) => {
  if (!node) return;
  const total = document.createElement("td");
  total.textContent = "Total";
  const totalValue = document.createElement("td");
  totalValue.textContent = fakeTotal;
  const tr = document.createElement("tr");
  tr.appendChild(total);
  tr.appendChild(totalValue);
  node.appendChild(tr);
};

addProducts(orderList);
addTotal(orderTotal);
