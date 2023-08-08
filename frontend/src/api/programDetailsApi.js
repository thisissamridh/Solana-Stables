import axios from 'axios';

const BASE_URL = 'https://public-api.solscan.io/account/';

export const fetchProgramDetails = async (address) => {
    try {
        const response = await axios.get(`${BASE_URL}${address}`, {
            headers: {
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2ODgyMjE5NDU5NDMsImVtYWlsIjoic2FtcmlkaHNpbmdoaW5kQGdtYWlsLmNvbSIsImFjdGlvbiI6InRva2VuLWFwaSIsImlhdCI6MTY4ODIyMTk0NX0.tWGXAKiFSQQlm2xRi_0WZOwjGqFQ49j678cWzWgV37Y'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching program details:', error);
        return null;
    }
};
