import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import formatNumber from '../utils/FormatNumber';
import { FaChartPie, FaCoins, FaUsers, FaVolumeUp, FaIdCard, FaGavel } from 'react-icons/fa';

export default function CombinedComponent({ coinName }) {
  const { individualCoinMcpData, statsData, programDetailsData, tokenMetaData } = useContext(DataContext);

  let marketcap = null;
  let coinMetadata = null;
  let programDetails = null;
  let stats = null;

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  if (individualCoinMcpData && individualCoinMcpData.length > 0) {
    const latestData = individualCoinMcpData[individualCoinMcpData.length - 1];
    marketcap = latestData[coinName] ?? 'N/A';
  }

  if (tokenMetaData) {
    coinMetadata = tokenMetaData[coinName] ?? {};
  }

  if (programDetailsData) {
    programDetails = programDetailsData[coinName] ?? {};
  }

  if (statsData && statsData[coinName]) {
    stats = statsData[coinName].data[0] ?? {};
  }

  function formatSupply(supply, decimals) {
    if (supply === undefined || decimals === undefined) return 'N/A';

    // Assuming supply is a number or string and decimals is an integer
    const factor = Math.pow(10, decimals);
    return Number(supply) / factor;
  }
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
        <strong className="text-white-700 font-large text-2xl text-gradient">Market Overview</strong>
        <div className="mt-4 w-full flex-1 text-md">
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaChartPie className="mr-2 text-gradient " />
            Market Cap: <p className='font-light px-2'>{formatNumber(marketcap)}</p>
          </div>
          <div className="py-4 px-4 text-xl font-bold flex items-center  rounded-xl  ">
            <FaCoins className="mr-2 " />
            Max Supply (FDMC): <p className='font-light px-2'>{formatSupply(programDetails?.tokenInfo?.supply, programDetails?.tokenInfo?.decimals)}</p>

          </div>
          <div className="p-4 text-xl font-bold flex items-center ">
            <FaUsers className="mr-2 " />
            Total Holder: <p className='font-light px-2'>{coinMetadata?.data?.holder ?? 'N/A'}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  ">
            <FaVolumeUp className="mr-2 text-red -500" />
            Volume: <p className='font-light px-2'>{formatNumber(stats?.volume ?? 'N/A')}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
        <strong className="text-white-700 font-large text-2xl text-gradient">Profile Summary</strong>
        <div className="mt-4 w-full flex-1 text-md">
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaIdCard className="mr-2 text-blue -500" />
            Token Name: <p className='font-light px-2'>{coinMetadata?.data?.name ?? 'N/A'}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center rounded-xl w-50 ">
            <FaCoins className="mr-2 text-yellow-500" />
            Token address:
            <a
              href={`https://solscan.io/account/${coinMetadata?.data?.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className='font-light px-2'>
              {truncateString(coinMetadata?.data?.address ?? 'N/A', 27)}
            </a>
          </div>
          <div className="p-4 text-xl font-bold flex items-center rounded-xl w-50 ">
            <FaUsers className="mr-2 text-green-500" />
            Owners Program:
            <a
              href={`https://solscan.io/account/${programDetails?.ownerProgram}`}
              target="_blank"
              rel="noopener noreferrer"
              className='font-light px-2'>
              {truncateString(programDetails?.ownerProgram ?? 'N/A', 27)}
            </a>
          </div>
          <div className="p-4 text-xl font-bold flex items-center rounded-xl w-50 ">
            <FaGavel className="mr-2 text-red-500" />
            Authority:
            <a
              href={`https://solscan.io/account/${programDetails?.tokenInfo?.tokenAuthority}`}
              target="_blank"
              rel="noopener noreferrer"
              className='font-light px-2'>
              {truncateString(programDetails?.tokenInfo?.tokenAuthority ?? 'N/A', 27)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className="w-full h-[22rem] bg-black-gradient p-4 flex flex-col shadow-xl rounded-lg">
        <strong className="text-white-700 font-large text-2xl text-gradient">Profile Summary</strong>
        <div className="mt-4 w-full flex-1 text-md">
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaIdCard className="mr-2 text-blue -500" />
            Token Name: <p className='font-light px-2'>{formatNumber(2)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaCoins className="mr-2 text-yellow -500" />
            Token address: <p className='font-light px-2'>{formatNumber(2)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaUsers className="mr-2 text-green -500" />
            Owners Program: <p className='font-light px-2'>{formatNumber(2)}</p>
          </div>
          <div className="p-4 text-xl font-bold flex items-center  rounded-xl w-50 ">
            <FaGavel className="mr-2 text-red -500" />
            Authority: <p className='font-light px-2'>{formatNumber(2)}</p>
          </div>
        </div>
      </div> */}


//     </div>
//   );
// }
