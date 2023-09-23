const menuContent = `
<button id="btn-close-drawer">
  <img src="./assets/icons/Close.png" alt="Close" />
</button>
<h3>Menu</h3>
<article>
  <ul>
    <li>
      <a href="menu.html">
        <img
          src="./assets/icons/BeefBurger.png"
          width="40"
          height="40"
          alt="BeefBurger"
        />
        <p>Comidas rápidas</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Steak.png" alt="Steak" />
        <p>Carnes</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Fish.png" alt="Fish" />
        <p>Pescados</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Pizza.png" alt="Pizza" />
        <p>Pizza</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Soup.png" alt="Soup" />
        <p>Sopas</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Chicken.png" alt="Chicken" />
        <p>Pollo</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img
          src="./assets/icons/EspecialFood.png"
          alt="EspecialFood"
        />
        <p>Platos Especiales</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Fries.png" alt="Fries" />
        <p>Adicionales</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Juice.png" alt="Juice" />
        <p>Vevidas frías</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Cafe.png" alt="Cafe" />
        <p>Vevidas calientes</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/IceCream.png" alt="IceCream" />
        <p>Helados</p>
      </a>
    </li>

    <li>
      <a href="menu.html">
        <img src="./assets/icons/Cupcake.png" alt="Cupcake" />
        <p>Postres</p>
      </a>
    </li>
  </ul>
</article>
`;

const headerContent = `
<button id="btn-menu-drawer">
<img src="./assets/icons/BeefBurger.png" alt="BeefBurger" />
</button>
<h2>Tu Mesero Virtual</h2>
`;

const footerContent = `
<nav>
<ul>
  <li>
    <a href="index.html">
      <img src="./assets/icons/HomePage.png" alt="HomePage" />
    </a>
  </li>
  <li>
    <a href="order.html">
      <img src="./assets/icons/Restaurant.png" alt="Restaurant" />
    </a>
  </li>
  <li>
    <a href="login.html">
      <img src="./assets/icons/User.png" alt="User" />
    </a>
  </li>
</ul>
</nav>
`;

const fakeProducts = [
  {
    label: "Salmon salsa de camarones",
    value: 50200,
    src: "./assets/images/salmon.avif",
    description:
      "Salmón jugoso, cocido con salsa fresca de eneldo y limón, servido con vegetales al dente. Delicia única.",
  },
  {
    label: "Churrasco",
    value: 25100,
    src: "./assets/images/bistec.avif",
    description:
      "Churrasco a la parrilla, sazonado a la perfección y servido con guarniciones frescas. Sabor inigualable.",
  },
  {
    label: "Jugos Naturales",
    value: 10200,
    src: "./assets/images/juice.avif",
    description:
      "Jugos naturales de frutas frescas, exprimidos al momento. Una explosión de sabor en cada sorbo.",
  },
  {
    label: "Hamburguesa",
    value: 16750,
    src: "./assets/images/burger.avif",
    description:
      "Hamburguesa clásica con ingredientes frescos y carne jugosa, acompañada de papas fritas crujientes.",
  },
  {
    label: "Salmon salsa de camarones",
    value: 50200,
    src: "./assets/images/salmon.avif",
    description:
      "Salmón jugoso, cocido con salsa fresca de eneldo y limón, servido con vegetales al dente. Delicia única.",
  },
  {
    label: "Churrasco",
    value: 25100,
    src: "./assets/images/bistec.avif",
    description:
      "Churrasco a la parrilla, sazonado a la perfección y servido con guarniciones frescas. Sabor inigualable.",
  },
  {
    label: "Jugos Naturales",
    value: 10200,
    src: "./assets/images/juice.avif",
    description:
      "Jugos naturales de frutas frescas, exprimidos al momento. Una explosión de sabor en cada sorbo.",
  },
  {
    label: "Hamburguesa",
    value: 16750,
    src: "./assets/images/burger.avif",
    description:
      "Hamburguesa clásica con ingredientes frescos y carne jugosa, acompañada de papas fritas crujientes.",
  },
];

export { menuContent, headerContent, footerContent, fakeProducts };
