import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import StableCoinLineChart from '../components/MarketCapLineChart'
import RecentOrders from '../components/RecentOrders'
import StableCoinPieChart from '../components/MarketCapPieChart'
import PopularProducts from '../components/PopularProducts'
import { DataProvider } from '../context/DataContext';
import { useParams } from 'react-router-dom';
import MarketOverview from '../components/MarketOverview'
import ProfileSummary from '../components/ProfileSummary'
import Name from '../components/Name'
export default function Coins() {
	return (
		<div className="flex flex-col gap-4">
            <Name/>
			<div className="flex gap-4 w-full px-10">
            <DataProvider>
                <MarketOverview className="flex-1" />
                <ProfileSummary className="flex-1" />
                </DataProvider>
</div>
            
			<div className="flex flex-row gap-4 w-full">
                
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
