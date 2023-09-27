import React, { createContext, useState, useContext } from 'react';

// Create a new context
const UserContext = createContext();

// Create a context provider component
export const UserContextProvider = ({ children }) => {
  // State to manage user data
  const [user, setUser] = useState(null);

  // Function to set user data
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to simplify accessing the context
export const useUserContext = () => {
  return useContext(UserContext);
};
