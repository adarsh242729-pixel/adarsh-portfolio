import React, { useEffect } from 'react'
import Portfolio from './components/Adarsh_Singh_Portfolio.jsx'

export default function App(){ 
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, []);

  return <Portfolio />
}
