import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import StableCoinLineChart from '../components/Charts/MarketCapLineChart'
import RecentOrders from '../components/RecentOrders'
import StableCoinPieChart from '../components/Charts/MarketCapPieChart'
import PopularProducts from '../components/PopularProducts'
import { DataProvider } from '../context/DataContext';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 scrollbar-hide">
      <DashboardStatsGrid />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <StableCoinLineChart />
        <StableCoinPieChart stablecoinName="USDC" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
      <div className='flex flex-col flex-1'>
        <Footer />
      </div>
    </div>
  )
}
