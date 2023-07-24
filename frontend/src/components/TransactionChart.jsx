import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
    {
        date: '2022-01-01',
        USDT: 4000,
        USDC: 2400,
        DAI: 3000
    },
    {
        date: '2022-02-01',
        USDT: 3000,
        USDC: 1398,
        DAI: 2500
    },
    {
        date: '2022-03-01',
        USDT: 2000,
        USDC: 9800,
        DAI: 2000
    },
    // ...
]

export default function StablecoinChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Stablecoin Market Cap</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}
                        margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="USDT" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="USDC" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="DAI" stroke="#ffc658" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
