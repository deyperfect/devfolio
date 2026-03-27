# Devfolio

My professional portfolio website built with Vue 3 and Vite.

This project showcases who I am as a developer, the projects I have built, the technologies I work with, and the progress I am making as I continue growing into production-ready full-stack development. 

## About 

This portfolio highlights:

- featured personal and academic projects
- coding challenges that document ongoing practice
- a curated tech stack section
- a contact form for direct outreach
- a downloadable resume

The content is intentionally data-driven, which makes it easy to keep the portfolio current without rewriting large parts of the UI.

## Built With

- Vue 3
- Vue Router
- Vite
- Bootstrap 5
- Notyf
- Nodemailer

## Project Structure

```text
devfolio/
├── api/                 # Serverless contact form handler
├── public/              # Static assets such as images, fonts, and resume
├── src/
│   ├── assets/          # Global styles
│   ├── components/      # Reusable UI sections and cards
│   ├── data/            # Portfolio content stored as JSON
│   ├── pages/           # Route-level pages
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

## Running Locally

### Prerequisites

- Node.js `^20.19.0 || >=22.12.0`
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Environment Variables

To enable the contact form email handler, create a `.env` file in the project root:

```env
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-app-password
```

These variables are used by [`api/contact.js`](/Users/dey/Developer/GitHub/devfolio/api/contact.js) to send form submissions through Gmail via Nodemailer.

## Updating Portfolio Content

Most of the portfolio content can be updated from the JSON files in [`src/data`](/Users/dey/Developer/GitHub/devfolio/src/data):

- [`src/data/projects.json`](/Users/dey/Developer/GitHub/devfolio/src/data/projects.json) for featured projects
- [`src/data/challenges.json`](/Users/dey/Developer/GitHub/devfolio/src/data/challenges.json) for coding challenges
- [`src/data/techStack.json`](/Users/dey/Developer/GitHub/devfolio/src/data/techStack.json) for the tech stack section

Main page sections and copy can be updated in [`src/components`](/Users/dey/Developer/GitHub/devfolio/src/components) and route-level views in [`src/pages`](/Users/dey/Developer/GitHub/devfolio/src/pages).

## Contact Form

The contact form UI is implemented in [`src/components/Contact.vue`](/Users/dey/Developer/GitHub/devfolio/src/components/Contact.vue), and submissions are handled by [`api/contact.js`](/Users/dey/Developer/GitHub/devfolio/api/contact.js).

If you are using Gmail, use an app password instead of your normal account password.

## Notes

- Static assets, images, fonts, and `resume.pdf` live in [`public/`](/Users/dey/Developer/GitHub/devfolio/public)
- Navigation combines route-based pages with section links on the home page
- The repository was successfully verified with `npm run build`

## Purpose

This repository is more than a site build. It reflects my approach to web development, project presentation, and continuous learning. As I build more applications and strengthen my full-stack skills, this portfolio grows with me.
