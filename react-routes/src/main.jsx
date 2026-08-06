import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'
import Spinach from './Spinach.jsx'
import Popeye from './Popeye.jsx'
import DefaultProfile from './DefaultProfile.jsx'
import ErrorPage from './ErrorPage.jsx'
import routes from './routes.jsx'

const router = createBrowserRouter(routes);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
