# React Notes

- React is a Front-End Library
    - A collection a pre-written code designed to make development easier

* With React:
    - Components are reusable
    - It's Well-supported
    - There's a Smaller learning curve

--- 

## Setting up React Environment

You can start React from `<script>` tags or toolchains and frameworks such as:
- Vite
- Gatsby
- NextJS
- Create React App (Depreciated)

* It's very difficult to start React w/o a Toolchain as the following would need to be configured:
    - Package Management
    - Module Bundling 
    - Compilation
    - React 

- Vite will be used in the terminal to start a react project 

**Creating a React App**

- Use the latest version of Node.js
- Enter the following command in the terminal:
`npm create vite@latest react-project-name -- --template react`
- The terminal will provide a `localhost` server to your React app

**What is `localhost`?**
- `localhost` is a hostname that refers to your own computer
- Data is sent and looped directly back to your local machine
- Your computer is essentially talking to itself

To exit out of you dev server hit `Ctrl + C`
To start your dev server type `npm run dev` in the terminal 

**Link your React App to an existing GitHub repo**

If you created a GitHub repo and cloned it, cd into the repo, then run the following in the terminal: 
`npm create vite@latest . -- --template react`

- Vite will use the current directory for the project instead of making a new one w/ the given name

- The cloned directory will be init as a repo & connected to the right remote

--- 

## Diving Deeper: Folders and Files

* The `public` folder is where all of the static assests related to the app goes
    - Images
    - Icons
    - Information files 

* The `src` folder is where the code that runs the App lives
    - `main.jsx` is the entry point of the app:

```JavaScript
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'

    createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
    )
```

- `StrictMode` and `createRoot` are imported from `react` and `react-dom` packages
- The `App` component is imported from the `App.jsx` file 
- CSS styling is imported 
- A `root` object is created w/ a `createRoot` and element from `index.html`
- The `render` method is invoked (attached to `root`) w/ _JSX_ 