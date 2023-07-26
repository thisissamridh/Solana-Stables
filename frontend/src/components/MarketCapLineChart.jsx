// import React, { useContext } from 'react';
// import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataContext } from '../context/DataContext';
// import { getColor } from '../utils/utils'; // Create a separate file for getColor function

// export default function StablecoinChart() {
//     const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

//     return (
//         <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
//             <strong className="text-white-700 font-medium">Stablecoin Market Cap</strong>
//             <div className="mt-3 w-full flex-1 text-xs">
//                 <ResponsiveContainer width="100%" height="100%">
//                     {individualCoinMcpData.length > 0 ? (
//                         <ComposedChart
//                             data={individualCoinMcpData}
//                             margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
//                         >
//                             <defs>
//                                 <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//                                     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
//                                 </linearGradient>
//                             </defs>
//                             <XAxis dataKey="date" />
//                             <YAxis />
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <Tooltip />
//                             <Legend />

//                             {/* Render the Area components for each stablecoin */}
//                             {stablecoinsID.map(stablecoin => (
//                                 <Area
//                                     key={stablecoin.id}
//                                     type="monotone"
//                                     dataKey={stablecoin.name}
//                                     stroke={getColor(stablecoin.id)}
//                                     fill="url(#gradient)"
//                                     activeDot={{ r: 8 }}
//                                 />
//                             ))}
//                         </ComposedChart>
//                     ) : (
//                         <div>Chart data is loading...</div>
//                     )}
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }


import React, { useContext } from 'react';
import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../context/DataContext';
import { getColor } from '../utils/utils'; // Create a separate file for getColor function

export default function StableCoinLineChart() {
    const { individualCoinMcpData, stablecoinsID } = useContext(DataContext);

    return (
        <div className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl">
            <strong className="text-white-700 font-medium">Stablecoin Market Cap</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    {individualCoinMcpData.length > 0 ? (
                        <ComposedChart
                            data={individualCoinMcpData}
                            margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
                        >
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />

                            {/* Render the Area components for each stablecoin */}
                            {stablecoinsID.map(stablecoin => (
                                <Area
                                    key={stablecoin.id}
                                    type="monotone"
                                    dataKey={stablecoin.name}
                                    stroke={getColor(stablecoin.id)}
                                    fill="url(#gradient)"
                                    activeDot={{ r: 8 }}
                                />
                            ))}
                        </ComposedChart>
                    ) : (
                        <div>Chart data is loading...</div>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}
