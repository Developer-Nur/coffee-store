import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthProvider = createContext(null);

const Providers = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword ( auth , email, password)
    }
    const singinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword ( auth , email, password)
    }

    const appData = {
        user, createUser, loading, singinUser
    }

    return (
        <AuthProvider.Provider value={appData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Providers;