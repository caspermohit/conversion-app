import React, { useState } from 'react';
import './HoursCalculator.css';

function HoursCalculator() {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [breakTime, setBreakTime] = useState(0);
    const [payRate, setPayRate] = useState(0);
    const [taxRate, setTaxRate] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [totalPay, setTotalPay] = useState(0);

    const calculateHours = () => {
        const start = new Date(`1970-01-01T${startTime}:00`);
        let end = new Date(`1970-01-01T${endTime}:00`);

        if (end < start) {
            end.setDate(end.getDate() + 1);
        }

        const hoursWorked = (end - start) / 3600000 - breakTime / 60;

        if (hoursWorked < 0) {
            setTotalHours(0);
            setTotalPay(0);
        } else {
            setTotalHours(hoursWorked);
            setTotalPay(hoursWorked * payRate * (1 - taxRate / 100));
        }
    };

    const clearFields = () => {
        setStartTime('');
        setEndTime('');
        setBreakTime(0);
        setPayRate(0);
        setTaxRate(0);
        setTotalHours(0);
        setTotalPay(0);
    };

    return (
        <div className="hours-calculator-container">
            <h1>Hours Calculator</h1>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="Start Time" />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="End Time" />
            <input type="number" value={breakTime} onChange={(e) => setBreakTime(e.target.value)} placeholder="Break (minutes)" />
            <input type="number" value={payRate} onChange={(e) => setPayRate(e.target.value)} placeholder="Pay Rate" />
            <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} placeholder="Tax Rate (%)" />
            <button onClick={calculateHours}>Calculate</button>
            <button onClick={clearFields}>Clear</button>
            <div className="total">Total Hours: {totalHours.toFixed(2)} hours</div>
            <div className="total">Total Pay: ${totalPay.toFixed(2)}</div>
        </div>
    );
}

export default HoursCalculator;
