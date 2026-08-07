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

* JSX is a syntax extension that lets you write HTML-like markup inside JavaScript
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

## Passing Data Between Components (React Props)

* In React, Data is transferred from parent components to child components via **props**.
    - This transfer is unidirectional (flows in only one direction)
    - Changes to the data only affects the child component not parent or sibling
        - This restriction gives explicit control over it

- Props are essentially properties that pass info from one component to another.

**Using Props in React**

`Example.jsx`
```JavaScript
function Button(){
    return <button>Click!</button>
}

export default function App(){
    return (
        <div>
            <Button />
        </div>
    )
}
```

- What if you wanted another button to say "Don't Click!"?
- What if you wanted another button to be Blue?

_Creating a component for a specific feature would be time consuming and against the principles of DRY (Don't Repeat Yourself) and "Reusuable Components" in the 1st place._

`ButtonProp.jsx`
```JavaScript

function Button(props){
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    )
}


export default function App(){
    return(
        <div>
            <Button text="Click Me!" color="blue", fo1ntSize={12} />
            <Button text="Don't Click Me!" color="Red", fontSize={12} />
    );
}
```

- The `Button` function takes in a `props` parameter
    - the properties are referenced with the `props.propertyName`
    - When rendering `Button` components, `prop` values are defined on each component
    - Inline styles are dynamically generated and applied to the `Button` element


**Prop destructuring**

- Unpacking props in the component params allows for more concise and readable code

```JavaScript
function Button({text, color, fontSize}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>
}

export default function App(){
    return (
        <div>
            <Button text="Click Me!" color='blue', fontSize={12}>
        </div>
    )
}
```

**Default props**

In order to stop repeating yourself by re-defining common values, define default params to set def values for props

```JavaScript

function Button({text = "Click Me!", color="blue", fontSize = 12}){
    const buttonStyle = {
        color: color, 
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>
}

export default function App(){
    return (
        <div>
            <Button />
            <Button text="Don't Click Me!" color="red">
        </div>
    );
}
```

_React no longer accepts a `defaultProps` object, although you may see it in some codebases._ 

**Functions as props**

In addition to passing vars through to child components, you can pass through functions

```JavaScript
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
    };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

```

- `handleButtonClick` is defined in the parent
- A reference is passed as the val for the `handleClack` prop on the Button Component
- A click event is recieved in `Button` and is called a click event 

_NOTE_: `handleButonClick` is passed as a reference w/o paranthesis. If `handleButtonClick()` is called, then the function would be called as the button renders


_Note_: You don't need the whole props object, so you can destructure it!
Hence: `export default function Button({text, color, fontSize, handleClick}) //({})`
- Don't miss the pair of { } inside of ( ) when declaring props!
    - This is called _destructuring_!

**Fowarding props**

Sometimes passing props gets repetitive
```JavaScript
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

Some components foward all their props to their children
Sometimes it can make sense to use the _Spread_ Syntax

```JavaScript
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```
- All of profiles props are passed to the avatar w/o listing each of their names
    - Use spread w/ restraint!


* When you nest content inside JSX, the parent component will get that content in a prop called children

--- 

## Rendering Techniques 

Rendering a list of elements can be long and tedious
- Using a data structure like an arry is more efficient

```JavaScript
function App(){
    const animals = ['Dog', 'Cat', 'Snake']
    
    return (
        <div>
            <h1>Animals</h1>
            <ul>
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>;
                })}
            </ul>
        </div>
    );
}
```

- arr `animals` is defined
- inside the jsx, `map` is used to return a new array of list elements, with `animal` as its text

The following is also identical:
```JavaScript
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  );
}
```

* What is **`key`**? 
    - When we dynamically render lists of components, we must give the top level component a key (essentially an ID for the component)


**Rendering a list of components**
```JavaScript 
function ListItem(props){
    return <li style={{listStyle:"none"}}>{props.team}</li>
}

function List(props){
    return (
        <ul>
            {props.teams.map((team) => {
                return <ListItem key ={team} team={team} />
            })}
        </ul>
    );
}

