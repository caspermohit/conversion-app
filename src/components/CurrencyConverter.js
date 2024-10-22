import React, { useEffect, useState } from 'react';
import { fetchCurrencyRates } from '../components/services/currencyService';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const getRates = async () => {
            const rates = await fetchCurrencyRates();
            setRates(rates);
        };
        getRates();
    }, []);

    const convertCurrency = () => {
        const rate = rates[toCurrency] / rates[fromCurrency];
        setConvertedAmount(amount * rate);
    };

    return (
        <div className="currency-converter-container">
            <h2>Currency Converter</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <span> to </span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <button onClick={convertCurrency}>Convert</button>
            <h3 className="converted-amount">Converted Amount: {convertedAmount.toFixed(2)}</h3>
        </div>
    );
};

export default CurrencyConverter;
