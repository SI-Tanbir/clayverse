

import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/Authprovider'
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();


  const handleSignout = () => {
    Signout()
        .then(() => {
            toast.success('Successfully signed out!');
            navigate('/');
        })
        .catch((error) => {
            toast.error('Error signing out: ' + error.message);
        });
}


  const {user,Signout} =useContext(AuthContext)
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


        {user ? (
    <li>
        <button 
            className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200"
            onClick={handleSignout}
            
        >
            Logout
        </button>
    </li>
) : (
    <>
        <li>
        
        <Link  className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200" to={'/signin'}>Login</Link>
        
     
    </li>

    <li>
        
        <Link  className="hover:text-[#508484] active:text-[#D4B483] transition-colors duration-200" to={'/signup'}>Signup</Link>
        
      
    </li>
    </>
)}

<Toaster position="top-right" />

        
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar