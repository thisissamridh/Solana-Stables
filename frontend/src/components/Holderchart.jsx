import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ActiveHolder() {
    // Sample data for the chart
    const chartData = [
        { date: '2022-01-01', value: 100 },
        { date: '2022-02-01', value: 200 },
        { date: '2022-03-01', value: 300 },
        { date: '2022-04-01', value: 400 },
        { date: '2022-05-01', value: 500 },
    ];

    return (
        <div className="w-1/2 max-w-[35rem] h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
            <strong className="text-white-700 font-large text-2xl text-gradient">Holder's Chart</strong>
            <div className="mt-4 w-full flex-1 text-md">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />

                        {/* Render the Line component for the demo data */}
                        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
