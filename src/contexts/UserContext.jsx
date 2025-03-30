import React, { useState } from 'react';
import UserContext from './UserContextBase';

    const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [serverMessage, setServerMessage] = useState(" ");

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn,setIsLoggedIn, serverMessage, setServerMessage }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;