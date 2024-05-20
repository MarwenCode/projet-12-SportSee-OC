import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import "./App.css"
import VerticalNavbar from './pages/navbar/VerticalNavbar';


function App() {


  return (
    <Router>
      <Navbar />
      <VerticalNavbar />
   
  
      <Routes>
        
        <Route path="/" element={<Home />} />
    
      
      </Routes>

    
   
  </Router>

  )
}

export default App