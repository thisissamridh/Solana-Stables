import React from 'react';
import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatNumber from '../utils/FormatNumber';
import { getColor } from '../utils/utils';

export default function Marketca({ coinName }) {
    // Sample data for the chart
    const chartData = [
        { date: '2022-01-01', [coinName]: 100 },
        { date: '2022-02-01', [coinName]: 200 },
        { date: '2022-03-01', [coinName]: 300 },
        { date: '2022-04-01', [coinName]: 400 },
        { date: '2022-05-01', [coinName]: 500 },
    ];

    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-lg ">Market Cap Chart</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={formatNumber} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip formatter={(value) => formatNumber(value)} />
                        <Legend />

                        {/* Render the Area component for the selected coin */}
                        {coinName && (
                            <Area
                                type="monotone"
                                dataKey={coinName}
                                stroke={getColor(0)}
                                fill="url(#gradient)"
                                activeDot={{ r: 8 }}
                            />
                        )}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
