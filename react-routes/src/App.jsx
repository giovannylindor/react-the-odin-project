import { useState } from 'react'
import './App.css'
import { defineConfig } from 'oxlint'
import { Link } from 'react-router';

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
