import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import StableCoinLineChart from '../components/Charts/MarketCapLineChart'
import TopHolderTable from '../components/TopHolderTable'
import StableCoinPieChart from '../components/Charts/MarketCapPieChart'
import PopularProducts from '../components/PopularProducts'
import { DataProvider } from '../context/DataContext';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import HolderChart from '../components/Charts/Holderchart'
import Walletfunds from '../components/Charts/Walletfunds'
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 scrollbar-hide">
      <DashboardStatsGrid />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <StableCoinLineChart />
        <StableCoinPieChart />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <TopHolderTable />
        <PopularProducts />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <HolderChart />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Walletfunds />
      </div>
      <div className='flex flex-col flex-1'>
        <Footer />
      </div>
    </div>
  )
}
