// import React, { useContext } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { DataContext } from '../context/DataContext';

// const Dev = () => {
//     const { holderData } = useContext(DataContext);
//     const USTCData = holderData['USDT'];
//     console.log("USTCData", USTCData);

//     let chartData = [];
//     if (USTCData && Array.isArray(USTCData.TotalHolders)) {
//         chartData = USTCData.TotalHolders.map(entry => ({
//             date: new Date(entry.datetime * 1000).toISOString().split('T')[0],
//             totalHolders: entry.total,
//         }));
//     }

//     return (
//         <LineChart
//             width={500}
//             height={300}
//             data={chartData}
//             margin={{
//                 top: 5, right: 30, left: 20, bottom: 5,
//             }}
//         >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="totalHolders" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//     );
// };

// export default Dev;


// total wrong 
// import React, { useContext } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { DataContext } from '../context/DataContext';

// const Dev = () => {
//     const { holderData } = useContext(DataContext);

//     let chartData = [];

//     for (const coinName in holderData) {
//         const coinData = holderData[coinName];

//         if (coinData && Array.isArray(coinData.TotalHolders)) {
//             coinData.TotalHolders.forEach((entry, index) => {
//                 const date = new Date(entry.datetime * 1000).toISOString().split('T')[0];
//                 const totalHolders = entry.total;

//                 if (chartData[index]) {
//                     if (chartData[index].date === date) {
//                         chartData[index].totalHolders += totalHolders;
//                     } else {
//                         chartData.push({ date, totalHolders });
//                     }
//                 } else {
//                     chartData.push({ date, totalHolders });
//                 }
//             });
//         }
//     }

//     return (
//         <LineChart
//             width={500}
//             height={300}
//             data={chartData}
//             margin={{
//                 top: 5, right: 30, left: 20, bottom: 5,
//             }}
//         >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="totalHolders" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//     );
// };


// export default Dev;



// import React, { useEffect, useContext } from 'react';
// import HolderChart from '../components/Charts/Holderchart';
// import { fetchwalletDisdata } from '../api/walletDistributionApi';
// import { DataContext } from '../context/DataContext';

// const Dev = () => {
//     const { walletDisData } = useContext(DataContext);

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const data = await fetchwalletDisdata('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');
//             console.log("API Data:", data);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
//     fetchData();
// }, []);

//     console.log("Wallet Distribution Data:", walletDisData);

//     return (
//         <div>
//             {/* Render your components or charts */}
//             <HolderChart coinName='USDT' />
//             <HolderChart coinName='USDC' />
//         </div>
//     );
// };

// export default Dev;










import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Walletfunds from '../components/Charts/Walletfunds'
const WalletDistDataDisplay = () => {
    const { walletDistData } = useContext(DataContext);
    console.log("Wallet Distribution Data:", walletDistData);

    return (
        <div>
            {/* <Walletfunds coinName='USDT' />
            <Walletfunds /> */}
        </div>
    );
};

export default WalletDistDataDisplay;


