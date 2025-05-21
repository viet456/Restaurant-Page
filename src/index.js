import "./styles.css";
import { renderNav } from "./navbar.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { clearPage } from "./clear.js";

//page buttons
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    clearPage();
    renderHome();
});

menu.addEventListener('click', () => {
    clearPage();
    renderMenu();
});

console.log("we're live");
renderNav();
renderHome();