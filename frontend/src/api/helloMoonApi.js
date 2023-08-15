import axios from 'axios';

const fetchStats = async (mint) => {
    const url = "https://rest-api.hellomoon.io/v0/token/stats";
    const key = "Bearer " + process.env.REACT_APP_HELLO;

    try {
        const { data } = await axios.post(
            url,
            {
                "mint": mint,
                "granularity": "ONE_DAY"
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: key, // Please replace <your_token> with your actual token
                },
            }
        );

        return data;
    } catch (error) {
        console.error(`Failed to fetch  stats: ${error.message}`);
        return null;
    }
};

export { fetchStats };




