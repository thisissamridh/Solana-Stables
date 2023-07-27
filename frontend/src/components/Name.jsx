import React, { useState } from 'react';

const Name = () => {
    // State for the selected stablecoin
    const [selectedStablecoin, setSelectedStablecoin] = useState('USDC');

    // State for the dropdown menu visibility
    const [showDropdown, setShowDropdown] = useState(false);

    // List of stablecoins to choose from
    const stablecoins = ['USDC', 'Tether', 'DAI', 'Binance USD', 'Paxos Standard'];

    // Handle stablecoin selection
    const handleStablecoinSelect = (stablecoin) => {
        setSelectedStablecoin(stablecoin);
        setShowDropdown(false);
    };

    return (
        <header className="bg-discount-gradient feature-card:hover rounded-lg shadow-lg p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">
                {selectedStablecoin} Stablecoin Analysis
            </h1>
            <div className="relative">
                <button className="bg-black-gradient text-white p-4 rounded-md" onClick={() => setShowDropdown(!showDropdown)}>
                    Select Stablecoin
                </button>
                {showDropdown && (
                    <div className="absolute top-full right-0 mt-2 bg-black-gradient rounded-md shadow-lg py-2 z-10">
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
