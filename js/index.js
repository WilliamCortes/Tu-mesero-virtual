import {
  menuContent,
  headerContent,
  footerContent,
} from "./modules/constants.js";

const menuDrawer = document.getElementById("menu-drawer-container");
const header = document.getElementById("header");
const tabBar = document.getElementById("tab-bar");

menuDrawer.innerHTML = menuContent;
header.innerHTML = headerContent;
tabBar.innerHTML = footerContent;

const btnMenu = document.getElementById("btn-menu-drawer");
const btnClose = document.getElementById("btn-close-drawer");

const handleClick = () => {
  menuDrawer.className = "open";
};

const handleClose = () => {
  menuDrawer.className = "";
};

btnMenu?.addEventListener("click", handleClick);
btnClose?.addEventListener("click", handleClose);
