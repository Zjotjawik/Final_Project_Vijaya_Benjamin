import React, { useState } from 'react'
import '../styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from "../components/SearchBar.jsx";
import SearchResultsList from "../components/SearchResultsList.jsx";
// import { Dropdown } from 'bootstrap';
import DropdownAilments from '../components/DropdownAilments';
import {Logout} from './Logout.jsx';



export const Navbar = ({isLoggedIn, results, setResults, setCriteria}) => {
  // const [results, setResults] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openAilments, setOpenAilments] = useState(false);

  return (
    <>
  <nav >
    {/* <Link to="/" className="logo"><img src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" /></Link> */}
    <Link to="/" className="title"><img className="logo" src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" />AyurEase<span>Your Guide to Natural Healing</span></Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li onMouseEnter={()=> setOpenAilments(true)} onMouseLeave={()=> setOpenAilments(false)}><NavLink to="/ailments" >Ailments</NavLink>
            {openAilments && <DropdownAilments />}
        </li>
        <li><NavLink to="/ingredients">Ayur Ingredients</NavLink></li>
        {isLoggedIn && <li><NavLink to="/suggestion-form">Suggestion Form</NavLink></li>}
        {isLoggedIn ? (
          <li><NavLink to="/auth/signin">Logged in</NavLink></li>
        ) : (
          <li><NavLink to="/auth/signin">Log in</NavLink></li>
        )}
        {isLoggedIn ? (
        <>
        {/* <li><div onClick={Login.handleLogout}>Logout</div></li> */}
        {/* <li><Logout onClick={handleLogout}/>Here</li> */}
        <li> <Logout/> </li>
        </>
        ) : (
        <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        )}
    </ul>
    <div className="search-results-container">
    <SearchBar setResults={setResults} setCriteria={setCriteria}/> 
    {results.length > 0 && <SearchResultsList results={results} />}
    </div>
  </nav>

 

  </>
  )
}


