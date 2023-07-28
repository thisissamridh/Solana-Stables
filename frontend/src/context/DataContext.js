import React, { createContext, useEffect, useState } from 'react';
import { fetchStablecoinData } from '../api/marketCapApi';
import { fetchHolderData } from '../api/tokenHolderApi';
import CoinId from '../utils/coinId';
import stablecoinAddressMapping from '../utils/CoinAddress';
const DataContext = createContext();

const DataProvider = ({ children }) => {
    const stablecoinsID = CoinId;

    const [individualCoinMcpData, setIndividualCoinMcpData] = useState([]);
    const [totalMarketCap, setTotalMarketCap] = useState(0);
    const [holderData, setHolderData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mcpPromises = stablecoinsID.map(stablecoin => fetchStablecoinData(stablecoin.id));
                const mcpResults = await Promise.all(mcpPromises);
                const combinedData = mcpResults.reduce((acc, curr) => {
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



                const holderPromises = stablecoinsID.map(async (stablecoin) => {
                    const addresses = stablecoinAddressMapping[stablecoin.name];
                    if (!addresses) return Promise.resolve(null);
                    if (Array.isArray(addresses)) {
                        // If there are multiple addresses for a coin, fetch data for each and combine
                        const addressPromises = addresses.map(address => fetchHolderData(address));
                        const dataArray = await Promise.all(addressPromises);

                        // Sum the data for each address together
                        const summedData = { TotalHolders: [], activeHolders: [] };

                        dataArray.forEach(data => {
                            data.TotalHolders.forEach((entry, index) => {
                                if (summedData.TotalHolders[index]) {
                                    summedData.TotalHolders[index].total += entry.total;
                                } else {
                                    summedData.TotalHolders[index] = { ...entry };
                                }
                            });

                            data.activeHolders.forEach((entry, index) => {
                                if (summedData.activeHolders[index]) {
                                    summedData.activeHolders[index].total += entry.total;
                                } else {
                                    summedData.activeHolders[index] = { ...entry };
                                }
                            });
                        });

                        return summedData;
                    } else {
                        // If there's only one address, just fetch data for that
                        return fetchHolderData(addresses);
                    }
                });
                const holderResults = await Promise.all(holderPromises);
                const holderData = {};
                stablecoinsID.forEach((stablecoin, index) => {
                    holderData[stablecoin.name] = holderResults[index];
                });

                setHolderData(holderData);

                setTotalMarketCap(sumMarketCap);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };



        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ individualCoinMcpData, stablecoinsID, totalMarketCap, holderData }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
