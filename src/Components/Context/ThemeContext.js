import { createContext, useState } from "react";
import { Appearance, useColorScheme } from 'react-native'


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(true);
    const colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    
    if (colorScheme === 'dark'){
        setDarkMode(true)
    }

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