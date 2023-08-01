import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import formatNumber from '../utils/FormatNumber';
import { FaChartPie, FaCoins, FaUsers, FaVolumeUp, FaIdCard, FaGavel } from 'react-icons/fa';

export default function CombinedComponent() {
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
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
        <strong className="text-white-700 font-large text-2xl text-gradient">Market Overview</strong>
        <div className="mt-4 w-full flex-1 text-md">
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaChartPie className="mr-2 text-gradient " />
            Market Cap: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="py-4 px-4 text-xl font-bold flex items-center  rounded-xl  ">
            <FaCoins className="mr-2 " />
            Current Supply: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center ">
            <FaUsers className="mr-2 " />
            Total Holder: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  ">
            <FaVolumeUp className="mr-2 text-red -500" />
            Volume: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
        <strong className="text-white-700 font-large text-2xl text-gradient">Profile Summary</strong>
        <div className="mt-4 w-full flex-1 text-md">
        <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaIdCard className="mr-2 text-blue -500" />
            Token Name: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaCoins className="mr-2 text-yellow -500" />
            Token address: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaUsers className="mr-2 text-green -500" />
            Owners Program: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaGavel className="mr-2 text-red -500" />
            Authority: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>
          <div className="px-4 py-3 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaVolumeUp className="mr-2 text-purple -500" />
            Decimal: <p className='font-light px-2'>{formatNumber(totalMarketCap)}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