export default function Teams() {
    const teams = ['GSW', 'ATL', 'MIA', 'DEN', 'OKC', 'MIL', 'BKN', 'PHI',
        'ORL', 'CHA', 'POR', 'SAC', 'TOR', 'BOS', 'WAS', 'DAL', 'SA', 'HOU', 'CHI', 'MEM',
        'PHX', 'MIN', 'LAL', 'LAC', 'IND', 'NO', 'UTA', 'DET', 'CLE'];

    return(
        <div>
            <h1>Teams: </h1>
            <List teams={teams} />
        </div>
    );

}
```

- `ul` is moved to a diff component `List`
    - it still returns a `ul` 

- `List` accepts the arr of teams as a prop
    - And passes each individual team as a prop to `ListItem` component

**Conditionally rendering UI**

- What if we want to render an Team that starts w/ the letter 'M'?
    - We would need to use a conditional expression

```JavaScript
function List(props){
    return (
        <ul>
            {props.teams.map((team) => {
                return team.startsWith('M') ? <li key={team} style={{listStyle:"none"}}>{team}</li> : null; 
            })}
        </ul>
    );
}

export default function Teams() {
    const teams = ['GSW', 'ATL', 'MIA', 'DEN', 'OKC', 'MIL', 'BKN', 'PHI',
        'ORL', 'CHA', 'POR', 'SAC', 'TOR', 'BOS', 'WAS', 'DAL', 'SA', 'HOU', 'CHI', 'MEM',
        'PHX', 'MIN', 'LAL', 'LAC', 'IND', 'NO', 'UTA', 'DET', 'CLE'];

    return(
        <div>
            <h1>Teams: </h1>
            <List teams={teams} />
        </div>
    );

}
```

- `startsWith` checks if the team starts with 'M'
    - renders the team, otherwise `null` is returned 

* You can also conditionally render an element by using the `&&` operator:

```JavaScript
function List(props){
    return (
        <ul>
            {props.teams.map((team) => {
                return team.startsWith('M') && <li key={team} style={{listStyle:"none"}}>{team}</li>;
            })}
        </ul>
    );
}

export default function Teams() {
    const teams = ['GSW', 'ATL', 'MIA', 'DEN', 'OKC', 'MIL', 'BKN', 'PHI',
        'ORL', 'CHA', 'POR', 'SAC', 'TOR', 'BOS', 'WAS', 'DAL', 'SA', 'HOU', 'CHI', 'MEM',
        'PHX', 'MIN', 'LAL', 'LAC', 'IND', 'NO', 'UTA', 'DET', 'CLE'];

    return(
        <div>
            <h1>Teams: </h1>
            <List teams={teams} />
        </div>
    );
}
```

- If the 1st operand is `true` then it returns the 2nd operand (`li`), otherwise its false

_Note_: When using `&&` for conditional rendering, don't put numbers on the left side!
- JS auto converts the left side to a boolean automatically
    - if the left is 0, the whole expression is 0  

_Other ways to render conditionally_ 
1. `if`, `if/else`, and `switch`

```JavaScript
function List(props){
    if(!props.teams){
        return <div>Loading</div>
    }

    if(props.teams.legnth == 0){
        return <div>There are no teams!</div>
    }

    return (
        <ul>
            {props.teams.map((team) => {
                return <li key={team}>{team}</li>;
            })}
        </ul>
    );
}

```

* _Note_ Arrow function implicitly return the expression right after the `=>` so you dont need a `return` statement 
    - However you MUST write `return` if your `=>` is followed by an opening curly brace!

--- 

## Keys 

- A Key is a _string_ or _number_ that uniquely identifies it among other items in that array
    - You need to give each array item a `key`
    - JSX elements directly inside a `map()` call ALWAYS need keys!


* Keys tell React which array item each component corresponds to, so that it can match up to them later
    - This becomes important if you array items can move, a `key` helps React infer what's happened and make correct updates to the DOM

- Include keys in your data than generating them on the fly

```JavaScript
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```
* _NOTE_ the `<></>` Fragment Syntax won't let you pass a key
    - Either group them into a single `div` 
    - Use the `<Fragement></Fragment>` Syntax

```JavaScript
import { Fragment } from 'react';

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

* Fragments Dissapear on the DOM

**Where to get your keys**
- Data from a Database: If data is coming from a databse, you can use database keys/IDs, which are unique by nature

- Locally generated data: If your data is generated and persisted locally, use an incrementing counter `crypto.randomUUID()` or a package like `uuid` when creating items 

**Rules of Keys**

- They must be unique amongst siblings 
- They must not change

**Why are Keys needed in React?** 
- They let us uniquely identify an item between its siblings. 
- They provide more info than the position within the array
- Even if the pos changes, the `key` lets React identify the item throughout its lifetime

