export function renderNav() {
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    //header
    const heading = document.createElement('h1');
    heading.textContent = 'Saffron & Sage'
    header.prepend(heading);

    //buttons
    const homeBtn = document.getElementById('home');
    homeBtn.textContent = 'Home';
    const menuBtn = document.getElementById('menu');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.getElementById('contact');
    contactBtn.textContent = 'Contact';
}