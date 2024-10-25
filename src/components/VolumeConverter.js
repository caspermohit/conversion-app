import React, { useState } from 'react';
import './VolumeConverter.css'; // Import the CSS file

function VolumeConverter() {
    const [volume, setVolume] = useState('');
    const [unit, setUnit] = useState('ml');
    const [convertedVolumes, setConvertedVolumes] = useState({});

    const convertVolume = () => {
        const value = parseFloat(volume);
        if (isNaN(value) || volume.trim() === '') {
            setConvertedVolumes({ error: 'Please enter a valid volume.' });
            return;
        }

        const conversions = {
            ml: 1,
            l: 1000,
            kl: 1000000,
            cm3: 1, // 1 ml = 1 cm³
            'fl. oz.': 29.5735, // 1 fl. oz. = 29.5735 ml
            gal: 3785.41, // 1 gal = 3785.41 ml
            pt: 473.176 // 1 pt = 473.176 ml
        };

        // Convert based on the selected unit
        const baseValueInMl = value * conversions[unit];
        const converted = {};
        for (const [key, conversionFactor] of Object.entries(conversions)) {
            converted[key] = baseValueInMl / conversionFactor;
        }

        setConvertedVolumes({
            ml: converted.ml.toFixed(2),
            l: converted.l.toFixed(2),
            kl: converted.kl.toFixed(6),
            cm3: converted.cm3.toFixed(2),
            'fl. oz.': converted['fl. oz.'].toFixed(2),
            gal: converted.gal.toFixed(6),
            pt: converted.pt.toFixed(6),
        });
    };

    const clearFields = () => {
        setVolume('');
        setUnit('ml');
        setConvertedVolumes({});
    };

    return (
        <div className="volume-converter-container">
            <h1 className="converter-title">Volume Converter</h1>
            <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="Enter volume"
                className="volume-input"
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="unit-select">
                <option value="ml">Millilitres (ml)</option>
                <option value="l">Litres (l)</option>
                <option value="kl">Kilolitres (kl)</option>
                <option value="cm3">Cubic Centimetres (cm³)</option>
                <option value="fl. oz.">Fluid Ounces (fl. oz.)</option>
                <option value="gal">Gallons (gal)</option>
                <option value="pt">Pints (pt)</option>
            </select>
            <button onClick={convertVolume} className="convert-button">Convert</button>
            <button onClick={clearFields} className="clear-button">Clear</button>
            {convertedVolumes.error && <p className="error-message">{convertedVolumes.error}</p>}
            <div className="converted-volumes">
                {convertedVolumes.ml && <p>Millilitres: {convertedVolumes.ml} ml</p>}
                {convertedVolumes.l && <p>Litres: {convertedVolumes.l} l</p>}
                {convertedVolumes.kl && <p>Kilolitres: {convertedVolumes.kl} kl</p>}
                {convertedVolumes.cm3 && <p>Cubic Centimetres: {convertedVolumes.cm3} cm³</p>}
                {convertedVolumes['fl. oz.'] && <p>Fluid Ounces: {convertedVolumes['fl. oz.']} fl. oz.</p>}
                {convertedVolumes.gal && <p>Gallons: {convertedVolumes.gal} gal</p>}
                {convertedVolumes.pt && <p>Pints: {convertedVolumes.pt} pt</p>}
            </div>
        </div>
    );
}

export default VolumeConverter;
