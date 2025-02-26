# Pratik's Portfolio

This is a personal portfolio project built using React and Vite. The project showcases various sections including Home, About Me, Skills, Resume, Projects, Certifications, and Contact.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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