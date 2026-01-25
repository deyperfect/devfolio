// Theme toggler
let darkmode = localStorage.getItem('dark');
const switchTheme = document.getElementById('theme-toggle')

const darkModeOn = () => {
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active');
}

const lightModeOn = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null);
}

switchTheme.addEventListener('click', () => {
    darkmode = localStorage.getItem('dark');
    if (darkmode !== 'active') {
        darkModeOn();
    } else {
        lightModeOn();
    }
});

window.addEventListener('scroll', callback => {

const footer = document.querySelector('.footer');
const toggler = document.querySelector('#themeicon');
const rect = footer.getBoundingClientRect();
const windowHeight = window.innerHeight;

if (rect.top < windowHeight) {
    toggler.classList.add('visible');
    console.log('Footer is visible');
} else {
    toggler.classList.remove('visible');
    console.log('Footer not visible yet');
}
});