import React, { useContext, useState, useEffect } from 'react';
import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatNumber from '../../utils/FormatNumber';
import { getColor } from '../../utils/utils';
import { DataContext } from '../../context/DataContext';

export default function Walletfunds() {

    // Get wallet distribution data from DataContext
    const { walletDistData } = useContext(DataContext);
    const [chartData, setChartData] = useState([]);

    // Process the data
    useEffect(() => {
        const usdtLabels = walletDistData.USDT.map(data => data.label);
        const combinedData = usdtLabels.map(label => ({
            label,
            ...Object.entries(walletDistData).reduce((acc, [coin, data]) => {
                const coinData = data.find(d => d.label === label);
                if (coinData) {
                    acc[coin] = (acc[coin] || 0) + coinData.number;
                    acc['percentage'] = (acc['percentage'] || 0) + coinData.percentage;
                }
                return acc;
            }, {}),
        }));
        setChartData(combinedData);
    }, [walletDistData]);

    // Render the chart components
    const renderChartComponents = () => {
        return Object.keys(chartData[0]).filter(key => key !== 'label' && key !== 'percentage').map((key, index) => (
            <>
                <Area type="monotone" dataKey={key} stroke={getColor(index)} fill="url(#gradient)" activeDot={{ r: 8 }} />
                <Bar dataKey={key} fill={getColor(index)} />
            </>
        )).concat(
            <Line type="monotone" dataKey="percentage" stroke="#000" dot={{ r: 6 }} />
        );
    }

    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-lg text-gradient">Wallet fund's Distribution</strong>
            <div className="text-sm text-neutral-300">Token holding distribution by values ($)</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="label" />
                        <YAxis tickFormatter={formatNumber} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip formatter={(value) => formatNumber(value)} />
                        <Legend />
                        {renderChartComponents()}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
