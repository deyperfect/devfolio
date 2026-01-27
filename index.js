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
    // console.log('Footer is visible');
} else {
    toggler.classList.remove('visible');
    // console.log('Footer not visible yet');
}
});



// Contact Form
const sendEmail = document.querySelector('#sendemail');

sendEmail.addEventListener('click', async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();
    const userMessage = messageInput.value.trim();

    const formData = {
        name: userName, 
        email: userEmail, 
        message: userMessage
    };
    const formUrl = '/api/contact';

    try {
        const response = await fetch(formUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Email Sent Successfully');

            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        } else {
            const error = await response.json();
            alert(`Failed to send the message: ${error.message || 'Unknown error'}`);
        }
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});


function openProject() {
    window.open("https://github.com/deyperfect/CS50x-2025-Portfolio", "_blank");
}