// api.js
import axios from 'axios';

const fetchStablecoinData = async (stablecoinId) => {
    try {
        console.log(`Fetching data for stablecoin with ID: ${stablecoinId}`);

        const response = await axios.get(`https://stablecoins.llama.fi/stablecoincharts/solana?stablecoin=${stablecoinId}`);
        //for debugging
        console.log(`Data fetched successfully for stablecoin with ID: ${stablecoinId}`);

        const formattedData = response.data.map(entry => ({
            date: new Date(entry.date * 1000).toISOString().split('T')[0],
            [stablecoinId]: entry.totalCirculating.peggedUSD,
        }));
        return formattedData;
    } catch (error) {
        console.error(`Error fetching data for stablecoin with ID ${stablecoinId}: at api.js`, error);
        throw error; // Re-throw the error to handle it at a higher level if needed.
    }
};

export { fetchStablecoinData };