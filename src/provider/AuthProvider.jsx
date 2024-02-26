import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const axios = useAxios()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const profile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                const loggedUser = { email: currentUser.email }
                console.log(loggedUser);
                if (currentUser) {
                    axios.post('/user/access-token', loggedUser)
                        .then(res => {
                            console.log('Token', res.data);
                        })
                }
                setUser(currentUser)
                setLoading(false)
            })
        }
        return () => {
            unsubscribe()
        }
    }, [axios])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        profile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}