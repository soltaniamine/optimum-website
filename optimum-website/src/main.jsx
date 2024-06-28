import React from 'react'
import ReactDOM from 'react-dom/client'
// import Navbar from './homepage/Components/Navbar.jsx'
// import Footer from './homepage/Components/Footer.jsx'
import './index.css'
import AboutPage from './about_page/about_page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <AboutPage />
    {/* <Footer/> */}
  </React.StrictMode>,
)
