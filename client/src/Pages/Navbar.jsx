

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-[#E2725B] text-[#F9F6F0]">
    <div className="flex-1">
      <a className="btn btn-ghost text-2xl">Clayverse</a>
    </div>
    <div className="flex">
      <ul className="menu menu-horizontal px-1 flex gap-20 text-xl">
        <li>
          <a 
            href="#" 
            className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200"
          >
            Art & Craft
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200"
          >
            Login
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200"
          >
            Signup
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar