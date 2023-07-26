
export const getColor = (stablecoinId) => {
    switch (stablecoinId) {
        case 1:
            return '#8884d8'; // USDT color
        case 2:
            return '#82ca9d'; // USDC color
        case 16:
            return '#ffc658'; // PAI color
        case 64:
            return '#ff00ff'; // UXD color
        case 65:
            return '#0000ff'; // USDH color
        case 36:
            return '#00ffff'; // USDR color
        case 111:
            return '#ff0000'; // DAI color
        case 57:
            return '#008000'; // USH color
        case 24:
            return '#ffa500'; // CUSD color
        case 3:
            return '#800080'; // USTC color
        case 4:
            return '#a52a2a'; // BUSD color
        case 6:
            return '#000000'; // FRAX color
        case 35:
            return '#ff0000'; // MAI color
        case 55:
            return '#0000ff'; // AGEUR color
        case 27:
            return '#008000'; // USDK color
        case 52:
            return '#ffa500'; // CEUR color
        case 24:
            return '#800080'; // CUSD color
        case 17:
            return '#a52a2a'; // HUSD color
        default:
            return '#000000'; // Default color
    }
};
