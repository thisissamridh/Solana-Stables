// // https://pro-api.solscan.io/v1.0/public/wallet/distribution/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB




// const fetchwalletDisdata = async (tokenAddress) => {
//     try {
//         const response = await fetch(
//             `https://pro-api.solscan.io/v1.0/public/wallet/distribution/token/${tokenAddress}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                     'User-Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
//                 },
//             }
//         );


//         const data = await response.json();
//         console.log('Data:', data);



//     } catch (error) {
//         console.error('Error:', error);
//         throw error;

//     }
// };


// fetchwalletDisdata('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')

// export { fetchwalletDisdata }


// Import the Axios library
import axios from 'axios';

const fetchwalletDisdata = async (tokenAddress) => {
    try {
        const response = await axios.get(
            `https://pro-api.solscan.io/v1.0/public/wallet/distribution/token/${tokenAddress}`
        );

        const data = response.data;
        return data; // Return the data instead of logging it.
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export { fetchwalletDisdata };

