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
const form = document.querySelector('#contactForm');
const notyf = new Notyf({
    duration: 3000,
    ripple: true,
    position: { x: 'right', y: 'bottom' },
    types: [
        { type: 'success', background: '#22c55e', icon: false },
        { type: 'error', background: '#ef4444', icon: false }
    ]
});

sendEmail.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        notyf.error('❌ Please fill in all required fields correctly.');
        return; 
    }

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
            notyf.success('✅ Message sent successfully!');
            form.reset();

        } else {
            const error = await response.json();
            notyf.error(`❌ ${error.message || 'Failed to send message.'}`);
        }
    } catch (error) {
        notyf.error('❌ Something went wrong. Please try again.');
    }
});


function openProject(url) {
    window.open(url, "_blank");
}



