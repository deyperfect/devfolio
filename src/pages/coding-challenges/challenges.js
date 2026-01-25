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