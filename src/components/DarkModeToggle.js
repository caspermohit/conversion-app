import React from 'react';
import './DarkModeToggle.css'; // Import the CSS for the toggle switch
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons

const DarkModeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <div className="toggle-container">
            <FaSun className={`icon ${isDarkMode ? 'hidden' : 'visible'}`} />
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
            <FaMoon className={`icon ${isDarkMode ? 'visible' : 'hidden'}`} />
        </div>
    );
};

export default DarkModeToggle;
