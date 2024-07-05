import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'
import { Toaster } from 'react-hot-toast';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
)
