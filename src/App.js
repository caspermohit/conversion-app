import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import DateConverter from './components/DateConverter';
import HoursCalculator from './components/HoursCalculator';
import LengthConverter from './components/LengthConverter';
import TemperatureConverter from './components/TemperatureConverter';
import VolumeConverter from './components/VolumeConverter';
import WeightConverter from './components/WeightConverter';
import AreaConverter from './components/AreaConverter'; 
import BasicCalculator from './components/BasicCalculator';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import './App.css';
// Import other converters...

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('Currency');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className={`multi-converter-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1>Multi Converter App</h1>
            <div className="dark-mode-toggle-container">
                <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
            </div>
            
            {/* Tabbed Interface for Converters */}
            <div className="tab">
                <button className={`tablinks ${activeTab === 'Basic' ? 'active' : ''}`} onClick={() => handleTabClick('Basic')}>Calculator</button>
                <button className={`tablinks ${activeTab === 'Currency' ? 'active' : ''}`} onClick={() => handleTabClick('Currency')}>Currency Converter</button>
                <button className={`tablinks ${activeTab === 'Date' ? 'active' : ''}`} onClick={() => handleTabClick('Date')}>Date Converter(beta)</button>
                <button className={`tablinks ${activeTab === 'Hours' ? 'active' : ''}`} onClick={() => handleTabClick('Hours')}>Hours Calculator</button>
                <button className={`tablinks ${activeTab === 'Length' ? 'active' : ''}`} onClick={() => handleTabClick('Length')}>Length Converter</button>
                <button className={`tablinks ${activeTab === 'Temperature' ? 'active' : ''}`} onClick={() => handleTabClick('Temperature')}>Temperature Converter</button>
                <button className={`tablinks ${activeTab === 'Volume' ? 'active' : ''}`} onClick={() => handleTabClick('Volume')}>Volume Converter</button>
                <button className={`tablinks ${activeTab === 'Weight' ? 'active' : ''}`} onClick={() => handleTabClick('Weight')}>Weight Converter</button>
                <button className={`tablinks ${activeTab === 'Area' ? 'active' : ''}`} onClick={() => handleTabClick('Area')}>Area Converter</button>
            </div>

            {/* Tab Content */}
            <div className="converter-content">
                {activeTab === 'Basic' && <BasicCalculator />}
                {activeTab === 'Currency' && <CurrencyConverter />}
                {activeTab === 'Date' && <DateConverter />}
                {activeTab === 'Hours' && <HoursCalculator />}
                {activeTab === 'Length' && <LengthConverter />}
                {activeTab === 'Temperature' && <TemperatureConverter />}
                {activeTab === 'Volume' && <VolumeConverter />}
                {activeTab === 'Weight' && <WeightConverter />}
                {activeTab === 'Area' && <AreaConverter />}
            </div>
            
            <Footer />
        </div>
    );
};

export default App;
