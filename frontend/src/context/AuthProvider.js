import {useContext, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');

    // const [token, setToken] = useState(localStorage.getItem("jwt"));

    //data.user is user id
    const authenticate = (data) => {
        if (data.user) {
            setUser(data.user);
            setIsAuth(true);
            setUsername(data.username);
        }
    }

    const logout = (data) => {
        setIsAuth(false);
        setUser(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value = {{user, isAuth, username, logout, authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

