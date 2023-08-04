import React from 'react'
import StableCoinLineChart from '../components/Charts/MarketCapLineChart'
import TopHolderTable from '../components/TopHolderTable'
import StableCoinPieChart from '../components/Charts/MarketCapPieChart'
import PopularProducts from '../components/PopularProducts'
import { DataProvider } from '../context/DataContext';
import MarketOverview from '../components/MarketOverview'
import Name from '../components/Name'
import Marketcap from '../components/Marketcap'
import Holderchart from '../components/Charts/Holderchart'

import Walletfunds from '../components/Charts/Walletfunds'
import LiquidMarket from '../components/LiquidMarket'
import Footer from '../components/shared/Footer';
export default function Coins() {
	return (
		<div className="flex flex-col gap-4">
			<Name />
			<div className=" gap-4 w-full  justify-center ">
				<DataProvider >
					<MarketOverview className="flex-1" />

				</DataProvider>
			</div>

			<div className="flex flex-col md:flex-row gap-4 w-full">
				<Marketcap />
				<PopularProducts />
			</div>
			<div>
				<StableCoinLineChart coinName={'USDT'} />
				{/* <StableCoinPieChart /> */}
				{/* <PopularProducts /> */}
			</div>
			<div>
				<TopHolderTable coinName={'USDT'} />
			</div>
			<div>

			</div>
			<div className='flex gap-3 w-full items-center justify-center'>
				<Holderchart />
				{/* <ActiveHolder /> */}
			</div >
			<div>
				<Walletfunds coinName={"USDT"} />
			</div>
			<div>
				<LiquidMarket />
			</div>
			<div className='flex flex-col flex-1'>
				<Footer />
			</div>

		</div >


	)
}