- If you update state, it's still the same instance of the component
    - React will know this bc the key hasn't changed
    - If the key changes, React knows its a new instance of that component and can build a new one w/ fresh states

    **Rendering lists**
    - `.map()` is used to iterate over an arr of data and return a component
        - if the list changes, we want to either re-render that list or find the specific items and only re-render those
            - for that, we need keys 

    **Using keys**
```JavaScript
    <Component key={keyValue} />
    <div key={keyValue}></div>
```

- The `key` prop is private (only for internal React stuff)
    - It's not passed to the component via the props param

_Unique Keys_
```JavaScript
// a list of todos, each todo object has a task and an id
const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
```
- `crypto.randomUUID()` generates a unique ID 

_Notes_ 
- Don't use an items index in the arr as its key
    - React will use that if you dont specify a `key` at all 
    - The will get changed over time if items are removed, inserted, etc. 
    - Indexes as keys can lead to subtle and confusing bugs

- Don't generate keys on the fly w/ `key={Math.random()}` or `crypto.randomUUID()`
    - Keys will never match up between renders 
    - Leading to components and DOM being recreated every time

- Components won't recieve a `key` as a prop.

**Keys and State**

- Dynamically rendering lists is the most common situation where you'd need to provide a key

---

## State

* Any app you build is likely to change as a user is exploring it
    - Could be basic as:
        - Toggling down a dropdown menu
        - Fetching Data from an API

React provides primates (built-in features) to manipulate the state of your apps & components, to make them dynamic

What is state: **_Current State of your Program_**
- In programming: **_The data which is manipulated and reflected by your program_**
- In React: **_State is a components MEMORY._**


**`useState` hook**

- `useState` hook is a built-in hook in React that allows you to define state in a functional component
    - Take an initial val as a param
    - Returns an arr w/ 2 elements that we can destructure to get
        1. Current State Value
        2. Function to Update the State

_Example_
`const [stateVar, setFunction] = useState(initialValue);`
- The `[ ]` syntax is _Array Destructuring_ and it lets you read vals from an array. 

`useState` Pattern
```JavaScript

const [stateVal, setStateVal] = useState(initValue);

//use case
const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
```

* `backgroundColor` state is defined w/ the hook
    - On every btn, we set a click event handler that calls `setBackgroundColor`


**How does state work?**

- When a components state/props change:
    - React runs your component function again from the beginning 
        - to figure out what should be displayed based on state & props
    - All changes are applied to the DOM 
    - The entire component is _Re-Rendered_
- Re-Rendering enables efficient UI updates in response to data changes

* Virtual DOM (Document Object Model Tree): Lightweight Representation of the DOM 
that React uses to keep track of the current UI state  

_Example_: `const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);`

* Wherever `setBackgroundColor` is called:
    -  `App` is rerendred
        - The component is recreated 
    - `backgroundColor` doesn't get rerendered as React takes responsibility of keeping track of the latest state and providing it to the component. The inital state value `backgroundColor` is used for the 1st render and ignored 

![](/imgs/01.png)



_Example From react.dev_
```JavaScript
const[index, setIndex] = useState(0);
```

1. Component renders for the 1st time.
    - 0 is passed as the initial value, it will return `[0, setIndex]`
2. You update the state
    - User clicks btn &rarr; it calls `setIndex(index + 1)` 
    - index was 0, but now React remebers that index is 1.
3. 2nd Render
    - React sees `useState(0)`, but react doesnt need it
    - it remebers and returns `[1, setIndex]`
---

**Additional Notes**

* State is isolated and private
    - State is local to a component instance on the screen 
    - If you render the same component twice, they will have isolated state

    **Rendering Components**
    The process of requesting and serving UI consists of 3 steps
    1. Triggering Render
        - Components intial render
        - Done by calling `createRoot(document.getElementByID('root')).render(< Component/>)`
        - Once initial render done, updates to state auto queues a render
    2. Rendering Component
        - After triggering, React calls components to figure out what to display
        - On ititial render: React calls root
        - On Renders After: React calls the function component `setFunction` whose state triggered the render 
    3. Commiting to the DOM
        - Initial Render: React uses `appendChild()` to put all nodes on sceen
        - Re-Renders: React applies minimal necessary operations to make the DOM match the latest output
            - React only changes DOM nodes if theirs a difference between renders 

## Hooks 

* Hooks are functions that let you use React features. 
    - All hooks are recognizable by the `use` prefix

1. Hooks can only be called from the top level of a component. 
2. Hooks can't be called from inside loops or conditions. 

