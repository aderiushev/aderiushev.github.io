document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        }
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const navDrawer = document.getElementById('nav-drawer');

function openDrawer() {
    navDrawer.classList.add('open');
    document.body.classList.add('nav-locked');
    navToggle.setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
    navDrawer.classList.remove('open');
    document.body.classList.remove('nav-locked');
    navToggle.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', openDrawer);
navClose?.addEventListener('click', closeDrawer);
navDrawer?.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', closeDrawer)
);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer?.classList.contains('open')) closeDrawer();
});
