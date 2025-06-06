export function renderHome() {
    document.body.style.overflow = 'hidden'
    const content = document.getElementById('content');
    //hero/hook
    const hero = document.createElement('div');
    hero.className = 'hero';
    const hook = document.createElement('span');
    hook.innerHTML = 'Where Mediterranean Spice Meets California Sunshine:<br>' +
                        'Fresh, seasonal dishes inspired by the shores of the ' +
                        'Med and the fields of California.'
    hero.append(hook);
    content.append(hero);
}