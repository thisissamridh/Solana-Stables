import axios from 'axios';
const fetchAmmData = async (tokenAddress) => {
    try {
        const response = await axios.get(`https://api.solscan.io/amm/market?address=${tokenAddress}&sort_by=liquidity&sort_type=desc`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching token meta for token: ${tokenAddress}`, error);
        return null;
    }
}

export { fetchAmmData };

