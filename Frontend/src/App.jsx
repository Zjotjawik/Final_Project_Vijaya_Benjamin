import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import ImageSliderAuto from './components/ImageSliderAuto.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResultsList from './components/SearchResultsList.jsx';
import {Navbar } from './components/Navbar.jsx';
import {CardsContainer } from './components/CardsContainer.jsx';
import { Routes, Route } from "react-router-dom";
import { Home }  from "./pages/Home.jsx"
import { AboutUs } from "./pages/AboutUs.jsx";
import { Error } from "./pages/Error.jsx";
import { Ailments } from "./pages/Ailments.jsx";
import { AyurIngredients } from "./pages/AyurIngredients.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  // const [count, setCount] = useState(0)
  const [results, setResults]=useState([]);
  return (
    <>
        {/* <Home /> */}
        <Navbar/> 
    <ImageSliderAuto />
    <SearchBar setResults={setResults}/> 
    {results && results.length > 0 && <SearchResultsList results={results} />}
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
      <CardsContainer/>
      
      <Footer/>
     
    </>
  )}
  
  export default App
