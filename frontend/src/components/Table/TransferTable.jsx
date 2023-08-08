import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import addressData from './addressData.json';
import { DataContext } from '../../context/DataContext';
const TokenTransferTable = ({ coinName }) => {
    const { transferData, loadMoreTransfers } = useContext(DataContext);
    const getAddressName = (address) => {
        return addressData.address[address] || addressData.program[address] || addressData.hacker[address] || addressData.trust_token[address] || address;
    };

    const aggregateTransferData = !coinName ?
        Object.values(transferData).flatMap(coinData => coinData?.data?.items || []) :
        transferData[coinName]?.data?.items;

    const tableRef = useRef(null);

    const truncateHash = (hash, limit = 8) => {
        if (!hash) return '';
        return `${hash.substring(0, limit)}...${hash.substring(hash.length - limit)}`;
    };

    if (!aggregateTransferData || aggregateTransferData.length === 0) {
        return null;
    }

    return (
        <div className="bg-black-gradient px-4 pt-3 pb-4 rounded-md flex-1 shadow-xl">
            <strong className="text-white-700 font-bold text-gradient">{coinName ? `Token Transfers for ${coinName}` : 'Token Transfers for All Coins'}</strong>
            <div className="overflow-x-auto overflow-y-auto h-64 rounded-sm mt-3" ref={tableRef}>
                <table className="w-full text-white-700">
                    <thead className='bg-black-gradient '>
                        <tr>
                            <th className='text-center'>S.No</th>
                            {!coinName && <th className='text-center'>Coin Name</th>}
                            <th className='text-center'>Transaction Signature</th>
                            <th className='text-center'>Source Token Account</th>
                            <th className='text-center'>Destination Token Account</th>
                            <th className='text-center'>Amount</th>
                            <th className='text-center'>Creation Time (UTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aggregateTransferData.map((transfer, index) => (
                            <tr key={transfer._id}>
                                <td className='text-center'>{index + 1}</td>
                                {!coinName && <td className='text-center'>
                                    <img src={transfer.icon} className="inline-block h-5 w-5" alt='' />
                                    <span className="ml-2">{transfer.symbol}</span>
                                </td>}
                                <td className='text-center'>
                                    <Link to={`https://solscan.io/tx/${transfer.txHash}`} target="_blank" rel="noopener noreferrer">
                                        {truncateHash(transfer.txHash)}
                                    </Link>
                                </td>
                                <td className='text-center'>
                                    <Link to={`https://solscan.io/tx/${transfer.sourceTokenAccount}`} target="_blank" rel="noopener noreferrer">
                                        {truncateHash(getAddressName(transfer.sourceTokenAccount))}
                                    </Link>
                                </td>
                                <td className='text-center'>
                                    <Link to={`https://solscan.io/tx/${transfer.destTokenAccount}`} target="_blank" rel="noopener noreferrer">
                                        {truncateHash(getAddressName(transfer.destTokenAccount))}
                                    </Link>
                                </td>
                                <td className='text-center'>{transfer.amountUI}</td>
                                <td className='text-center'>{new Date(transfer.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-3">
                <button
                    onClick={() => {
                        loadMoreTransfers();
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

export default TokenTransferTable;
