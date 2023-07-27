import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import StableCoinLineChart from '../components/MarketCapLineChart';
import RecentOrders from '../components/RecentOrders';
import StableCoinPieChart from '../components/MarketCapPieChart';
import PopularProducts from '../components/PopularProducts';
import { DataProvider } from '../context/DataContext';
import { useParams } from 'react-router-dom';

// Create the mapping object for stablecoin names and their corresponding token addresses
const stablecoinAddressMapping = {
	USDT: '0x123abc...', // Replace '0x123abc...' with the actual token address for USDT
	USDC: '0x456def...', // Replace '0x456def...' with the actual token address for USDC
	// Add more entries for other stablecoins as needed
};

export default function Dashboard() {
	const { stablecoinName } = useParams();

	// Determine the coinAddress based on the stablecoinName using the mapping object
	const coinAddress = stablecoinAddressMapping[stablecoinName];

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
				<RecentOrders coinAddress={coinAddress} />
				{/* <PopularProducts coinAddress={coinAddress} /> */}
			</div>
		</div>
	);
}
