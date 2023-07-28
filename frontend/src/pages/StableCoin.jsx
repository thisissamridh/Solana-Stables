import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import StableCoinLineChart from '../components/MarketCapLineChart';
import RecentOrders from '../components/RecentOrders';
import StableCoinPieChart from '../components/MarketCapPieChart';
import PopularProducts from '../components/PopularProducts';
import { DataProvider } from '../context/DataContext';
import { useParams } from 'react-router-dom';
import MarketOverview from '../components/MarketOverview';
import ProfileSummary from '../components/ProfileSummary';

const stablecoinAddressMapping = {
	USDT: '0x123abc...', // Replace '0x123abc...' with the actual token address for USDT
	USDC: '0x456def...', // Replace '0x456def...' with the actual token address for USDC
	// Add more entries for other stablecoins as needed
};

export default function Dashboard() {
	const { stablecoinName } = useParams();
	const coinAddress = stablecoinAddressMapping[stablecoinName];

	return (
		<DataProvider>
			<div className="flex flex-col gap-4">
				<DashboardStatsGrid />
				<div className="flex flex-col md:flex-row sm:flex-row xs:flex-row md:justify-evenly w-full md:px-10 ">
					<MarketOverview className="flex-1" />
					<ProfileSummary className="flex-1" />
				</div>
				<div className="flex flex-col md:flex-row gap-4 w-full">
					<StableCoinLineChart coinName={stablecoinName} className="flex-1" />
					<StableCoinPieChart className="flex-1" />
				</div>
				<div className="flex flex-col md:flex-row gap-4 w-full">
					<RecentOrders coinAddress={coinAddress} className="flex-1" />
					{/* <PopularProducts coinAddress={coinAddress} className="flex-1" /> */}
				</div>
			</div>
		</DataProvider>
	);
}
