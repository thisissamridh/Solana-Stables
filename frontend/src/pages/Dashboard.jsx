import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import StableCoinLineChart from '../components/Charts/MarketCapLineChart'
import TopHolderTable from '../components/Table/TopHolderTable'
import StableCoinPieChart from '../components/Charts/MarketCapPieChart'
import TopHoldersSummaryTable from '../components/Table/HolderSummary'
import { DataProvider } from '../context/DataContext';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import TokenTransferTable from '../components/Table/TransferTable'
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
        <TopHoldersSummaryTable />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <HolderChart />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <TokenTransferTable />
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
