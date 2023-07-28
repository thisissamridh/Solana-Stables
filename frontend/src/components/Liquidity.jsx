import React from 'react';
import { Chart } from 'react-charts';

export default function Liquidity({ coinName }) {
    // Sample data for the chart
    const chartData = [
        { date: '2022-01-01', [coinName]: 100 },
        { date: '2022-02-01', [coinName]: 200 },
        { date: '2022-03-01', [coinName]: 300 },
        { date: '2022-04-01', [coinName]: 400 },
        { date: '2022-05-01', [coinName]: 500 },
    ];

    const data = React.useMemo(
        () => [
            {
                label: coinName,
                data: chartData.map((item) => [item.date, item[coinName]]),
            },
        ],
        [chartData, coinName]
    );

    const series = React.useMemo(
        () => ({
            type: 'area',
            showPoints: false,
        }),
        []
    );

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    );

    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-lg text-gradient">Market Cap Chart</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <Chart data={data} series={series} axes={axes} tooltip />
            </div>
        </div>
    );
}
