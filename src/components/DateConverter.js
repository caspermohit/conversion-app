import React, { useState } from 'react';
import moment from 'moment';
import 'moment-hijri'; // for Islamic calendar
import NepaliDateConverter from 'nepali-date-converter'; 
// Import the default export
import './DateConverter.css';

console.log('NepaliDateConverter:', NepaliDateConverter);

const CalendarConverter = () => {
    const [gregorianDate, setGregorianDate] = useState('');
    const [targetCalendar, setTargetCalendar] = useState('');
    const [convertedDate, setConvertedDate] = useState('');

    const handleDateChange = (e) => {
        setGregorianDate(e.target.value);
    };

    const handleTargetCalendarChange = (e) => {
        setTargetCalendar(e.target.value);
    };

    const convertDate = () => {
        const date = moment(gregorianDate);

        let result;
        switch (targetCalendar) {
            case 'nepali':
                try {
                    const nepaliDate = new NepaliDateConverter(date.toDate());
                    // Define Nepali month names
                    const nepaliMonths = [
                        'Baisakh', 'Jestha', 'Ashadh', 'Shrawan',
                        'Bhadra', 'Ashwin', 'Kartik', 'Mangsir',
                        'Poush', 'Magh', 'Falgun', 'Chaitra'
                    ];
                    
                    // Get the BS date details
                    const bsDate = nepaliDate.getBS();
                   
                    const monthName = nepaliMonths[bsDate.month ];
                    
                    result = `${bsDate.date} ${monthName} ${bsDate.year} BS`;
                    break;
                } catch (error) {
                    console.error('Nepali calendar conversion error:', error);
                    result = 'Date out of supported range';
                    break;
                }
            case 'hebrew':
                result = date.format('jD jMMMM jYYYY');
                break;
            case 'islamic':
                const islamicDay = date.format('iD');
                const islamicMonth = date.format('iMMMM');
                const islamicYear = date.format('iYYYY');
                result = `${islamicDay} ${islamicMonth} ${islamicYear}AH`;
                break;
            case 'japanese':
                result = date.format('YYYY [Japanese Imperial]');
                break;
            case 'buddhist':
                result = date.clone().add(543, 'years').format('YYYY-MM-DD');
                break;
            default:
                result = 'Invalid target calendar';
        }

        setConvertedDate(result);
    };

    const clearForm = () => {
        setGregorianDate('');
        setTargetCalendar('');
        setConvertedDate('');
    };

    return (
        <div className="date-converter-container">
            <h1>Gregorian to Other Calendars Converter (beta)</h1>
            <input
                type="date"
                value={gregorianDate}
                onChange={handleDateChange}
                placeholder="Enter Gregorian date"
            />
            <select value={targetCalendar} onChange={handleTargetCalendarChange}>
                <option value="">Select target calendar</option>
                <option value="nepali">Nepali</option>
                <option value="hebrew">Hebrew</option>
                <option value="islamic">Islamic</option>
                <option value="japanese">Japanese Imperial</option>
                <option value="buddhist">Buddhist</option>
            </select>
            <div className="button-container">
                <button onClick={convertDate}>Convert</button>
                <button onClick={clearForm} className="clear-button">Clear</button>
            </div>
            {convertedDate && <div>Converted Date: {convertedDate}</div>}
        </div>
    );
};

export default CalendarConverter;
