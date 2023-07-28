// import React from 'react';
// import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// export default function ActiveHolder() {
//     // Sample data for the chart
//     const chartData = [
//         { date: '2022-01-01', value: 100 },
//         { date: '2022-02-01', value: 200 },
//         { date: '2022-03-01', value: 300 },
//         { date: '2022-04-01', value: 400 },
//         { date: '2022-05-01', value: 500 },
//     ];

//     return (
//         <div className="w-1/2 max-w-[35rem] h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
//             <strong className="text-white-700 font-large text-2xl text-gradient">Holder's Chart</strong>
//             <div className="mt-4 w-full flex-1 text-md">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
//                         <XAxis dataKey="date" />
//                         <YAxis />
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <Tooltip />
//                         <Legend />

//                         {/* Render the Line component for the demo data */}
//                         <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
//                     </ComposedChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }


import React, { useContext, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import { DataContext } from '../context/DataContext';
import ChartLoader from '../components/Helper/ChartLoader';
import Dropdown from '../components/shared/Dropdown';
const HolderChart = ({ coinName }) => {
    const { holderData } = useContext(DataContext);

    const [chartData, setChartData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('totalHolders');

    useEffect(() => {

        let data = {};
        const referenceCoin = 'USDT';
        if (!holderData || !holderData[referenceCoin] || !holderData[referenceCoin].TotalHolders) return;
        const referenceDates = holderData[referenceCoin].TotalHolders.map(entry => new Date(entry.datetime * 1000).toISOString().split('T')[0]);

        const coinsToConsider = coinName ? [coinName] : Object.keys(holderData);

        for (const date of referenceDates) {
            data[date] = { date, totalHolders: 0, activeHolders: 0 };
        }

        for (const coin of coinsToConsider) {
            const coinData = holderData[coin];

            if (coinData && Array.isArray(coinData.TotalHolders)) {
                const coinDataByDate = {};
                coinData.TotalHolders.forEach(entry => {
                    const date = new Date(entry.datetime * 1000).toISOString().split('T')[0];
                    coinDataByDate[date] = entry.total;
                });

                for (const date of referenceDates) {
                    if (coinDataByDate[date]) {
                        data[date].totalHolders += coinDataByDate[date];
                    }
                }
            }

            if (coinData && Array.isArray(coinData.activeHolders)) {
                const coinDataByDate = {};
                coinData.activeHolders.forEach(entry => {
                    const date = new Date(entry.datetime * 1000).toISOString().split('T')[0];
                    coinDataByDate[date] = entry.total;
                });

                for (const date of referenceDates) {
                    if (coinDataByDate[date]) {
                        data[date].activeHolders += coinDataByDate[date];
                    }
                }
            }
        }

        // Convert data object to array and sort by date
        const chartDataArray = Object.values(data).sort((a, b) => new Date(a.date) - new Date(b.date));

        setChartData(chartDataArray);
    }, [holderData, coinName, selectedOption]);

    if (!chartData || chartData.length === 0) {
        return <ChartLoader />;
    }

    return (


        <div style={{ position: 'relative', width: '100%', height: 400 }}>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
                <option value="totalHolders">Total Holders</option>
                <option value="activeHolders">Active Holders</option>
                <option value="both">Both</option>
            </select>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {selectedOption === 'totalHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="totalHolders" stroke="#8884d8" activeDot={{ r: 8 }} /> : null}
                    {selectedOption === 'activeHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="activeHolders" stroke="#82ca9d" /> : null}
                    <Brush />
                </LineChart>
            </ResponsiveContainer>
        </div>


    );
};

export default HolderChart;
