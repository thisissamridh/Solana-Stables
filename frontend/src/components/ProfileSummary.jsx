import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import formatNumber from '../utils/FormatNumber';
import { FaIdCard, FaCoins, FaUsers, FaVolumeUp, FaGavel } from 'react-icons/fa';

export default function ProfileSummary() {
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
    <div className="w-full max-w-[35rem] h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
      <strong className="text-white-700 font-large text-2xl text-gradient">Profile Summary</strong>
      <div className="mt-4 w-full flex-1 text-md">
        <div className="p-2 text-lg font-bold flex items-center">
          <FaIdCard className="mr-2 text-blue-500" />
          Token Name:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaCoins className="mr-2 text-yellow-500" />
          Token address:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaUsers className="mr-2 text-green-500" />
          Owners Program: <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaGavel className="mr-2 text-red-500" />
          Authority:  <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
        <div className="p-2 text-lg font-bold flex items-center">
          <FaVolumeUp className="mr-2 text-purple-500" />
          Decimal: <p className=' font-light px-2 '>{formatNumber(totalMarketCap)} </p>
        </div>
       
      </div>
    </div>
  );
}
