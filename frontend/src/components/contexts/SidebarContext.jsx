import React, { createContext, useContext, useState, useCallback } from 'react';

// Create context
const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

    return (
        <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
};

// Create a custom hook to use the context
export const useSidebar = () => useContext(SidebarContext);