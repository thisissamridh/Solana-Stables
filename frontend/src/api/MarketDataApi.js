import axios from 'axios';

const fetchMarketData = async (coinAddress) => {
    try {
        const response = await axios.get(`https://api.solscan.io/market?tokenAddress=${coinAddress}&cluster=`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching market data for coin: ${coinAddress}`, error);
        return null;
    }
};

export { fetchMarketData };
