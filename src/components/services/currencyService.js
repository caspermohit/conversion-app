import axios from 'axios';

const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API

export const fetchCurrencyRates = async () => {
    const response = await axios.get(API_URL);
    return response.data.rates;
};
