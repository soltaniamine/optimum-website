import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './homepage/Components/Navbar.jsx'
import Footer from './homepage/Components/Footer.jsx'
import Home from './homepage/Home/Home.jsx'
import Separateur from './homepage/Home/Separateur.jsx'
import Features from './homepage/Features/Features.jsx'
import Null from './homepage/Components/Null.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <body className="custom-scrollbar">
      <Navbar />
      <main className="min-h-screen">
        <Home/>
        <Separateur/>
        <Null/>
        <Features/>
        <Null/>
      </main>
      <Footer/>
    </body>
  </React.StrictMode>,
)
