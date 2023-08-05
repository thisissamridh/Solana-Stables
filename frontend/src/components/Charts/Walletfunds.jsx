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

        let formattedData = {};

        if (coinName && walletDistData[coinName]) {
            walletDistData[coinName].forEach(({ label, number, percentage }) => {
                if (!formattedData[label]) {
                    formattedData[label] = { label, totalNumber: 0 };
                    if (coinName) {
                        formattedData[label].totalPercentage = 0;
                    }
                }
                formattedData[label].totalNumber += number;
                if (coinName) {
                    formattedData[label].totalPercentage += percentage;
                }
            });
        } else {
            Object.entries(walletDistData).forEach(([coin, data]) => {
                data.forEach(({ label, number, percentage }) => {
                    if (!formattedData[label]) {
                        formattedData[label] = { label, totalNumber: 0 };
                    }
                    formattedData[label].totalNumber += number;
                });
            });
        }


        setChartData(Object.values(formattedData));
    }, [walletDistData, coinName]);




    const renderChartComponents = () => {
        if (!chartData[0]) return null;

        return Object.keys(chartData[0]).filter(key => key !== 'label' && (coinName ? key !== 'totalPercentage' : key !== 'percentage')).map((key, index) => (
            <Bar dataKey={key} fill={'#82ca9d'} yAxisId="left" />
        )).concat(
            coinName ?
                <Line type="monotone" dataKey="totalPercentage" stroke="#FFA500" strokeWidth={1.5} dot={{ r: 6 }} yAxisId="right" />
                : null
        );
    }


    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-lg text-gradient">Wallet fund's Distribution</strong>
            <div className="text-sm text-neutral-300">Token holding distribution by values ($)</div>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <XAxis dataKey="label" tick={{ fill: '#ffffff', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }} />


                        <YAxis tickFormatter={formatNumber} yAxisId="left" />
                        <YAxis tickFormatter={formatNumber} orientation='right' yAxisId="right" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip
                            content={({ payload, label, active }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="custom-tooltip" style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '5px' }}>
                                            <p className="label text-black font-bold">{`${label}`}</p>
                                            <p className="intro text-green-500">{`Total Number: ${payload[0].value}`}</p>
                                            {payload[1] && <p className="desc text-orange-400">{`Total Percentage: ${payload[1].value}`}</p>}
                                        </div>
                                    );
                                }

                                return null;
                            }}
                        />


                        <Legend />
                        {renderChartComponents()}
                    </ComposedChart>

                </ResponsiveContainer>
            </div>
        </div>
    );
}