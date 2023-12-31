import axios from 'axios';
import { useEffect } from 'react';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://medicare-backend.vercel.app/',

});


function useAxios() {
    useEffect(() => {

        const requestInterceptor = axios.interceptors.request.use(
            (config) => {

                const token = localStorage.getItem('authToken');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );


        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, [instance]);
    return instance;
}

export default useAxios;