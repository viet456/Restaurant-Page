import "../css/menu.css"
import { renderNav } from "./components/navbar.js";
import { clearPage } from "./components/clear.js";
import { renderHome } from "./pages/home.js";
import { renderMenu } from "./pages/menu.js";
import { renderContact } from "./pages/contact.js";

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
contact.addEventListener('click', () => {
    clearPage();
    renderContact();
});

console.log("we're live");
renderNav();
renderHome();
