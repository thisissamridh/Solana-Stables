

const fetchHolderData = async (tokenAddress) => {
    try {
        const response = await fetch(
            `https://api.solscan.io/token/holder/statistic/total?tokenAddress=${tokenAddress}&cluster=${cluster}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
                },
            }
        );


        const data = await response.json();
        console.log('Data:', data);


        const TotalHolders = data.data.data.totalHolders;
        const activeHolders = data.data.data.activeHolders;

        return { TotalHolders, activeHolders };

    } catch (error) {
        console.error('Error:', error);
        throw error;

    }
};


export { fetchHolderData };