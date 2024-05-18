import {useContext, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    // const [token, setToken] = useState(localStorage.getItem("jwt"));
    const navigate = useNavigate();

    //data.user is user id
    const authenticate = (data) => {
        if (data.user) {
            setIsAuth(true);
        }
    }

    const logout = (data) => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value = {{isAuth, logout, authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

