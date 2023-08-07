import axios from "axios";

const fetchTransferData = async (tokenAddress, type, offset, limit) => {
    try {
        const response = await axios.get(`https://api.solscan.io/transfer/token?token_address=${tokenAddress}&type=${type}&offset=${offset}&limit=${limit}`);
        // console.log("tokenaddress", tokenAddress, "type", type, "offset", offset, "limit", limit);

        // console.log("token api se", response.data);
        return response.data;

    } catch (error) {

        console.error(`Error fetching token meta for token: ${tokenAddress}`, error);
        return null;
    }

}

export { fetchTransferData };