import React from 'react'
import { useState } from 'react'
import { ailmentsDropdown } from './NavItems'
import { Link } from 'react-router-dom'
import '../styles/DropdownAilments.css'

const DropdownAilments = () => {
   const [dropdown, setDropdown] = useState(false);
  return (
    <div className=''>
      <ul className= {dropdown ? "ailments-submenu clicked" : "ailments-submenu"}
      onClick={() => setDropdown(!dropdown)}  > 
        {ailmentsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default DropdownAilments

// flex flex-col dropdownProfile    
// flex flex-col gap-4 ailments-submenu