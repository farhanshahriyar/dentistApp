import React, { createContext, useEffect, useState } from 'react';
export const AppContext = createContext({});
const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        setLoading(false);
    }, []);
    const value = {
        user, setUser, loading, setLoading, refetch, setRefetch
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;