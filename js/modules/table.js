const tableList = document.getElementById("table-list");

const handleSelection = (button, table) => {
  // This is fake validation
  if (table % 3 === 0) return alert(`La mesa número: ${table} ya está ocupada`);
  button.className += "table-list-item-optioned";
};

const fillList = (node) => {
  if (!node) return;
  for (let index = 1; index <= 50; index++) {
    const button = document.createElement("button");
    button.textContent = index;
    button.addEventListener("click", () => handleSelection(button, index));
    // This is fake validation
    if (index % 3 === 0) {
      button.className += "table-list-item-selected";
    }
    const listItem = document.createElement("li");
    listItem.appendChild(button);
    tableList.appendChild(listItem);
  }
};

fillList(tableList);
