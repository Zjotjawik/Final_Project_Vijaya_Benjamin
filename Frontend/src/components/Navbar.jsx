import React, { useState } from 'react'
import '../styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
// import { Dropdown } from 'bootstrap';
import DropdownAilments from '../components/DropdownAilments';
export const Navbar = () => {
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
        <li><NavLink to="/ailments" onClick={()=> setOpenAilments((prev)=> !prev)}>Ailments</NavLink></li>
        <li><NavLink to="/ingredients">Ayur Ingredients</NavLink></li>
        <li><NavLink to="/suggestion form">Suggestion form</NavLink></li>
        <li><NavLink to="/signed in">Signed in</NavLink></li>
    </ul>
  </nav>

  {
    openAilments && <DropdownAilments />
  }

  </>
  )
}


