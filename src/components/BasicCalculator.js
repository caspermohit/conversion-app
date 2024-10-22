// Basic Calculator Component
import React, { useState } from 'react';
import './BasicCalculator.css'; // Import the CSS file

const BasicCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]); // State to store history

    const calculateResult = () => {
        try {
            // Evaluate the expression
            const evalResult = eval(input); // Use eval with caution
            setResult(evalResult);
            // Update history
            setHistory([...history, `${input} = ${evalResult}`]);
            setInput(''); // Clear input after calculation
        } catch (error) {
            setResult('Error');
        }
    };

    const clearAll = () => {
        setInput(''); // Clear the input
        setResult(''); // Clear the result
    };

    const clearHistory = () => {
        setHistory([]); // Clear the history
    };

    return (
        <div className="calculator">
            <h2>Basic Calculator</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter expression"
            />
            <button onClick={calculateResult}>Calculate</button>
            <button onClick={clearAll}>Clear</button> {/* Update to clear all */}
            <h3>Result: {result}</h3>

            <h3>History</h3>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
            <button onClick={clearHistory}>Clear History</button>
        </div>
    );
};

export default BasicCalculator; // Default export
