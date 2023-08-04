import axios from "axios";

const fetchTopHolders = async (tokenAddress, offset, size) => {
    try {
        const response = await axios.get(
            `https://api.solscan.io/token/holders?token=${tokenAddress}&offset=${offset}&size=${size}`
        );

        const data = response.data;
        return data;

    } catch (error) {

        console.error('Error:', error);
        throw error;
    }

};

export { fetchTopHolders };