import React, { createContext, useEffect, useState } from 'react';
import { fetchStablecoinData } from '../api/marketCapApi';
import CoinId from '../utils/coinId';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const stablecoinsID = CoinId;

    const [individualCoinMcpData, setIndividualCoinMcpData] = useState([]);
    const [totalMarketCap, setTotalMarketCap] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = stablecoinsID.map(stablecoin => fetchStablecoinData(stablecoin.id));
                const results = await Promise.all(promises);
                const combinedData = results.reduce((acc, curr) => {
                    curr.forEach(entry => {
                        const existingEntryIndex = acc.findIndex(accEntry => accEntry.date === entry.date);
                        if (existingEntryIndex > -1) {
                            acc[existingEntryIndex] = { ...acc[existingEntryIndex], ...entry };
                        } else {
                            acc.push(entry);
                        }
                    });
                    return acc;
                }, []);

                const labeledData = combinedData.map(entry => {
                    const labeledEntry = { date: entry.date };
                    stablecoinsID.forEach((stablecoin, index) => {
                        labeledEntry[stablecoin.name] = entry[stablecoin.id];
                    });
                    return labeledEntry;
                });

                setIndividualCoinMcpData(labeledData);

                // Calculate the total market cap by summing up all the coin's market caps
                const sumMarketCap = labeledData.reduce((total, entry) => {
                    return total + Object.values(entry).reduce((sum, val) => (typeof val === 'number' ? sum + val : sum), 0);
                }, 0);

                setTotalMarketCap(sumMarketCap);
            } catch (error) {
                console.error('Error fetching individualCoinMcpData:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ individualCoinMcpData, stablecoinsID, totalMarketCap }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