* Hooks are only available while React is rendering
    - They let you Hook into different features 


### More on State

**How to Structure State** 

* State should NOT be mutated
    - This leads to unpredictable results
    - Primatives are immutable (unchangable)
    * _If you're objects and arrays, never mutate them!_

==_Treat State as Immutable_==

`dontDo.jsx`
```JavaScript
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // BAD - Don't do this!
  const handleIncreaseAge = () => {
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  };
```

`doThis.jsx`
```JavaScript
  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };
```

- Create a new obj + copy existing state val + providing a new val for `age`
    - If we don't provide a new obj to `setState` it's not guaranteed for re-rendering
    - We should always provide a new obj for `setState` to trigger a rerender

**How state updates**

- State updates are _asynchronous_
    - whenever you call `setState` React will apply the update in the next render 

**State updater functions**

`snippet.jsx`
```JavaScript
const handleIncreaseAge = () => {
  setPerson({ ...person, age: person.age + 1 });
  setPerson({ ...person, age: person.age + 1 });
};
```

- The `handleIncreaseAge()` function doesn't increase age by 2
    - It replaces the current person w/ and increase by one
        - Then does the SAME thing
            - Ex (age === 10): age: 10 + 1
                - Then: age: 10 + 1
                    - On Re-render: age === 11

* React will replace the current state w/ the value passed in 
    - What if I want to update the state multiple times using the latest state? 
        - **STATE HELPER FUNCTIONS**

```JavaScript
const handleIncreaseAge = () => {
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
};
```
- When a callback is passed, it ensure the latest state is passed!
    - Updaters aren't always necessary


**Controlled Components**

* There are native HMTL elements that maintain their own internal state
    - EX: `input`
        - You type into `input` &rarr; it updates its own val on every keystroke
            - There are many cases where you'd like to control the value
                - **CONTROLLED COMPONENTS**

```JavaScript
function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
```
- Instead of letting the input maintain its own state, we define our own state using the `useState` hook.

**_This pattern is extremely useful wherever you need user input, i.e., typing in a textbox, toggling a checkbox, etc. _**


**Additional Notes**
- A states variable value never changes within a render

Principles for structuring State
1. Group related state
    - if you update 2+ state vars, merge them into a single state var
2. Avoid contradictions
    - When state is structured, several pieces may disagree w/ each other
    - Avoid leaving room for mistakes
3. Avoid redundant (unecessary) State
    - If you can calc info from the props or existing state var
    - Don't pass that into the components state
4. Avoid duplication in state
    - When same data is duplicated between state vars and nested objects, its hard to sync

5. Avoid deeply nested state


_1. Group Related State_

Instead of
```JavaScript
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```

`Do THIS`
```JavaScript
const [position, setPosition] = useState({ x: 0, y: 0 });
```

_2. Avoid Contradictions_

See this:
```JavaScript
export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }
```

- This code works, but leaves room for contradictions
    - if you forget to call `sentIsSent` and `setIsSending` together, both could be true at the same time

`Instead`
```JavaScript
export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }
```


_3. Avoid redundant state_

See 
```JavaScript
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
```

---

## `useEffect`

`useEffect` is a React Hook that tells React to complete code when: 
- A component re-renders
- A component mounts (create + add to the DOM)
- When the State Val Changes 

Syntax: `useEffect(function, [dependencies])`

1. `useEffect(() => {})` &rarr; complete code when the component re-renders
2. `useEffect(() => {}, [])` &rarr; complete code when the component mounts 
3. `useEffect(() => {}, [value])` &rarr; complete code when component mounts + value changes

Use Cases
1. Event Listeners
2. DOM Manipulation
3. Real-Time Updates
4. Fetching Data from API
5. Clean up Component Unmounts


Cleanup Function 
- A retun statement that unmounts a component and does cleanup
- `return () => { }` &rarr; do the code before the next re-render(if no dependencies) or when the component unmounts


**Lifestyle of an Effect**
1. Component mounts whens its added to the screen 
2. Component updates when it gets props/states
3. Component unmounts when its removed from the screen 

- - -

## React Router

The browser allows JS to manage user navigation through the _History API_. This tracks/enables a site to interact w/ the browsers session history (pages visited in a given window)


**Client-Side Routing**

* Client-side routing is routing where JavaScript takes over the duty of handling Routes in an application. 
    - This helps in building SPA (Single-Page Applications) without refreshing during navigation

