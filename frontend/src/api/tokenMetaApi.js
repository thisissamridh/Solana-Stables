const fetchTokenMeta = async (tokenAddress) => {
    try {
        const response = await axios.get(`https://api.solscan.io/token/meta?token=${tokenAddress}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching token meta for token: ${tokenAddress}`, error);
        return null;
    }
}

export { fetchTokenMeta };

