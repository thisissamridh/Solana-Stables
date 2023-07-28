import React from 'react';
import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatNumber from '../utils/FormatNumber';
import { getColor } from '../utils/utils';

export default function Walletfunds() {
    // Sample data for the chart
    const chartData = [
        { date: '2022-01-01', Tether: 100, USD_Coin: 200 },
        { date: '2022-02-01', Tether: 200, USD_Coin: 300 },
        { date: '2022-03-01', Tether: 300, USD_Coin: 400 },
        { date: '2022-04-01', Tether: 400, USD_Coin: 500 },
        { date: '2022-05-01', Tether: 500, USD_Coin: 600 },
        { date: '2022-06-01', Tether: 600, USD_Coin: 700 },
        { date: '2022-07-01', Tether: 700, USD_Coin: 800 },
        { date: '2022-08-01', Tether: 800, USD_Coin: 900 },
    ];

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
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={formatNumber} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip formatter={(value) => formatNumber(value)} />
                        <Legend />

                        {/* Render the Area and Bar components for the selected coins */}
                        <Area type="monotone" dataKey="Tether" stroke={getColor(0)} fill="url(#gradient)" activeDot={{ r: 8 }} />
                        <Bar dataKey="USD_Coin" fill="#82ca9d" />
                        <Line type="monotone" dataKey="Tether" stroke="#ff7300" dot={{ r: 6 }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
