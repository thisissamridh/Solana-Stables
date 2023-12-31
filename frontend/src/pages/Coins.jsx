import React, { useState, useContext } from 'react';
import StableCoinLineChart from '../components/Charts/MarketCapLineChart';
import TopHolderTable from '../components/Table/TopHolderTable';
import { DataProvider } from '../context/DataContext';
import MarketOverview from '../components/MarketOverview';
import Name from '../components/Name';
import Holderchart from '../components/Charts/Holderchart';
import TokenTransferTable from '../components/Table/TransferTable'
import Walletfunds from '../components/Charts/Walletfunds';
import LiquidMarket from '../components/LiquidMarket';
import Footer from '../components/shared/Footer';
import { DataContext } from '../context/DataContext';
export default function Coins() {
	const { individualCoinMcpData } = useContext(DataContext);
	const [selectedStablecoin, setSelectedStablecoin] = useState('USDC');
	const shouldRenderChart = individualCoinMcpData.length > 0 && individualCoinMcpData[individualCoinMcpData.length - 1][selectedStablecoin] !== undefined;

	return (
		<div className="flex flex-col gap-4">
			<Name
				selectedStablecoin={selectedStablecoin}
				onSelectStablecoin={setSelectedStablecoin}
			/>
			<div className="gap-4 w-full justify-center">
				<DataProvider>
					<MarketOverview coinName={selectedStablecoin} className="flex-1" />
				</DataProvider>
			</div>
			{shouldRenderChart && (
				<div className="flex flex-col lg:flex-row md:flex-row gap-4 w-full">
					<StableCoinLineChart coinName={selectedStablecoin} />
				</div>
			)}

			<div>
				<TopHolderTable coinName={selectedStablecoin} />
			</div>

			<div>
				<TokenTransferTable coinName={selectedStablecoin} />
			</div>
			<div className='flex gap-3 w-full items-center justify-center'>
				<Holderchart coinName={selectedStablecoin} />
			</div>
			<div>
				<Walletfunds coinName={selectedStablecoin} />
			</div>
			<div>
				<LiquidMarket />
			</div>
			<div className='flex flex-col flex-1'>
				<Footer />
			</div>
		</div>
	);
}
