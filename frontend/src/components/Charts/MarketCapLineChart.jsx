
import React, { useContext } from 'react';
import { ComposedChart, Area, XAxis, Brush, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../context/DataContext';
import formatNumber from '../../utils/FormatNumber';
import { getColor } from '../../utils/utils'; // Create a separate file for getColor function
import ChartLoader from '../Helper/ChartLoader';
export default function StableCoinLineChart({ coinName }) {
    const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);


    // Filter data based on the coin name, or use all data if no coin name is provided
    const chartData = coinName
        ? individualCoinMcpData.map(entry => ({
            date: entry.date,
            [coinName]: entry[coinName] || 0,
        }))
        : individualCoinMcpData;

    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bond text-gradient">Stablecoin Market Cap</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    {chartData.length > 0 ? (
                        <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                tickFormatter={(str) => {
                                    const date = new Date(str);
                                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + String(date.getFullYear()).substr(-2);
                                }}
                            />
                            <YAxis tickFormatter={formatNumber} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                formatter={(value) => formatNumber(value)}
                                content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="custom-tooltip bg-gray-100 border border-gray-200 p-2 rounded">
                                                <p className="label text-green-600">{`Date : ${label}`}</p>
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

                            {/* Render the Area component for the selected coin, or all coins if no coinName is provided */}
                            {coinName ? (
                                <Area
                                    type="monotone"
                                    dataKey={coinName}
                                    stroke={getColor(stablecoinsID.find(stablecoin => stablecoin.name === coinName)?.id || 0)}
                                    fill="url(#gradient)"
                                    activeDot={{ r: 8 }}
                                />
                            ) : (
                                stablecoinsID.map(stablecoin => (
                                    <Area
                                        key={stablecoin.id}
                                        type="monotone"
                                        dataKey={stablecoin.name}
                                        stroke={getColor(stablecoin.id)}
                                        fill="url(#gradient)"
                                        activeDot={{ r: 8 }}
                                    />
                                ))
                            )}
                            <Brush />
                        </ComposedChart>
                    ) : (
                        <div><ChartLoader /></div>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}