import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import "./ThemeButton.css"

export const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button id="themeButton" onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
    )
}
