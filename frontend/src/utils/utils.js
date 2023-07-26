export const getColor = (stablecoinId) => {
    switch (stablecoinId) {
        case 1:
            return '#8884d8'; // USDT color (Blue)
        case 2:
            return '#82ca9d'; // USDC color (Green)
        case 16:
            return '#ffc658'; // PAI color (Yellow)
        case 64:
            return '#ff00ff'; // UXD color (Magenta)
        case 65:
            return '#0000ff'; // USDH color (Blue)
        case 36:
            return '#00ffff'; // USDR color (Cyan)
        case 111:
            return '#ff0000'; // DAI color (Red)
        case 57:
            return '#008000'; // USH color (Green)
        case 24:
            return '#ffa500'; // CUSD color (Orange)
        case 3:
            return '#800080'; // USTC color (Purple)
        case 4:
            return '#a52a2a'; // BUSD color (Brown)
        case 6:
            return '#808080'; // FRAX color (white) // hex for gray is #808080
        case 35:
            return '#ff0000'; // MAI color (Red)
        case 55:
            return '#0000ff'; // AGEUR color (Blue)
        case 27:
            return '#008000'; // USDK color (Green)
        case 52:
            return '#f700ff'; // CEUR color (Pink)
        case 96:
            return '#f00c23'; // CUSD color (Red)
        case 17:
            return '#a52a2a'; // HUSD color (Brown)
        default:
            return '#000000'; // Default color (Black)
    }
};
