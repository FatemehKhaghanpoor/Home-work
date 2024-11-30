import React, {  createContext, useState } from 'react'
export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
   const [isDark , setIsDark]=useState(false);
   console.log(isDark);
   
   const toggleTheme =()=>{
    setIsDark(isDark => !isDark)
   }
  return (
   <ThemeContext.Provider value={{isDark , toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;