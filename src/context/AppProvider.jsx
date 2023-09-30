import React, { createContext, useEffect, useState } from 'react';
export const AppContext = createContext({});
const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        setLoading(false);
    }, []);
    const value = {
        user, setUser, loading, setLoading
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;