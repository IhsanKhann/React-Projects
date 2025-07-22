import { createContext, useState } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [Theme, setTheme] = useState('light');

    const setLightTheme = () => {
        setTheme('light');
    };

    const setDarkTheme = () => {
        setTheme('dark');
    };

    return (
        <ThemeContext.Provider value={{ Theme, setLightTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };