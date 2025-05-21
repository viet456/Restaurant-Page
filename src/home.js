import restaurantImg from './assets/images/restaurant.jpg';

export function renderHome() {
    //hero/hook
    const hero = document.createElement('div');
    hero.id = 'hero';
    const hook = document.createElement('span');
    hook.innerHTML = 'Where Mediterranean Spice Meets California Sunshine:<br>' +
                        'Fresh, seasonal dishes inspired by the shores of the ' +
                        'Med and the fields of California.'
    hero.append(hook);
    content.append(hero);
}