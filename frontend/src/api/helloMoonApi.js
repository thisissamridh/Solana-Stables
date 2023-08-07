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
                    Authorization: `Bearer 54c679f3-a269-412b-a1de-89df102c9c28`, // Please replace <your_token> with your actual token
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




