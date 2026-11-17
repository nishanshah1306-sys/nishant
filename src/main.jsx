import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/app.css'

const app = import.meta.env.VITE_PREVIEW
  ? <HashRouter><App /></HashRouter>
  : <BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter>
const root = document.getElementById('root')
// Pages are prerendered to HTML at build time, so React attaches to the existing markup.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
