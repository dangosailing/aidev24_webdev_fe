import React, { useState, useEffect } from 'react';
import UserContext from './UserContextBase';

    const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [serverMessage, setServerMessage] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

        if (storedUsername && storedIsLoggedIn) {
            setUser({ username: storedUsername });
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn,setIsLoggedIn, serverMessage, setServerMessage }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;