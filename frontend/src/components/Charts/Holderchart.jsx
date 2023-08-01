import React, { useContext, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import { DataContext } from '../../context/DataContext';
import ChartLoader from '../Helper/ChartLoader';
import formatNumber from '../../utils/FormatNumber';
// import Dropdown from '../Helper/Dropdown';
const HolderChart = ({ coinName }) => {
    const { holderData } = useContext(DataContext);

    const [chartData, setChartData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('totalHolders');

    console.log("Holder Datwwwsa:", holderData);
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


        <div className='bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg' style={{ position: 'relative', width: '100%', height: 400 }}>
                                    <strong className="text-white-700 bg-black-gradientfont-bond text-gradient px-2 py-3">Stablecoin Market Cap</strong>

            <select className='bg-black-gradient py-1 px-2 rounded-md' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
                <option className=' font-bold bg-black'value="totalHolders">Total Holders</option>
                <option className=' font-bold bg-black' value="activeHolders">Active Holders</option>
                <option className=' font-bold bg-black' value="both">Both</option>
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
                    {selectedOption === 'totalHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="totalHolders" stroke="" activeDot={{ r: 8 }} /> : null}
                    {selectedOption === 'activeHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="activeHolders" stroke="#82ca9d"  /> : null}
                    <Brush />
                </LineChart>
            </ResponsiveContainer>
            <div className="w-full h-[22rem]  p-4 rounded-md flex flex-col flex-1 ">
                <div className="mt-3 w-full flex-1 text-xs"></div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            tickFormatter={(str) => {
                                const date = new Date(str);
                                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + String(date.getFullYear()).substr(-2);
                            }}
                        />
                        <YAxis tickFormatter={formatNumber} />
                        <Tooltip
                            formatter={(value) => formatNumber(value)}
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="custom-tooltip bg-gray-100 border border-gray-200 p-2 rounded">
                                            <p className="label text-black">{`Date : ${label}`}</p>
                                            {payload.map((entry, index) => (
                                                <p key={`item-${index}`} style={{ color: entry.color }}>
                                                    {`${entry.name} : ${formatNumber(entry.value)}`}
                                                </p>
                                            ))}
                                        </div>
                                    );
                                }

                                return null;
                            }}
                        />

                        <Legend />
                        {selectedOption === 'totalHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="totalHolders" stroke="#8884d8" activeDot={{ r: 8 }} /> : null}
                        {selectedOption === 'activeHolders' || selectedOption === 'both' ? <Line type="monotone" dataKey="activeHolders" stroke="#82ca9d" /> : null}
                        <Brush />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>


    );
};

export default HolderChart;
