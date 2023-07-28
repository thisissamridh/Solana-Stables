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
import Marketcap from '../components/Marketcap'
import Holderchart from '../components/Holderchart'
import ActiveHolder from '../components/ActiveHolder'
import Walletfunds from '../components/Walletfunds'
import LiquidMarket from '../components/LiquidMarket'
export default function Coins() {
	return (
		<div className="flex flex-col gap-4">
            <Name/>
			<div className="flex gap-4 w-full  justify-center ">
            <DataProvider >
                <MarketOverview className="flex-1" />
                <ProfileSummary className="flex-1" />
                </DataProvider>
</div>
            
			<div className="flex flex-row gap-4 w-full">
                
				<Marketcap/>
                <PopularProducts />
			</div>
			<div>
				<RecentOrders />
			</div>
			<div className='flex gap-3 w-full items-center justify-center'>
				<Holderchart/>
				<ActiveHolder/>
			</div>
			<div>
			<Walletfunds/>
			</div>
			<div>
			<LiquidMarket/>
			</div>
			
		</div>
	)
}
