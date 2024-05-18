import {useContext, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState('');

    // const [token, setToken] = useState(localStorage.getItem("jwt"));

    //data.user is user id
    const authenticate = (data) => {
        if (data.user) {
            setUser(data.user);
            setIsAuth(true);
        }
    }

    const logout = (data) => {
        setIsAuth(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{user, isAuth, logout, authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

