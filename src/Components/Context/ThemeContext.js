import { createContext, useEffect, useState } from "react";
import { Appearance, useColorScheme } from 'react-native'


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(true);
    const colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    
    useEffect(()=>{
        if (colorScheme === 'dark'){
            setDarkMode(true)
        }

    }, [setDarkMode])
    
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