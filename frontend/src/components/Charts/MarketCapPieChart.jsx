// import React, { useContext } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// import { DataContext } from '../context/DataContext';
// import { getColor } from '../utils/utils'; // Create a separate file for getColor function

// export default function StableCoinPieChart() {
// 	const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);




import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DataContext } from '../../context/DataContext';
import { getColor } from '../../utils/utils';
import formatNumber from '../../utils/FormatNumber';

export default function StableCoinPieChart() {
	const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

	// Filter data to get the latest entry for each stablecoin
	const latestData = individualCoinMcpData.reduce((acc, entry) => {
		stablecoinsID.forEach((stablecoin) => {
			if (entry[stablecoin.name]) {
				acc[stablecoin.name] = entry[stablecoin.name];
			}
		});
		return acc;
	}, {});

	// Calculate the total market cap for all coins
	const totalMarketCap = Object.values(latestData).reduce((total, val) => total + val, 0);

	// Convert the data into an array of objects suitable for the PieChart
	const pieChartData = stablecoinsID.map((stablecoin) => {
		// Get the market cap value for the current stablecoin
		const marketCapValue = latestData[stablecoin.name] || 0;
		// Calculate the percentage of market cap for the current stablecoin
		const percentage = (marketCapValue / totalMarketCap) * 100;
		// Round the percentage to two decimal places
		const roundedPercentage = parseFloat(percentage.toFixed(2));

		return {
			name: stablecoin.name,
			value: marketCapValue,
			percentage: roundedPercentage,
		};
	});

	return (
		<div className="w-[20rem] h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col shadow ">
			<strong className="text-white-700 font-bold  text-gradient">Stablecoin Market Cap Distribution</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					{pieChartData.length > 0 ? (
						<PieChart width={400} height={300}>
							<Pie dataKey="value" data={pieChartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
								{pieChartData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={getColor(stablecoinsID[index].id)} />
								))}
							</Pie>
							<Tooltip formatter={(value) => formatNumber(value)} />
							<Legend />
						</PieChart>
					) : (
						<div>Chart data is loading...</div>
					)}
				</ResponsiveContainer>
			</div>
		</div>
	);
}
