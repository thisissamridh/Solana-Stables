// Helper function to format numbers in millions (M) or billions (B)
const formatNumber = (value) => {
    if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toFixed(2)}B`;
    } else if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
        return `${(value / 1_000).toFixed(2)}K`;
    } else {
        return value;
    }
};

export default formatNumber;


// const formatNumber = (value) => {
//     const absValue = Math.abs(value);
//     const suffixes = ['', 'K', 'M', 'B', 'T'];

//     const suffixIndex = Math.floor(Math.log10(absValue) / 3);
//     const shortValue = (value / Math.pow(1000, suffixIndex)).toFixed(1);

//     return `${shortValue}${suffixes[suffixIndex]}`;
// };

// export default formatNumber;