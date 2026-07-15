import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID

createRoot(document.getElementById('root')).render(<App />)
