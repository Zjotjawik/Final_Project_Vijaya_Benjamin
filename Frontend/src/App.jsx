import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import SearchBar from './components/SearchBar.jsx';
import SearchResultsList from './components/SearchResultsList.jsx';
import {Navbar } from './components/Navbar.jsx';

import { Routes, Route } from "react-router-dom";
import { Home }  from "./pages/Home.jsx"
import { AboutUs } from "./pages/AboutUs.jsx";
import { Error } from "./pages/Error.jsx";
import { Ailments } from "./pages/Ailments.jsx";
import { AyurIngredients } from "./pages/AyurIngredients.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
        {/* <Home /> */}
        <Navbar/> 
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ailments" element={<Ailments />} />
      <Route path="/ingredients" element={<AyurIngredients />} />
      <Route path="/*" element={<Error />} />
    </Routes>

    {/* <div className="containerSlide">
    <ImageSliderClick className="slider" slides={SliderData} />
    </div> */}
    
      
      <Footer/>
     
    </>
  )}
  
  export default App
