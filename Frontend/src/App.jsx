import { useState } from 'react'
import './App.css'
import {Navbar } from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import { Home }  from "./pages/Home.jsx"
import { AboutUs } from "./pages/AboutUs.jsx";
import { Error } from "./pages/Error.jsx";
import { Ailments } from "./pages/Ailments.jsx";
import { AyurIngredients } from "./pages/AyurIngredients.jsx";
import { Login } from "./pages/Login.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Footer } from "./components/Footer.jsx";
import { SuggestionForm} from "./pages/SuggestionForm";
function App() {
  const [results, setResults] = useState([]);
  
  return (
    <>
        {/* <Home /> */}
        <Navbar results={results} setResults={setResults} /> 
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ailments" element={<Ailments />} />
      <Route path="/ingredients" element={<AyurIngredients results={results} />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/suggestion-form" element={<SuggestionForm/>}/>
      <Route path="/auth/signin" element={<Login />} />
      <Route path="/*" element={<Error />} />
    </Routes>

    {/* <div className="containerSlide">
    <ImageSliderClick className="slider" slides={SliderData} />
    </div> */}
    
      
      <Footer/>
     
    </>
  )}
  
  export default App
