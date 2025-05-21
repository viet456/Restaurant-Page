export function loadHome() {
    const content = document.getElementById('content');
    
    //header
    const heading = document.createElement('h1');
    heading.textContent = 'Saffron & Sage'
    content.append(heading);
    
    //hero/hook
    const hero = document.createElement('div');

    const hook = document.createElement('h3');
    hook.innerHTML = 'Where Mediterranean Spice Meets California Sunshine:<br>' +
                        'Fresh, seasonal dishes inspired by the shores of the ' +
                        'Med and the fields of California.'
    hero.append(hook);
    content.append(hero);
}