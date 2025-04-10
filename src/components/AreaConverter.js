import React, { useState } from 'react';
import './AreaConverter.css'; // Import the CSS file

function AreaConverter() {
    const [area, setArea] = useState('');
    const [unit, setUnit] = useState('m2');
    const [convertedAreas, setConvertedAreas] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const convertArea = () => {
        const value = parseFloat(area);
        if (isNaN(value) || area.trim() === '') {
            setErrorMessage('Please enter a valid area.');
            setConvertedAreas({});
            return;
        }

        const conversions = {
            m2: 1,
            cm2: 10000, // 1 m² = 10,000 cm²
            mm2: 1000000, // 1 m² = 1,000,000 mm²
            km2: 0.000001, // 1 m² = 0.000001 km²
            ft2: 10.7639, // 1 m² = 10.7639 ft²
            yd2: 1.19599, // 1 m² = 1.19599 yd²
            mi2: 0.000000386102 // 1 m² = 0.000000386102 mi²
        };

        // Convert based on the selected unit
        const baseValueInM2 = value / conversions[unit];
        const converted = {};
        for (const [key, conversionFactor] of Object.entries(conversions)) {
            converted[key] = baseValueInM2 * conversionFactor;
        }

        setConvertedAreas({
            m2: converted.m2.toFixed(2),
            cm2: converted.cm2.toFixed(2),
            mm2: converted.mm2.toFixed(2),
            km2: converted.km2.toFixed(6),
            ft2: converted.ft2.toFixed(2),
            yd2: converted.yd2.toFixed(2),
            mi2: converted.mi2.toFixed(8),
        });
        setErrorMessage(''); // Clear any previous error messages
    };

    const clearFields = () => {
        setArea('');
        setUnit('m2');
        setConvertedAreas({});
        setErrorMessage(''); // Clear error message on clear
    };

    return (
        <div className="area-converter-container">
            <h1 className="converter-title">Area Converter</h1>
            <input
                type="number"
                className="area-input"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Enter area"
            />
            <select className="unit-select" value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="m2">Square Meters (m²)</option>
                <option value="cm2">Square Centimeters (cm²)</option>
                <option value="mm2">Square Millimeters (mm²)</option>
                <option value="km2">Square Kilometers (km²)</option>
                <option value="ft2">Square Feet (ft²)</option>
                <option value="yd2">Square Yards (yd²)</option>
                <option value="mi2">Square Miles (mi²)</option>
            </select>
            <button className="convert-button" onClick={convertArea}>Convert</button>
            <button className="clear-button" onClick={clearFields}>Clear</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="converted-areas">
                <h2>Converted Areas:</h2>
                {convertedAreas.m2 && <p>Square Meters: {convertedAreas.m2} m²</p>}
                {convertedAreas.cm2 && <p>Square Centimeters: {convertedAreas.cm2} cm²</p>}
                {convertedAreas.mm2 && <p>Square Millimeters: {convertedAreas.mm2} mm²</p>}
                {convertedAreas.km2 && <p>Square Kilometers: {convertedAreas.km2} km²</p>}
                {convertedAreas.ft2 && <p>Square Feet: {convertedAreas.ft2} ft²</p>}
                {convertedAreas.yd2 && <p>Square Yards: {convertedAreas.yd2} yd²</p>}
                {convertedAreas.mi2 && <p>Square Miles: {convertedAreas.mi2} mi²</p>}
            </div>
        </div>
    );
}

export default AreaConverter;
