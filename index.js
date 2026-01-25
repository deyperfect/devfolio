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
    const formUrl = 'https://deyperfect.github.io/devfolio/contact';

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