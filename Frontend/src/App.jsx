import { useState, useEffect } from 'react';
import axios from 'axios';
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
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
function App() {
  // TO DO change for middleaware checking component
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [results, setResults] = useState([]);
  const [criteria, setCriteria] = useState();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/treatments')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
   }, []);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  return (
    <>
        {/* <Home /> */}
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} results={results} setResults={setResults} setCriteria={setCriteria}/>   
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ailments" element={<Ailments  setCriteria={setCriteria} setResults={setResults} results={results} />} />
    <Route path="/ingredients" element={<AyurIngredients data={data} setData={setData} results={results} criteria={criteria} />} />
      <Route path="/suggestion-form" element={<SuggestionForm/>}/>
      <Route path="/auth/signin" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/auth/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/auth/forgot-password" element={<ForgotPassword email={email} setEmail={setEmail} message={message} setMessage={setMessage}/>} /> 
      <Route path="/auth/reset-password/:token" element={<ResetPassword />} />
      <Route path="/*" element={<Error />} />
    </Routes>

    {/* <div className="containerSlide">
    <ImageSliderClick className="slider" slides={SliderData} />
    </div> */}
    
      
      <Footer/>
     
    </>
  )}
  
  export default App
