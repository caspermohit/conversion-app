import React, { useState } from 'react';
import './DateConverter.css';

// Step 1: Define the calendar systems and conversion logic
const calendars = {
    Gregorian: {
        toLunar: (date) => {
            // Placeholder conversion logic from Gregorian to Lunar
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
        toHebrew: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
        // Add more conversions as needed
    },
    Lunar: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
        // Add more conversions as needed
    },
    Hebrew: {
        toGregorian: (date) => {
            // Example conversion logic for Hebrew to Gregorian
            // Replace with actual conversion logic
            return new Date(date).toLocaleDateString(); // Placeholder
        },
    },
    Haab: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Incan: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Pawukon: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Tonalpohualli: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Tzolkin: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    // Additional calendars
    ChulaSakarat: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    ThaiLunar: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Jalali: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    NepalSambat: {
        toGregorian: (date) => {
            // Define the names of the Nepali months
            const nepaliMonths = [
                "कात्तिक", "मार्गशीर्ष", "पौष", "माघ", "फागुन", "चैत", 
                "बैशाख", "ज्येष्ठ", "आषाढ", "साउन", "भाद्र", "आश्विन"
            ];

            // Convert a Gregorian date to Nepal Sambat date
            const gregorianDate = new Date(date);
            const year = gregorianDate.getFullYear();
            const month = gregorianDate.getMonth(); // 0-11
            const day = gregorianDate.getDate();

            // Basic conversion logic (this is a simplified example)
            // Nepal Sambat is approximately 57 years ahead
            const nepaliYear = year + 57;

            // Adjust month and day based on the specific rules of Nepal Sambat
            let nepaliMonth = month + 1; // Adjust for 1-based month
            let nepaliDay = day; // This may need adjustment based on the month

            // Example adjustment for specific months
            if (month === 0 && day < 15) { // January
                nepaliMonth = 10; // Kattik
                nepaliDay = day + 15; // Adjust day
            } else if (month === 0) { // January
                nepaliMonth = 11; // Mangsir
            } else if (month === 1) { // February
                nepaliMonth = 12; // Poush
            } // Add more conditions for other months

            // Return the formatted Nepal Sambat date
            return `${nepaliDay} ${nepaliMonths[nepaliMonth - 1]} ${nepaliYear}`;
        },
    },
    Zoroastrian: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Coptic: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Islamic: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Chinese: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Vietnamese: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    IndianNational: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Julian: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    FrenchRepublican: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Korean: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Armenian: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Ethiopian: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Igbo: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Berber: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Tibetan: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Japanese: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Minguo: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Badí: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Discordian: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    SeasonalInstruction: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    WorldCalendar: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    Holocene: {
        toGregorian: (date) => {
            return new Date(date).toLocaleDateString(); // Replace with actual logic
        },
    },
    // Add more calendars as needed...
};

const DateConverter = () => {
    // Step 2: Add state to manage the input date and selected calendars
    const [inputDate, setInputDate] = useState('');
    const [convertedDate, setConvertedDate] = useState('');
    const [sourceCalendar, setSourceCalendar] = useState('Gregorian');
    const [targetCalendar, setTargetCalendar] = useState('Lunar');
    const [error, setError] = useState('');

    // Step 3: Implement a function to convert the date
    const convertDate = () => {
        if (!inputDate) {
            setError('Please enter a date.');
            setConvertedDate('');
            return;
        }

        const date = new Date(inputDate);
        if (isNaN(date)) {
            setError('Invalid date format. Please select a valid date.');
            setConvertedDate('');
            return;
        }

        let converted;
        if (sourceCalendar === 'Gregorian' && targetCalendar === 'Lunar') {
            converted = calendars.Gregorian.toLunar(inputDate);
        } else if (sourceCalendar === 'Lunar' && targetCalendar === 'Gregorian') {
            converted = calendars.Lunar.toGregorian(inputDate);
        } else if (sourceCalendar === 'Hebrew' && targetCalendar === 'Gregorian') {
            converted = calendars.Hebrew.toGregorian(inputDate);
        } else if (sourceCalendar === 'NepalSambat' && targetCalendar === 'Gregorian') {
            converted = calendars.NepalSambat.toGregorian(inputDate);
        }
        // Add more conversion cases as needed

        setConvertedDate(converted || 'Conversion not supported.');
    }; 
    const clearFields = () => {
        setInputDate('');
        setConvertedDate('');
        setError('');
        setSourceCalendar('Gregorian');
        setTargetCalendar('Lunar');
    };

    // Function to get target calendars based on the selected source calendar
    const getTargetCalendars = () => {
        return Object.keys(calendars).filter(calendar => 
            calendar !== sourceCalendar // Exclude the source calendar from target options
        );
    };

    return (
        <div className="date-converter-container">
            <h1>Date Converter</h1>
            <input 
                type="date" 
                value={inputDate} 
                onChange={(e) => setInputDate(e.target.value)} 
            />
            <select onChange={(e) => setSourceCalendar(e.target.value)}>
                {Object.keys(calendars).map(calendar => (
                    <option key={calendar} value={calendar}>{calendar}</option>
                ))}
            </select>
            <select onChange={(e) => setTargetCalendar(e.target.value)}>
                {getTargetCalendars().map(calendar => ( // Use the filtered target calendars
                    <option key={calendar} value={calendar}>{calendar}</option>
                ))}
            </select>
            <button onClick={convertDate}>Convert Date</button>
            <button onClick={clearFields}>Clear</button>
            {error && <p className="error">{error}</p>}
            <p>Converted Date: {convertedDate}</p>
        </div>
    );
};

export default DateConverter;
