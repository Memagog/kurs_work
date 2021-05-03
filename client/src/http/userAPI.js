import {host } from "./index";
import jwt_decode from 'jwt-decode';
export const registration = async (username, email, password) => {    
        const {data} = await host.post('api/user/registration', { username, email, password })
        const token =  jwt_decode(data.token)
        localStorage.setItem('token', data.token);
        return token   
};

export const login = async (email, password) => {    

        const {data} = await host.post('api/user/login', {email, password})
        const token =  jwt_decode(data.token)
        localStorage.setItem('token', data.token);
        
        return token

};

export const check = async () => {
    const {data} = await host.get('api/user/auth')   
    const token =  jwt_decode(data.token)
    localStorage.setItem('token', data.token);
    console.log(token)
    return token
};