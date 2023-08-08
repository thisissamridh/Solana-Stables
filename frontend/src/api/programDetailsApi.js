import axios from 'axios';

const BASE_URL = 'https://public-api.solscan.io/account/';

export const fetchProgramDetails = async (address) => {
    try {
        const response = await axios.get(`${BASE_URL}${address}`, {
            headers: {
                'token': `${process.env.REACT_APP_SCAN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching program details:', error);
        return null;
    }
};
