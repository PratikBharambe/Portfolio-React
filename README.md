# Pratik's Portfolio

This project is a personal portfolio website built using the **React** framework and **Vite** build tool. It is designed to showcase various aspects of an individual's professional and personal profile. The portfolio is fast, responsive, and interactive, providing an excellent user experience.

## Features

The portfolio includes the following key sections:

- **Home**: The landing page of the portfolio, providing an overview and introduction.
- **About Me**: A section detailing the individual's background, interests, and personal story.
- **Skills**: A showcase of both technical and soft skills, presented in a visually appealing manner.
- **Resume**: A detailed resume or CV, outlining the individual's professional experience, education, and achievements.
- **Projects**: A portfolio of projects that the individual has worked on, with descriptions, technologies used, and links to live demos or repositories.
- **Certifications**: A list of certifications and courses completed by the individual, demonstrating expertise and a commitment to continuous learning.
- **Contact**: A section with contact information and a form for visitors to get in touch.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Vite**: Build tool and development server for fast and efficient builds.
- **HTML5**: For structuring the web content.
- **CSS3**: For styling the website, ensuring responsiveness and modern aesthetics.
- **JavaScript**: For dynamic content and interactivity.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [License](#license)

## Installation

To install the project dependencies, run:

```sh
npm install
```
## Usage
To start the development server, run:
```sh
npm run dev
```
To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

To lint the project, run:
```sh
npm run lint
```

## Project Structure
```sh
Project Structure
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
    logo.png
README.md
src/
    App.css
    App.jsx
    assets/
        bg.jpg
        react.svg
    components/
        MouseFollower.jsx
        SectionTitle.jsx
    index.css
    main.jsx
    pages/
        aboutMe/
            AboutMe.jsx
            assets/
        certifications/
            assets/
            Certifications.jsx
        contactPage/
            Contact.jsx
        footerPage/
            assets/
            FooterPage.jsx
        home/
            assets/
            components/
            Home.jsx
        projects/
            Projects.jsx
        resume/
            Resume.jsx
        skills/
            Skills.jsx
tailwind.config.js
vite.config.js
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the project.

## Dependencies

- `axios`: ^1.7.9
- `portfolio`: file
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.3.0
- `react-router-dom`: ^7.1.3

## DevDependencies

- `@eslint/js`: ^9.13.0
- `@types/react`: ^18.3.12
- `@types/react-dom`: ^18.3.1
- `@vitejs/plugin-react`: ^4.3.3
- `autoprefixer`: ^10.4.20
- `eslint`: ^9.13.0
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.14
- `globals`: ^15.11.0
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.15
- `vite`: ^5.4.10