* In general multi-page applications, the browser reloads everytime you click on a link to navigate
    - w/ CSR you never leave the page you're on
        - JS intercepts link request instead of letting them go straight to the server

* React Router is a standard routing library for React applications
    - We can specify components that can be rendered based on the route

**Client-Side Routing & Single-Page Applications**

Non-SPAs are typically server-based routing. This means that the server handles the logic for URL paths. The browser requests a page from the server, and the server processes it, builds the HTML and sends a page back
- This is good for SEO and Security, but comes at the cost of slower navigation. 

Modern-Day browsers have allowed it to where: 
- HTML is cheap to load & render
- Shared resources don't get reloaded due to caching
- Pages only appear when they're ready

SPAs replaces SSR with CSR
- JS processes all the requests instead of sending them to the server

Pros: 
- Apps/app navigation is very fast
- SPA requests raw-data
- Apps can cache local data, which keeps the app working if internet is lost

Cons: 
- SEO isn't the best
- Memory Management

When To Choose What

SPA w/ CSR
- Dynamic Interaction
- Rich UI 
- Mobile-Friendly
- Architectural Complexity


MPA w/ SSR
- SEO optimization 
- Insights & Anylitics
- Scalability
- Different Entry Points
- Embedding Requirements 


Other Web Concepts 
- `axios` is used over `fetch` &rarr; its preferred due to its clean syntax and features
    - Auto JSON conversion
    - Better Error Handling
    - HTTP interceptions
    - Request Cancellation 

- CORS stands for Cross-Origin Resource Sharing
    - Its browser security mechanism 
        - CORS errors block request from the frontend to an external API bc the API didnt authorize your domain
            - Ex: `localhost:3000` sending an `axios` req to `localhost:5000`
                - This is consisdered a cross-origin request



Adding a router 

1. create a page component
```JavaScript
const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
    </div>
  );
};

export default Profile;
```

2. have a component that will request the page
```JavaScript
const App = () => {
  return(
    <>
      <div>
        <h1>Hello, from main!</h1>
        <p>Examples of links to other pages!</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default App; 
```
- `<Link />` essentially prevents the full page reload instead of an `<a href>`

3. add the router to `main.jsx`
```JavaScript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

- `createBrowserRouter` creates the config for a router 
    - it passes arguments in the form of an arr of routes
- `RouterProvider` takes the router var and renders the element based on the router var


You can render a section of a page differently based on different urls
Routes can be nested as a child to another one to ensure the child gets rendered w/ the parent

**Nested Routes**

`popeye.jsx`
```JavaScript
import { Link } from "react-router";

const Popeye = () => {
    return(
        <>
            <p>Im popeye!</p>
            <Link to="/">Go Back</Link>
        </>
    );
}

export default Popeye;
```

`spinach.jsx`
```JavaScript
import { Link } from "react-router";

const Spinach = () => {
    return(
        <>
            <p>Im Spinach</p>
            <Link to="/">Click to go back</Link>
        </>
    );
};

export default Spinach;
```

`main.jsx`
```JavaScript
import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

- The children can now be accessed in an Outlet component
    - When the route gets visited, its component gets displayed in the parent


**Adding default component when no path is added**

`defaultProfile.jsx`
```JavaScript
const DefaultProfile = () => {
  return <p>Oh, nothing to see here!</p>;
};

export default DefaultProfile;
```

`main.jsx`
```JavaScript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```
- when `localhost:3000/profile` is visited, the `<DefaultProfile />` component is running by def



DEFINITONS:
URL: full web address used to find a resource
Ex: https://example.com 

- https:// &rarr; protocol 
- example.com &rarr; domain name
- /blog/news &rarr; path 

PATH: part of the url after the domain name, shows the exact location you want to see
    Ex: /blog/news &rarr; path 

ROUTE: instruction set inside code &rarr; connects the address to the function that builds the page


_EXAMPLE_

```JavaScript
  {
    path: "profile/:name",
    element: <Profile />,
  },
```

- The `:` turns the path into a *dynamic segment* it matches the changing vals in that position 
    - These are called url params or `params`
        - They are used w/ the `useParams` hook
        - `useParams` extracts values from the url path
        - the values used after the colon are variables that can be used

`Profile.jsx`
```JavaScript
import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
```

**bad urls**

1. create an error page component 

`ErrorPage.jsx`
```JavaScript
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
```

`main.jsx`
```JavaScript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```


**Refactoring**

