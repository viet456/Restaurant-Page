export function renderContact() {
    document.body.style.overflow = 'auto';
    const content = document.getElementById('content');
    const hero = document.createElement('div');
    hero.className = 'hero';
    hero.innerHTML = `
    <h2>Visit &amp; Connect</h2>
    <p><strong>Location:</strong> 123 Main St, New York City, NY</p>
    <p><strong>Hours:</strong> Tue–Sun, 11 am–10 pm</p>
    <p><strong>Contact:</strong> (555) 123-4567 | <a href="mailto:hello@notarealplace.com">hello@notarealplace.com</a></p>
    `;
    content.append(hero);
}