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

---

## Components

React allows you to break a UI into reusable chunks: _Components_

_Example_

![](/imgs/00.png)


A website could be broken into the following: 
- `App`: main application
- `Navbar`: Navbar
- `MainArticle`: Component that renders main content
- `NewsletterForm`: Form that lets user input email 

**How to create components** 
```JavaScript
function Greeting() {
    return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>
}
```

- The snippet is a function that returns JSX

**_Note_**: React Components must be **CAPITALIZED** or they won't funciton as expected

- Components live in their own dedicated file, which makes it independent from the rest of the codebase

- For a component to be have its functionality be shared elsewhere, it must be `imported` and `exported`

```JavaScript
function Greeting() {
    return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>
}

export default Greeting;
```

- Component Declared
- Exported 

- `main.jsx` doesn't know about it yet 
    - it must be imported 

`main.jsx`
```JavaScript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './components/Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>,
)
```

- When JSX is parsed, React uses the capitalization to tell the difference between an HTML tag and React Component instance 
    - `<greeting />` would be interpreted as a normal HTML element w/ no special meaning 

---

## JSX

* JSX is a syntax extension that lets you write HTML-like markup inside JavaSCRipt
     - Its not required to use JSX for react components but it makes writing them concise
    
* Its syntactic sugar (syntax designed to be easier to read/write) for the `createElement` function in React
    - `createElement()` creates a React element 
    - JSX compiles down to plain JS objects 

**Why do we use JSX?**

Rendering logic and markup are inherently coupled, and their usually seperated by having logic & markup in different files

- **JSX allows React to have rendering logic and content appear in the _Same Place_**
- Its an intuitive (knowing something immediately) and visual way to work w/ UI inside code

**JSX Rules**

* You cannot take valid HTML and copy it into a React component, it wouldn't work. 
    - This is bc of the rules JSX implements which aren't present in HTML

1. Return a single root element (**FRAGMENT**)
    - If you wish to return multiple elements in a component, wrap them in a _parent tag_. 

`Correct`
```JavaScript
function App(){
    return(
        <>
            <h1></h1>
            <h2></h2>
        </>
    )
}
```

`INCORRECT`
```JavaScript
function App() {
  return (
    <h1>Example h1</h1>
    <h2>Example h2</h2>
  );
}
```

2. Close all tags
    - Many tags in HTML are self-closing and self-wrapping
    - We must _explicitly_ open and close these tags
    - Ex: `<input>` would become `<input />` and `<li>` would be `<li></li>`

`Correct`
```JavaScript
function App() {
  return (
    <>
      <input />
      <li></li>
    </>
  );
 }
```

3. camelCase **MOST** things
    - JSX turns into JavaScript
    - Attributes of elements become keys of JavaScript objects
    - So dashes or reserved words such as `class` can't be used
    - Many HTML attributes are written in camelCase. 
    - Ex: instead of `stroke-width` use `strokeWidth` and instead of `class` use `className`

`Correct`
```JavaScript
function App() {
  return (
  <div className="container">
    <svg>
      <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
    </svg>
  </div>
  );
}
```

### JSX & Curly Braces

- When you want to pass a string attribute to JSX, you put it in single or double quotes
```JavaScript
export default function Avatar(){
    const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
    const desc = 'Gregoirio Y. Zara'; 
    return(
        <>
            <img 
                className="avatar"
                src={avatar}
                alt={desc}
            />
        </>
    );
}
```

* JSX is a special way of writing JavaScript
    - This means that it's possible to use JS inside it w/ curly braces 

**where to use curly braces**

There are 2 ways to use curly braces in JSX
1. as text inside an html tag: `<h1>{name}'s list:</h1>`
    - `<{tag}>GG's list</{tag}>` **WONT WORK**
2. as attributes following "=": `src={avatar}`

**"double curlies": CSS & Objects in JSX**

- you can pass objects in JSX
- Objects are denoted w/ curly braces: `{name: 'GIO', inventions: 5}`

* This is seen w/ CSS inline styles in JSX 
    - React doesn't require inline styles
    - When you need an inline style pass the obj to the `style` attribute

To pass a JS object in JSX: **_Wrap the object in 2 curly braces!_**
```JavaScript
export default List(){
    return(
        <>
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>

            <li>Improve Video</li>
        </>
    );
}
```
* See `Person.jsx` in `my-first-react-app/src/components` for implentation
`Person.jsx`
```JavaScript
//Practice w/ JSX, Objects and Curly Braces

const user = {
    name: 'Gio',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
        width: '500px',
        margin: 'auto'
    }
};

export default function Person(){
    return(
        <div style={user.theme}>
            <h1>{user.name} Says Hi!</h1>
            <h2 style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 'auto',
                width: '300px'
            }}>{user.name}</h2>
        </div>
    )
}
```

---