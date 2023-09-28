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
  // TO DO change for middleaware checking component
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [results, setResults] = useState([]);
  const [criteria, setCriteria] = useState();
  
  return (
    <>
        {/* <Home /> */}
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} results={results} setResults={setResults} setCriteria={setCriteria}/>   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ailments" element={<Ailments />} />
      <Route path="/ingredients" element={<AyurIngredients results={results} criteria={criteria} />} />
      <Route path="/suggestion-form" element={<SuggestionForm/>}/>
      <Route path="/auth/signin" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/*" element={<Error />} />
    </Routes>

    {/* <div className="containerSlide">
    <ImageSliderClick className="slider" slides={SliderData} />
    </div> */}
    
      
      <Footer/>
     
    </>
  )}
  
  export default App
