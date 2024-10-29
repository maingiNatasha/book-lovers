import React, { createContext, useState } from 'react';

// Create context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value= {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;