import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase';

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const Signout = () => {
        return signOut(auth);
    }

    const Signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('observing', uid);
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const authInfo = {
        Signout,
        user,
        loading,
        Signup,
        Signin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

Authprovider.propTypes = {
    children: PropTypes.node
}

export default Authprovider;