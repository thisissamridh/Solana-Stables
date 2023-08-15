import axios from 'axios';

const fetchStats = async (mint) => {
    const url = "https://rest-api.hellomoon.io/v0/token/stats";




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
                    Authorization: `Bearer ${process.env.REACT_APP_MOON}`, // Please replace <your_token> with your actual token
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




