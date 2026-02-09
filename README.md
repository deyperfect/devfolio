# Portfolio Website

A clean, modern, and responsive portfolio website showcasing my web development projects and skills.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with localStorage persistence
- **Project Showcase** - Highlighting key projects with descriptions and links
- **Tech Stack Display** - Visual representation of technologies and tools
- **Contact Form** - Integrated form with backend API for email submissionss
- **Bootstrap 5** - Modern, mobile-first design framework
- **Custom Fonts** - Self-hosted Poppins, Inconsolata, and Figtree fonts
- **Optimized Performance** - Lazy loading images and minified CSS

## Live Demo

View Live Site: [https://edrylp.vercel.app/](https://edrylp.vercel.app/)

## Built With

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables for theming
- **JavaScript (ES6)** - Vanilla JavaScript for interactivity
- **Bootstrap 5.3.8** - Responsive grid and components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
devfolio/
├── index.html              # Main HTML file
├── index.css               # Source CSS file
├── index.min.css           # Minified CSS (production)
├── index.js                # JavaScript functionality
├── package.json            # Node.js dependencies
│
├── api/
│   └── contact.js          # Contact form API endpoint
│
├── fonts/
│   ├── poppins-v24-latin-regular.woff2
│   ├── poppins-v24-latin-500.woff2
│   ├── poppins-v24-latin-600.woff2
│   ├── poppins-v24-latin-700.woff2
│   ├── inconsolata-v37-latin-regular.woff2
│   └── figtree-v9-latin-regular.woff2
│
├── images/
│   ├── photo.webp          # Profile photo
│   ├── cs50.webp           # Project thumbnails
│   ├── puzzle.webp
│   ├── coursebooking.webp
│   ├── html.png            # Tech stack logos
│   ├── css.png
│   ├── js.png
│   ├── bootstrap.png
│   ├── nodejs.webp
│   ├── mongodb.webp
│   ├── postman.png
│   ├── git.png
│   ├── dark.png            # Theme icons
│   └── light.png
│
└── src/
    └── pages/
        └── coding-challenges/
            ├── challenges.html
            ├── challenges.css
            └── challenges.js
```

## Sections

### 1. **Landing/Hero**
- Profile photo
- Introduction and professional tagline
- Call-to-action buttons (View Work, View Resume)

### 2. **My Projects**
- CS50X 2025 Portfolio
- Coding Challenges Collection
- Course Booking API Documentation

### 3. **Tech Stack**
- HTML5, CSS3, JavaScript
- Bootstrap, Node.js
- MongoDB, Postman, Git

### 4. **Contact**
- Contact form with validation
- Email integration via backend API

### 5. **Footer**
- Social media links (GitHub, LinkedIn)

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

Bootstrap 5 grid system handles responsiveness automatically.

## Key Features Explained

### Dark Mode Toggle
- Uses localStorage to persist user preference
- Toggles `.dark` class on body element
- CSS variables handle color switching
- Icon changes based on current theme

### Contact Form
- Client-side validation
- Async fetch API for form submission
- Success/error alerts
- Form reset on successful submission
- Backend API endpoint: `/api/contact`

### Smooth Scroll
- CSS `scroll-behavior: smooth` for anchor links
- Hash-based navigation (#landing, #projects, #tools, #contact)

### Performance Optimizations
- Self-hosted fonts (no external requests)
- Image lazy loading with `loading="lazy"`
- Minified CSS (`index.min.css`)
- WebP image format for better compression

## Contact

For any inquiries, please use the contact form on the website or reach out via:
- Email: edrylpalinis@gmail.com
- LinkedIn: [@deyperfect](https://github.com/deyperfect)
- GitHub: [edrylpalinis](https://www.linkedin.com/in/edrylpalinis/)

_Edryl P_

---
*Last updated: February 2026*
