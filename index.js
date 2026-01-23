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
})
