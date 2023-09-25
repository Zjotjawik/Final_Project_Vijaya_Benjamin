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
import { Registration } from "./pages/Registration.jsx";
import { Footer } from "./components/Footer.jsx";
import { SuggestionForm} from "./pages/SuggestionForm";
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
      <Route path="/suggestion-form" element={<SuggestionForm/>}/>
      <Route path="/auth/signup" element={<Registration />} />
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
