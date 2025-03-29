import React, { useState } from 'react';
import UserContext from './UserContextBase';

    const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn,setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;