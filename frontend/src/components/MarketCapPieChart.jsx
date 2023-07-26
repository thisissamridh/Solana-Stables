// import React, { useContext } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// import { DataContext } from '../context/DataContext';
// import { getColor } from '../utils/utils'; // Create a separate file for getColor function

// export default function StableCoinPieChart() {
// 	const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

// 	// Calculate the total market cap for all coins
// 	const totalMarketCap = individualCoinMcpData.reduce(
// 		(total, entry) => total + Object.values(entry).reduce((sum, val) => (typeof val === 'number' ? sum + val : sum), 0),
// 		0
// 	);

// 	// 	// Convert the data into an array of objects suitable for the PieChart
// 	const pieChartData = stablecoinsID.map(stablecoin => ({
// 		name: stablecoin.name,
// 		value: individualCoinMcpData.reduce((total, entry) => total + (entry[stablecoin.name] || 0), 0),
// 	}));

// 	return (
// 		<div className="w-[20rem] h-[22rem] bg-black-gradient p-4 rounded-sm  flex flex-col shadow">
// 			<strong className="text-white-700 font-medium">Stablecoin Market Cap Distribution</strong>
// 			<div className="mt-3 w-full flex-1 text-xs">
// 				<ResponsiveContainer width="100%" height="100%">
// 					{pieChartData.length > 0 ? (
// 						<PieChart width={400} height={300}>
// 							<Pie dataKey="value" data={pieChartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
// 								{pieChartData.map((entry, index) => (
// 									<Cell key={`cell-${index}`} fill={getColor(stablecoinsID[index].id)} />
// 								))}
// 							</Pie>
// 							<Tooltip />
// 							<Legend />
// 						</PieChart>
// 					) : (
// 						<div>Chart data is loading...</div>
// 					)}
// 				</ResponsiveContainer>
// 			</div>
// 		</div>
// 	);
// }


import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DataContext } from '../context/DataContext';
import { getColor } from '../utils/utils';
import formatNumber from '../utils/FormatNumber';


export default function StableCoinPieChart() {
	const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

	// Calculate the total market cap for all coins
	const totalMarketCap = individualCoinMcpData.reduce(
		(total, entry) => total + Object.values(entry).reduce((sum, val) => (typeof val === 'number' ? sum + val : sum), 0),
		0
	);

	// Convert the data into an array of objects suitable for the PieChart
	const pieChartData = stablecoinsID.map((stablecoin) => ({
		name: stablecoin.name,
		value: individualCoinMcpData.reduce((total, entry) => total + (entry[stablecoin.name] || 0), 0),
	}));

	return (
		<div className="w-[20rem] h-[22rem] bg-black-gradient p-4 rounded-sm flex flex-col shadow">
			<strong className="text-white-700 font-medium">Stablecoin Market Cap Distribution</strong>
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
