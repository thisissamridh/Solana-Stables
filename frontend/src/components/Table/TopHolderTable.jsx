import React, { useContext, useRef } from 'react'; // added useRef import
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext'; // replace with the correct path to your DataContext
import addressData from './addressData.json';
import './table.css';
const TopHolderTable = ({ coinName }) => {
    const { holderTopData, loadMore } = useContext(DataContext);
    const recentOrderData = holderTopData[coinName]?.data?.result;


    const getAddressName = (address) => {
        return addressData.address[address] || addressData.program[address] || addressData.hacker[address] || addressData.trust_token[address] || address;
    };

    const tableRef = useRef(null); // added this line

    if (!recentOrderData) {
        return null;
    }

    return (
        <div className="bg-black-gradient px-4 pt-3 pb-4 rounded-md  flex-1 shadow-xl scrollbar-hide">
            <strong className="text-white-700 font-bold text-gradient">Top {recentOrderData.length} {coinName} Holders</strong>
            <div className="overflow-x-auto overflow-y-auto h-64 rounded-sm mt-3 scrollbar-hide " ref={tableRef}> {/* updated this line */}
                <table className="w-full text-white-700">
                    <thead className='bg-black-gradient '>
                        <tr>
                            <th className='text-center sticky top-0 bg-black z-10  '>Rank</th>
                            <th className='text-center sticky top-0 bg-black z-10'>Address</th>
                            <th className='text-center sticky top-0 bg-black z-10'>Owner</th>
                            <th className='text-center sticky top-0 bg-black z-10'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((holder) => (
                            <tr key={holder.rank}>
                                <td className='text-center'>{holder.rank}</td>
                                <td className='text-center'>
                                    <Link to={`https://solscan.io/account/${holder.address}`}>
                                        {getAddressName(holder.address)}
                                    </Link>
                                </td>
                                <td className='text-center'>
                                    <Link to={`https://solscan.io/account/${holder.owner}`}>
                                        {getAddressName(holder.owner)}
                                    </Link>
                                </td>
                                <td className='text-center'>{holder.amount / Math.pow(10, holder.decimals)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-3">
                <button
                    onClick={() => {
                        loadMore(coinName);
                        tableRef.current.scrollTop = tableRef.current.scrollHeight;
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Load More
                </button>
            </div>
        </div>
    );
}

export default TopHolderTable;





