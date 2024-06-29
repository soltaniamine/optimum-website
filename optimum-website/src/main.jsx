import React from 'react'
import ReactDOM from 'react-dom/client'
// import Navbar from './homepage/Components/Navbar.jsx'
// import Footer from './homepage/Components/Footer.jsx'
import './index.css'
import AboutPage from './about_page/about_page.jsx'
import Download from './download_page/download.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <AboutPage />
    {/* <Footer/> */}
    <Download/>
  </React.StrictMode>,
)
