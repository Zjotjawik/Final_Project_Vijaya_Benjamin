import React, { useState } from 'react'
import '../styles/Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SearchBar from "../components/SearchBar.jsx";
import SearchResultsList from "../components/SearchResultsList.jsx";
// import { Dropdown } from 'bootstrap';
import DropdownAilments from '../components/DropdownAilments';
import Axios from 'axios';



export const Navbar = ({ setIsLoggedIn, results, setResults, setCriteria, isLoggedIn}) => {
  // const [results, setResults] = useState([]);
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [openAilments, setOpenAilments] = useState(false);

    const handleLogout = () => {
      Axios.delete('https://final-project-1lrc.onrender.com/auth/logout', {
        withCredentials: true, // Include cookies
      })
        .then((response) => {
          if (response.status === 200) {
            setIsLoggedIn(false); // Set isLoggedIn to false upon successful logout
            navigate("/")
          } else {
            console.error('Logout failed');
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    };
  

   return (
    <>
    <nav className='navbar'>
      {/* <Link to="/" className="logo"><img src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" /></Link> */}
      <Link to="/" className="title"><img className="logo" src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" />AyurEase<span>Your Guide to Natural Healing</span></Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
          <li><NavLink className='nav-link' to="/" >Home</NavLink></li>
          <li><NavLink className='nav-link' to="/about">AboutUs</NavLink></li>
          <li onMouseEnter={()=> setOpenAilments(true)} onMouseLeave={()=> setOpenAilments(false)}><NavLink className='nav-link' to="/ailments" >Ailments</NavLink>
              {openAilments && <DropdownAilments />}
          </li>
          <li><NavLink className='nav-link' to="/ingredients">AyurIngredients</NavLink></li>
          {isLoggedIn && (
            <li>
              <NavLink className='nav-link' to="/suggestion-form">SuggestionForm</NavLink>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <Link className='nav-link' to="#" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <NavLink className='nav-link' to="/auth/signin">SignIn</NavLink>
              </li>
              <li>
                <NavLink className='nav-link' to="/auth/signup">SignUp</NavLink>
              </li>
            </>
          )}

      </ul>
      <div className="search-results-container">
      <SearchBar setResults={setResults} setCriteria={setCriteria}/> 
      {/* {results.length > 0 && <SearchResultsList results={results} />} */}
      </div>
    </nav>
  </>
  )
}


