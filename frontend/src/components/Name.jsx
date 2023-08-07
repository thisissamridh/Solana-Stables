


import React, { useState } from 'react';

const Name = ({ selectedStablecoin, onSelectStablecoin }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const stablecoins = ['USDT', 'USDC', 'PAI', 'UXD', 'USDH', 'USDR', 'DAI', 'USH', 'CUSD', 'USTC', 'BUSD', 'FRAX', 'MAI', 'AGEUR', 'USDK', 'CEUR', 'CUSD', 'HUSD']; // other coin names

    const handleStablecoinSelect = (stablecoin) => {
        onSelectStablecoin(stablecoin);
        setShowDropdown(false);
    };

    return (
        <header className="bg-discount-gradient feature-card:hover rounded-lg shadow-lg p-4 flex justify-between items-center scrollbar-hide">
            <h1 className="text-white text-2xl font-bold text-gradient">
                {selectedStablecoin} Stablecoin Analysis
            </h1>
            <div className="relative">
                <button className="bg-black-gradient text-white p-4 rounded-md font-semibold" onClick={() => setShowDropdown(!showDropdown)}>
                    Select Stablecoin
                </button>
                {showDropdown && (
                    <div className="absolute top-full right-0 mt-2 bg-black-gradient rounded-md shadow-lg py-2 z-10 max-h-64 overflow-y-auto"> {/* Added max-height and overflow */}
                        {stablecoins.map((stablecoin) => (
                            <button
                                key={stablecoin}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                                onClick={() => handleStablecoinSelect(stablecoin)}
                            >
                                {stablecoin}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Name;
