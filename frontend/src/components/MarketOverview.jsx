import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import formatNumber from '../utils/FormatNumber';
import { FaChartPie, FaCoins, FaUsers, FaVolumeUp } from 'react-icons/fa';

export default function MarketOverview() {
  const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

  // Filter data to get the latest entry for each stablecoin
  const latestData = individualCoinMcpData.reduce((acc, entry) => {
    stablecoinsID.forEach((stablecoin) => {
      if (entry[stablecoin.name]) {
        acc[stablecoin.name] = entry[stablecoin.name];
      }
    });
    return acc;
  }, {});

  // Calculate the total market cap for all coins
  const totalMarketCap = Object.values(latestData).reduce((total, val) => total + val, 0);

  return (
<div className="w-1/2 max-w-[35rem] h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">      <strong className="text-white-700 font-large text-2xl text-gradient">Market Overview</strong>
      <div className="mt-4 w-full flex-1 text-md">
        <div className="p-2 text-lg font-bold flex items-center">
          <FaChartPie className="mr-2  text-blue-500" />
          Market Cap:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaCoins className="mr-2  text-yellow-500" />
          Current Supply:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaUsers className="mr-2  text-green-500" />
          Total Holder:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaVolumeUp className="mr-2  text-red -500" />
          Volume:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
      </div>
    </div>
  );
}
