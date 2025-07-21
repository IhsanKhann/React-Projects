import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom' ; 
import NavBar from './components/Navbar.jsx' ;
import Home from "./components/Home.jsx" ;
import AboutUs from "./components/About.jsx" ;
import ContactUs from "./components/ContactUs.jsx" ;

function App() {
  
  return (
    <> 
   
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path="/about" element={<AboutUs/>}> </Route>
          <Route path="/contactus" element={<ContactUs/>}> </Route>
        </Routes>
    
    </>
  )
}

export default App
