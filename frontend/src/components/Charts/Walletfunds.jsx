import React, { useContext, useEffect, useState } from 'react';
import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatNumber from '../../utils/FormatNumber';
import { getColor } from '../../utils/utils';
import { DataContext } from '../../context/DataContext';

export default function Walletfunds({ coinName }) {

    const [chartData, setChartData] = useState([]);

    const { walletDistData } = useContext(DataContext);

    useEffect(() => {
        if (!walletDistData || !walletDistData['USDT']) return;

        if (coinName && walletDistData[coinName]) {
            setChartData(walletDistData[coinName]);
        } else {
            let formattedData = walletDistData['USDT'].map(({ label }) => {
                let data = { label, totalNumber: 0 };
                if (coinName) {
                    data.totalPercentage = 0;
                }
                return data;
            });

            Object.entries(walletDistData).forEach(([coin, data]) => {
                data.forEach(({ label, number, percentage }, i) => {
                    const match = formattedData.find(d => d.label === label);
                    if (match) {
                        match.totalNumber += number;
                        if (coinName) {
                            match.totalPercentage += percentage;
                        }
                    }
                });
            });

            setChartData(formattedData);
        }
    }, [walletDistData, coinName]);



    const renderChartComponents = () => {
        if (!chartData[0]) return null;

        return Object.keys(chartData[0]).filter(key => key !== 'label' && key !== 'percentage').map((key, index) => (
            <Bar dataKey={key} fill={'#82ca9d'} yAxisId="left" />
        )).concat(
            coinName ?
                <Line type="monotone" dataKey="percentage" stroke="#FFA500" strokeWidth={3} dot={{ r: 6 }} yAxisId="right" />
                : null
        );

    }



    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-lg text-gradient">Wallet fund's Distribution</strong>
            <div className="text-sm text-neutral-300">Token holding distribution by values ($)</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -5, bottom: 5 }}>
                        <XAxis dataKey="label" tick={{ fill: '#ffffff', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }} />

                        <YAxis tickFormatter={formatNumber} yAxisId="left" />
                        <YAxis tickFormatter={formatNumber} orientation='right' yAxisId="right" />
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