import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import StableCoinLineChart from '../components/MarketCapLineChart';
import RecentOrders from '../components/RecentOrders';
import StableCoinPieChart from '../components/MarketCapPieChart';
import PopularProducts from '../components/PopularProducts';
import { DataProvider } from '../context/DataContext';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
	const { stablecoinName } = useParams();

	// Determine the coinAddress based on the stablecoinName
	// You can use a mapping object or switch case to find the corresponding address
	// Replace 'YOUR_MAPPING_OBJECT' with your actual mapping object
	// const coinAddress = YOUR_MAPPING_OBJECT[stablecoinName];

	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<DataProvider>
					{/* Pass the stablecoinName to StableCoinLineChart component */}
					<StableCoinLineChart coinName={stablecoinName} />
					<StableCoinPieChart />
				</DataProvider>
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* Pass the coinAddress to components that accept it */}
				<RecentOrders />
				{/* <PopularProducts coinAddress={coinAddress} /> */}
			</div>
		</div>
	);
}
