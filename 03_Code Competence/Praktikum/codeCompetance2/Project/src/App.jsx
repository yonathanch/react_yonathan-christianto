import { useState } from 'react'
import ContactUs from './Components/ContactUs/ContactUs'
import Contoh from './Components/contoh/Contoh'
// import './App.css'
import WelcomePage from './Components/WelcomePage/WelcomePage'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div className="App">
   <WelcomePage />
   <ContactUs />
   <AboutUs/>
   <Footer/>
   {/* <Contoh/> */}
    </div>
  )
}

export default App
