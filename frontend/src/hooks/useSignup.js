import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signup = async (email, password, username) => {
        setIsLoading(true);
        setError(null);


        const response = await fetch('/finder/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username
            })
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(error);
        } else {
            localStorage.setItem('user', JSON.stringify(json));
            auth.dispatch({type: 'REGISTER', payload: json})
            navigate('/search');
            setIsLoading(false);
        }
    }

    return {signup, isLoading, error}
}