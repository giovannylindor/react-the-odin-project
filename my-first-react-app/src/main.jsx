import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './components/Greeting.jsx'
import FavoriteFood from './components/FavoriteFood.jsx'
import { FavoritePlayer } from './components/FavoritePlayer.jsx'
import { Shape } from './components/Shape.jsx'
import Person from './components/Person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <FavoritePlayer />
    <Person />
    <Shape /> 
  </StrictMode>
)
