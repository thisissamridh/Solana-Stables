


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import addressData from './addressData.json';
const TopHoldersSummaryTable = () => {
  const { holderTopData, tokenMetaData } = useContext(DataContext);

  const getAddressName = (address) => {
    return addressData.address[address] || addressData.program[address] || addressData.hacker[address] || addressData.trust_token[address] || address;
  };

  // Extract the top holder for each coin
  const topHolders = Object.entries(holderTopData)
    .map(([coin, data]) => {
      const topHolder = data?.data?.result?.[0];
      if (topHolder) {
        return {
          ...topHolder,
          coinName: coin // Attach the coin name here
        };
      }
      return null;
    })
    .filter(holder => !!holder) // Removing any undefined/null entries
    .sort((a, b) => {
      const holderA = tokenMetaData[a.coinName]?.data?.holder || 0;
      const holderB = tokenMetaData[b.coinName]?.data?.holder || 0;
      return holderB - holderA; // Sort in descending order
    });
  // console.log("Top Holders:", topHolders);

  if (!topHolders.length) {
    return null;
  }
  return (
    <div className="bg-black-gradient px-4 pt-3 pb-4 rounded-md flex-1 shadow-xl scrollbar-hide">
      <strong className="text-white-700 font-bold text-gradient">Top Holders of Each Stablecoin</strong>
      <div className="overflow-x-auto overflow-y-auto h-64 rounded-sm mt-3">
        <table className="w-full text-white-700">
          <thead className='bg-black-gradient'>
            <tr>
              <th className='text-center'>Coin</th>
              <th className='text-center'>Symbol</th>
              <th className='text-center'>Address</th>
              <th className='text-center'>Owner</th>
              <th className='text-center'>Quantity</th>
              <th className='text-center'>Total Holders</th> {/* New column header */}
            </tr>
          </thead>
          <tbody>
            {topHolders.map((holder) => {
              // console.log("Metadata for", holder.coinName, ":", tokenMetaData[holder.coinName]);
              return (
                <tr key={holder.address}>
                  <td className='text-center'>{holder.coinName}</td>
                  <td className='text-center'>
                    <img src={tokenMetaData[holder.coinName]?.data?.icon} alt={holder.coinName} className="inline-block h-5 w-5" />

                  </td>
                  <td className='text-center'>
                    <Link to={`https://solscan.io/account/${holder.address}`} target="_blank" rel="noopener noreferrer">
                      {getAddressName(holder.address)}
                    </Link>
                  </td>
                  <td className='text-center'>
                    <Link to={`https://solscan.io/account/${holder.owner}`} target="_blank" rel="noopener noreferrer">
                      {getAddressName(holder.owner)}
                    </Link>
                  </td>
                  <td className='text-center'>{holder.amount / Math.pow(10, holder.decimals)}</td>
                  <td className='text-center'>
                    {tokenMetaData[holder.coinName]?.data?.holder} {/* Display the holder count from tokenMetaData */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopHoldersSummaryTable;
