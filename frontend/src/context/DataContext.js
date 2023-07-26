import React, { createContext, useEffect, useState } from 'react';
import { fetchStablecoinData } from '../api/api';
import CoinId from '../utils/coinId';
const DataContext = createContext();

const DataProvider = ({ children }) => {
    const stablecoinsID = CoinId

    const [individualCoinMcpData, setindividualCoinMcpData] = useState([]);

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

                setindividualCoinMcpData(labeledData);
            } catch (error) {
                console.error('Error fetching individualCoinMcpData:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ individualCoinMcpData, stablecoinsID }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };