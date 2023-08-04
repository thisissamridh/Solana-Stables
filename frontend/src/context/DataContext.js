import React, { createContext, useEffect, useState } from 'react';
import { fetchStablecoinData } from '../api/marketCapApi';
import { fetchHolderData } from '../api/tokenHolderApi';
import { fetchMarketData } from '../api/MarketDataApi';
import { fetchwalletDisdata } from '../api/walletDistributionApi';
import { fetchTopHolders } from '../api/topHoldersApi';
import CoinId from '../utils/coinId';
import stablecoinAddressMapping from '../utils/CoinAddress';
const DataContext = createContext();


const DataProvider = ({ children }) => {
    const stablecoinsID = CoinId;
    const [coinData, setCoinData] = useState({});
    const [individualCoinMcpData, setIndividualCoinMcpData] = useState([]);
    const [totalMarketCap, setTotalMarketCap] = useState(0);
    const [holderData, setHolderData] = useState({});
    const [walletDistData, setWalletDistData] = useState({});
    const [holderTopData, setHolderTopData] = useState({});
    const [offset, setOffset] = useState(0);
    // const defaultOffset = 0;
    const defaultSize = 10;

    const fetchTopHolderData = async (offset, size) => {
        try {
            const topHolderPromises = Object.entries(stablecoinAddressMapping).map(([coinName, addresses]) => {
                const address = Array.isArray(addresses) ? addresses[0] : addresses;
                return fetchTopHolders(address, offset, size)
            });
            const topHolderResults = await Promise.all(topHolderPromises);
            const topHolderData = {};
            Object.keys(stablecoinAddressMapping).forEach((coinName, index) => {
                topHolderData[coinName] = topHolderResults[index];
            });
            setHolderTopData(prevState => ({ ...prevState, ...topHolderData }));
        } catch (error) {
            console.error('Error fetching top holder data:', error);
        }
    };

    const fetchCoinData = async () => {
        try {
            const marketPromises = Object.entries(stablecoinAddressMapping).map(([coinName, address]) => fetchMarketData(address));
            const marketResults = await Promise.all(marketPromises);
            const coinData = {};
            Object.keys(stablecoinAddressMapping).forEach((coinName, index) => {
                coinData[coinName] = marketResults[index];
            });
            setCoinData(coinData);
        } catch (error) {
            console.error('Error fetching coin data:', error);
        }
    };

    const loadMore = () => {
        setOffset(prevOffset => prevOffset + defaultSize);
        fetchTopHolderData(offset + defaultSize, defaultSize);
    }


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

                    let reservedAddressData = null;

                    if (Array.isArray(addresses)) {
                        // Find the reserved address and remove it from the array
                        const reservedIndex = addresses.findIndex(entry => typeof entry === 'object' && 'reserved' in entry);
                        if (reservedIndex !== -1) {
                            const reservedAddress = addresses[reservedIndex].reserved;
                            addresses.splice(reservedIndex, 1); // Remove the reserved address from the array
                            reservedAddressData = await fetchHolderData(reservedAddress);
                        }

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

                        // Subtract the reserved data
                        if (reservedAddressData) {
                            reservedAddressData.TotalHolders.forEach((entry, index) => {
                                if (summedData.TotalHolders[index]) {
                                    summedData.TotalHolders[index].total -= entry.total;
                                }
                            });

                            reservedAddressData.activeHolders.forEach((entry, index) => {
                                if (summedData.activeHolders[index]) {
                                    summedData.activeHolders[index].total -= entry.total;
                                }
                            });
                        }

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


                const walletDistPromises = stablecoinsID.map(async (stablecoin) => {
                    const addresses = stablecoinAddressMapping[stablecoin.name];
                    if (!addresses) return Promise.resolve(null);

                    let reservedAddressData = null;

                    if (Array.isArray(addresses)) {
                        // Find the reserved address and remove it from the array
                        const reservedIndex = addresses.findIndex(entry => typeof entry === 'object' && 'reserved' in entry);
                        if (reservedIndex !== -1) {
                            const reservedAddress = addresses[reservedIndex].reserved;
                            addresses.splice(reservedIndex, 1); // Remove the reserved address from the array
                            reservedAddressData = await fetchwalletDisdata(reservedAddress);
                        }

                        // If there are multiple addresses for a coin, fetch data for each and combine
                        const addressPromises = addresses.map(address => fetchwalletDisdata(address));
                        const dataArray = await Promise.all(addressPromises);

                        // Sum the data for each address together
                        const summedData = dataArray.reduce((sum, current) => {
                            current.data.data.forEach((entry) => {
                                const existingIndex = sum.findIndex(item => item.label === entry.label);
                                if (existingIndex > -1) {
                                    sum[existingIndex].number += entry.number;
                                    sum[existingIndex].percentage += entry.percentage;
                                } else {
                                    sum.push({ ...entry });
                                }
                            });
                            return sum;
                        }, []);

                        // Subtract the reserved data
                        if (reservedAddressData) {
                            reservedAddressData.data.data.forEach((entry) => {
                                const existingIndex = summedData.findIndex(item => item.label === entry.label);
                                if (existingIndex > -1) {
                                    summedData[existingIndex].number -= entry.number;
                                    summedData[existingIndex].percentage -= entry.percentage;
                                }
                            });
                        }

                        return summedData;
                    } else {
                        // If there's only one address, just fetch data for that
                        const walletData = await fetchwalletDisdata(addresses);
                        return walletData.data.data;
                    }
                });
                const walletDistResults = await Promise.all(walletDistPromises);
                const walletDistData = {};
                stablecoinsID.forEach((stablecoin, index) => {
                    walletDistData[stablecoin.name] = walletDistResults[index];
                });




                fetchCoinData();

                setHolderData(holderData);
                setWalletDistData(walletDistData);

                setTotalMarketCap(sumMarketCap);





            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        fetchTopHolderData(offset, defaultSize);
    }, [offset]);

    return (
        <DataContext.Provider value={{ individualCoinMcpData, stablecoinsID, totalMarketCap, holderData, walletDistData, coinData, holderTopData, loadMore }}>

            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
