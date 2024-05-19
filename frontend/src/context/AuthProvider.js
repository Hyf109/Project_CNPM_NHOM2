import {useContext, createContext, useState, useReducer, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null};
        default: 
            return state;
    }
}

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });
    

    useEffect(() => {
        //Conver local storage cookie store in string to json
        const user = JSON.parse(localStorage.getItem('user'));
        
        //If user is not null then dispatch login
        if (user) {
            dispatch({type:'LOGIN', payload: user});
            console.log("Done setting state");
        }
    }, []);


    console.log('Current state', state);


    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

