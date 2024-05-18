import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signin = async (email, password) => {
        setIsLoading(true);
        setError(null);


        const response = await fetch('/finder/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(error);
        } else {
            localStorage.setItem('user', JSON.stringify(json));
            
            auth.dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false);
        }
    }

    return {signin, isLoading, error}
}