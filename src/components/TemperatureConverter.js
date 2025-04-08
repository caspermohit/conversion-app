import React, { useState } from 'react';
import './TemperatureConverter.css'; // Import the CSS file

function TemperatureConverter() {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('C');
    const [convertedTemperatures, setConvertedTemperatures] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const convertTemperature = () => {
        const value = parseFloat(temperature);
        
        // Check for empty input or invalid number
        if (temperature.trim() === '') {
            setErrorMessage('Please enter a temperature value.');
            setConvertedTemperatures({});
            return;
        } else if (isNaN(value)) {
            setErrorMessage('Invalid temperature value. Please enter a number.');
            setConvertedTemperatures({});
            return;
        }

        setErrorMessage(''); // Clear any previous error messages

        let celsius, kelvin, fahrenheit;

        // Convert to Celsius
        if (unit === 'C') {
            celsius = value;
        } else if (unit === 'K') {
            celsius = value - 273.15;
        } else if (unit === 'F') {
            celsius = (value - 32) * 5 / 9;
        }

        // Convert to Kelvin
        kelvin = celsius + 273.15;

        // Convert to Fahrenheit
        fahrenheit = (celsius * 9 / 5) + 32;

        setConvertedTemperatures({
            C: celsius,
            K: kelvin,
            F: fahrenheit,
        });
    };

    const clearFields = () => {
        setTemperature('');
        setUnit('C');
        setConvertedTemperatures({});
        setErrorMessage(''); // Clear error message on clear
    };

    return (
        <div className="temperature-converter-container">
            <h1>Temperature Converter</h1>
            <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="C">Celsius (°C)</option>
                <option value="K">Kelvin (K)</option>
                <option value="F">Fahrenheit (°F)</option>
            </select>
            <button onClick={convertTemperature}className="convert-button">Convert</button>
            <button onClick={clearFields} className="clear-button">Clear</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="converted-temperatures">
                <h2>Converted Temperatures:</h2>
                {convertedTemperatures.C !== undefined && `Celsius: ${convertedTemperatures.C.toFixed(2)} °C`}
                <br />
                {convertedTemperatures.K !== undefined && `Kelvin: ${convertedTemperatures.K.toFixed(2)} K`}
                <br />
                {convertedTemperatures.F !== undefined && `Fahrenheit: ${convertedTemperatures.F.toFixed(2)} °F`}
            </div>
        </div>
    );
}

export default TemperatureConverter;
