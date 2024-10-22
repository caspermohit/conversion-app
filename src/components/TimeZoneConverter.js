import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import moment from 'moment-timezone';
import './TimeZoneConverter.css'; // Import the CSS file

function TimeZoneConverter() {
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [time, setTime] = useState('');
    const [coordinates, setCoordinates] = useState([51.505, -0.09]); // Default to London
    const [marker, setMarker] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async () => {
        if (!location) {
            setErrorMessage('Please enter a location.');
            return;
        }

        try {
            const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${location.toLowerCase().replace(/\s+/g, '-')}/`);
            const { timezone, latlon } = response.data._embedded['ua:scores'];
            setTimezone(timezone);
            setCoordinates([latlon.latitude, latlon.longitude]);
            setMarker(location);
            setErrorMessage('');
            updateTime();
        } catch (error) {
            setErrorMessage('Location not found. Please try again.');
        }
    };

    const updateTime = useCallback(() => {
        if (timezone) {
            const currentTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
            setTime(currentTime);
        }
    }, [timezone]);

    useEffect(() => {
        const interval = setInterval(updateTime, 1000); // Update time every second
        return () => clearInterval(interval);
    }, [updateTime]);

    return (
        <div className="timezone-converter-container"> {/* Single container for the entire component */}
            <h1>Time Zone Converter</h1>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
            />
            <button onClick={handleSearch}>Search</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {timezone && <h2>Current Time in {location}: {time}</h2>}
            <div className="map-container"> {/* Fixed box for the map */}
                <MapContainer center={coordinates} zoom={13} className="map">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {marker && (
                        <Marker position={coordinates}>
                            <Popup>{marker}</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
}

export default TimeZoneConverter;
