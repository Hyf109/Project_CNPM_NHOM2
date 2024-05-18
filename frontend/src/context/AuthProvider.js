import {useContext, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("jwt"));
    const navigate = useNavigate();

    const login = async (data) => {
        try {
            const response = await fetch('/finder/api/login', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            });

            const res = await response.json();
            console.log(res);

            if (response.ok) {
                setUser(res.user);
                setToken(res.token);
                localStorage.setItem("jwt", res.token);
                //Navigate to search
                navigate('/search');
                return;
            }
            throw new Error(res.message);

        } catch (err) {
            console.log(err);
        }
    };
    
    const logout = async () => {
        const response = await fetch('/finder/api/logout', {
            method: "GET"
        });

        setUser(null);
        setToken('');
        localStorage.removeItem('');
        //Navigate to login
        navigate('/signin')
    }

    return (
        <AuthContext.Provider value = {{token, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

