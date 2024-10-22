import React, { useState } from 'react';
import './LengthConverter.css';

function LengthConverter() {
    const [length, setLength] = useState('');
    const [unit, setUnit] = useState('mm');
    const [convertedLengths, setConvertedLengths] = useState({});

    const convertLength = () => {
        const value = parseFloat(length);
        if (isNaN(value)) return;

        const conversions = {
            mm: value,
            cm: value / 10,
            m: value / 1000,
            km: value / 1000000,
            ft: value / 304.8, // 1 foot = 304.8 mm
            yd: value / 914.4, // 1 yard = 914.4 mm
            in: value / 25.4,  // 1 inch = 25.4 mm
            mi: value / 1609344 // 1 mile = 1,609,344 mm
        };

        // Convert based on the selected unit
        const converted = {};
        for (const [key, conversionFactor] of Object.entries(conversions)) {
            converted[key] = conversionFactor * (unit === 'mm' ? 1 : conversions[unit]);
        }

        setConvertedLengths(converted);
    };

    const clearFields = () => {
        setLength('');
        setUnit('mm');
        setConvertedLengths({});
    };

    return (
        <div className="length-converter-container">
            <h1>Length Converter</h1>
            <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
                className="length-input"
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="unit-select">
                <option value="mm">Millimeters (mm)</option>
                <option value="cm">Centimeters (cm)</option>
                <option value="m">Meters (m)</option>
                <option value="km">Kilometers (km)</option>
                <option value="ft">Feet (ft)</option>
                <option value="yd">Yards (yd)</option>
                <option value="in">Inches (in)</option>
                <option value="mi">Miles (mi)</option>
            </select>
            <button onClick={convertLength} className="convert-button">Convert</button>
            <button onClick={clearFields} className="clear-button">Clear</button>
            <div className="converted-lengths">
                <h2>Converted Lengths:</h2>
                <p>{convertedLengths.mm !== undefined && `Millimeters: ${convertedLengths.mm.toFixed(2)} mm`}</p>
                <p>{convertedLengths.cm !== undefined && `Centimeters: ${convertedLengths.cm.toFixed(2)} cm`}</p>
                <p>{convertedLengths.m !== undefined && `Meters: ${convertedLengths.m.toFixed(2)} m`}</p>
                <p>{convertedLengths.km !== undefined && `Kilometers: ${convertedLengths.km.toFixed(2)} km`}</p>
                <p>{convertedLengths.ft !== undefined && `Feet: ${convertedLengths.ft.toFixed(2)} ft`}</p>
                <p>{convertedLengths.yd !== undefined && `Yards: ${convertedLengths.yd.toFixed(2)} yd`}</p>
                <p>{convertedLengths.in !== undefined && `Inches: ${convertedLengths.in.toFixed(2)} in`}</p>
                <p>{convertedLengths.mi !== undefined && `Miles: ${convertedLengths.mi.toFixed(2)} mi`}</p>
            </div>
        </div>
    );
}

export default LengthConverter;