The array of routes can have its own routes.jsx file and it can be imported and used in `main.jsx`

`routes.jsx`
```JavaScript
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
```


**Outlets & State**

* You can nest routes as children of a parent route and you can use an `<Outlet />`

- If we had data in the parent element and wanted to pass it to any components from the outlet we would use a `useContext`

* `useContext`
    - hook, allows components to read/subscribe to data w/o manually passing props.
    - usually data goes from top &rarr; bottom via props
        - if a deeply nested component needs a piece of data, it'd have to go through every immediate component. this is called _prop drilling_
        - `useContext` lets child components access global data DIRECTLY

*STEPS*
1. create context
```JavaScript
import { createContext } from 'react';
// Creates a context holder
export const ThemeContext = createContext();
```

2. provide the context
    - wrap the target component (component to give data) inside the context's provider and give it a value
```JavaScript
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    // Everything inside Dashboard now has access to the 'dark' theme
    <ThemeContext.Provider value={theme}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
```

3. use the context
    - use the `useContext` inside any nested data to read the data
```JavaScript
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function DeeplyNestedButton() {
  // Pulls the 'dark' value directly from the nearest provider
  const theme = useContext(ThemeContext); 

  return <button className={theme}>Click Me</button>;
}
```

Use Cases

- Themes
- Authentication
- Global State
- Localization 


* Outlets have a context prop 
`parent`
```JavaScript
// Parent route
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Outlet context={[count, setCount]} />;
}
```

`child`
```JavaScript
// Child route
import { useOutletContext } from "react-router";

function Child() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}
```


- `useNavigate` function that lets you navigate to another path or foward/backwards in time
    - read react router docs. 

--- 

## Fetching Data in React

Basic `fetch` request

```JavaScript
const image = document.querySelector("img");
fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((response) => {
    image.src = response[0].download_url;
  })
  .catch((error) => console.error(error));
``` 

Sometimes APIs require identification. In scenarios like these, you need to include a header such as a `User-Agent` or an identifier than the API owner specifies

```JavaScript
const image = document.querySelector("img");
fetch("https://picsum.photos/v2/list", {
  headers: {
    "User-Agent": "the-odin-project"
  }
})
  .then((response) => response.json())
  .then((response) => {
    image.src = response[0].download_url;
  })
  .catch((error) => console.error(error));
```

- Whenever a component needs to make a request as it renders, its best to wrap that fetch in a `useEffect`

**Handling Errors**

Working over networks can be unreliable. 
- APIs can go down 
- Networks can have connection issues
- Responses recieved could contain errors
 
```JavaScript
useEffect(() => {
  fetch("https://picsum.photos/v2/list", {
    headers: {
      "User-Agent": "the-odin-project"
    }
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].download_url))
    .catch((error) => setError(error));
}, []);
```

**Adding error and loading states**

```JavaScript
const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list", {
      headers: {
        "User-Agent": "the-odin-project"
      }
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].download_url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
```

**Using hooks**

You can seperate logic using Hooks. Turning helper functions into resuable hooks helps separate logic 

```JavaScript
import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list", {
      headers: {
        "User-Agent": "the-odin-project"
      }
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].download_url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = () => {
  const { imageURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
```

- `useImageURL` returns `imageURL` `error` and `loading` 
  - that is ultimately used in the `<Image />` component 

**Managing Multiple Fetch Requests**

- In a full-scale web app youre gonna be making more than 1 API request
  - You need to be careful on how you organize them.


- React dev often face the issue of making multiple requests. 
  - Thats call _waterfall requests_


## Understanding APIs

API (Application Programming Interface) is a protocol that allows one app to talk to another
- They are essentially the middleman that enables the exchanging of info

There are 2 types of APIs 
1. REST APIs
2. GraphQL

REST APIs require HTTP methods to get/send data

**`fetch`**

the `fetch` method allows us to make HTTP requests to the backend. there are multiple HTTP methods:
GET &rarr; request data
POST &rarr; send data
PUT &rarr; update data
DELETE &rarr; delete data

`fetch` requires 1 param and an optional param
`fetch(url, options)`

- options can specify the HTTP method 
```JavaScript
fetch(url, {
  method: "GET" 
});
```

- GET is the default

For POST:
```JavaScript
fetch(url, {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
```

Note: `async/await` is often used w/ `try/catch/finally` to catch errors and manage state

Problem w/ API calls in `useEffect`
The request is NOT cached when pages are revisited
