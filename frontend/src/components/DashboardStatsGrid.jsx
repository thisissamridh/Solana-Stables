import { React, useContext } from 'react';
import { IoWalletSharp, IoStatsChartSharp, IoTrendingDownSharp, IoLogoUsd } from 'react-icons/io5';
import { DataContext } from '../context/DataContext';
import formatNumber from '../utils/FormatNumber';

export default function DashboardStatsGrid() {
  const { individualCoinMcpData, tokenMetaData } = useContext(DataContext);

  const mcp = (individualCoinMcpData[individualCoinMcpData.length - 1])
  const mcp7d = (individualCoinMcpData[individualCoinMcpData.length - 8])

  // assuming mcp is your data
  let sum = 0;
  for (let key in mcp) {
    if (typeof mcp[key] === 'number') {
      sum += mcp[key];
    }
  }

  // stablecoin  sum change 7d 
  let sum7d = 0;
  for (let key in mcp7d) {
    if (typeof mcp7d[key] === 'number') {
      sum7d += mcp7d[key];
    }

  }

  let percentageChange7d = ((sum - sum7d) / sum7d) * 100;


  // usdc dominance %

  let usdt = 0;

  for (let key in mcp) {
    if (key === 'USDT') {
      usdt += mcp[key];
    }
  }
  let usdtDominance = (usdt / sum) * 100;




  const totalHolders = Object.values(tokenMetaData).reduce((sum, meta) => sum + (meta.data?.holder || 0), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoWalletSharp className="text-2xl" />
        </div>
        <div className="flex flex-col items-center md:items-start pl-2 md:pl-4 w-full"> {/* Added flex utilities here */}
          <span className="text-xs md:text-sm text-gradient font-normal">Total MarketCap</span>
          <div className="flex items-center justify-center md:justify-start w-full"> {/* Added justify-center for mobile */}
            <strong className="text-lg md:text-xl text-green-500 font-semibold">${formatNumber(sum)}</strong>
          </div>
        </div>
      </BoxWrapper>



      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoStatsChartSharp className="text-2xl" />
        </div>
        <div className="flex flex-col items-center md:items-start pl-2 md:pl-4 w-full">
          <span className="text-xs md:text-sm text-gradient font-normal">MarketCap Change 7D</span>
          <div className="flex items-center justify-center md:justify-start w-full">
            <strong className={`text-lg md:text-xl font-semibold ${percentageChange7d < 0 ? 'text-red-500' : 'text-green-500'}`}>
              {percentageChange7d.toFixed(2)}%
            </strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoTrendingDownSharp className="text-2xl" />
        </div>
        <div className="flex flex-col items-center md:items-start pl-2 md:pl-4 w-full">
          <span className="text-xs md:text-sm text-gradient font-normal">Total Stablecoin Holders</span>
          <div className="flex items-center justify-center md:justify-start w-full">
            <strong className="text-lg md:text-xl text-green-500 font-semibold">{totalHolders}</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoLogoUsd className="text-2xl" />
        </div>
        <div className="flex flex-col items-center md:items-start pl-2 md:pl-4 w-full">
          <span className="text-xs md:text-sm text-gradient font-normal">USDT Dominance</span>
          <div className="flex items-center justify-center md:justify-start w-full">
            <strong className="text-lg md:text-xl text-green-500 font-semibold">{usdtDominance.toFixed(2)}%</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );

}

function BoxWrapper({ children }) {
  return (
    <div className="bg-black-gradient rounded-md p-3 md:p-4 flex flex-col md:flex-row items-center shadow-xl">{children}</div>
  );
}
