import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import StableCoinLineChart from '../components/MarketCapLineChart'
import RecentOrders from '../components/RecentOrders'
import StableCoinPieChart from '../components/MarketCapPieChart'
import PopularProducts from '../components/PopularProducts'
import { DataProvider } from '../context/DataContext';
export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<DataProvider>
					<StableCoinLineChart />
					<StableCoinPieChart stablecoinName="USDC" />
				</DataProvider>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
