


import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import React, { createContext } from 'react'
import auth from '../firebase/Firebase';


export const AuthContext =createContext(null)

const Authprovider = ({children}) => {

    const Signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const Signin=(email,password)=>{

        return signInWithEmailAndPassword(auth, email, password)

    }
    




const authinfo ={ Signup ,Signin}
  return (
  
  <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>

  )
}

Authprovider.propTypes ={

    children: PropTypes.node,

}

export default Authprovider