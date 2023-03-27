import { createContext, useState } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme=() => {
        if(isDarkMode ===false){

            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    }
    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}