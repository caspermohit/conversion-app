import React, { useState } from 'react';
import './WeightConverter.css'; // Import the CSS file

function WeightConverter() {
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('g');
    const [convertedWeights, setConvertedWeights] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const convertWeight = () => {
        const value = parseFloat(weight);
        if (isNaN(value) || weight.trim() === '') {
            setErrorMessage('Please enter a valid weight.');
            setConvertedWeights({});
            return;
        }

        const conversions = {
            mg: 1,
            g: 1000,
            kg: 1000000,
            oz: 28349.5, // 1 oz = 28,349.5 mg
            lb: 453592, // 1 lb = 453,592 mg
            ton: 907184740 // 1 ton = 907,184,740 mg
        };

        // Convert based on the selected unit
        const baseValueInMg = value * conversions[unit];
        const converted = {};
        for (const [key, conversionFactor] of Object.entries(conversions)) {
            converted[key] = baseValueInMg / conversionFactor;
        }

        setConvertedWeights({
            mg: converted.mg.toFixed(2),
            g: converted.g.toFixed(2),
            kg: converted.kg.toFixed(6),
            oz: converted.oz.toFixed(2),
            lb: converted.lb.toFixed(6),
            ton: converted.ton.toFixed(8),
        });
        setErrorMessage(''); // Clear any previous error messages
    };

    const clearFields = () => {
        setWeight('');
        setUnit('g');
        setConvertedWeights({});
        setErrorMessage(''); // Clear error message on clear
    };

    return (
        <div className="weight-converter-container">
            <h1 className="converter-title">Weight Converter</h1>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="weight-input"
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="unit-select">
                <option value="mg">Milligrams (mg)</option>
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="oz">Ounces (oz)</option>
                <option value="lb">Pounds (lb)</option>
                <option value="ton">Tons</option>
            </select>
            <button onClick={convertWeight} className="convert-button">Convert</button>
            <button onClick={clearFields} className="clear-button">Clear</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="converted-weights">
                {convertedWeights.mg && <p>Milligrams: {convertedWeights.mg} mg</p>}
                {convertedWeights.g && <p>Grams: {convertedWeights.g} g</p>}
                {convertedWeights.kg && <p>Kilograms: {convertedWeights.kg} kg</p>}
                {convertedWeights.oz && <p>Ounces: {convertedWeights.oz} oz</p>}
                {convertedWeights.lb && <p>Pounds: {convertedWeights.lb} lb</p>}
                {convertedWeights.ton && <p>Tons: {convertedWeights.ton} ton</p>}
            </div>
        </div>
    );
}

export default WeightConverter;
