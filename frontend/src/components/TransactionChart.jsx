import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StablecoinChart() {
  const [data, setData] = useState([]);
  const stablecoins = [
    { id: 1, name: 'USDT' },
    { id: 2, name: 'USDC' },
    { id: 16, name: 'PAI' },
    { id: 64, name: 'UXD' },
    { id: 65, name: 'USDH' },
    { id: 36, name: 'USDR' },
    { id: 111, name: 'DAI' },
    { id: 57, name: 'USH' },
    { id: 24, name: 'CUSD' },
    { id: 3, name: 'USTC' },
    { id: 4, name: 'BUSD' },
  ];

  useEffect(() => {
    const fetchStablecoinData = async () => {
      try {
     
        const fetchData = async (stablecoinId) => {
          const response = await axios.get(`https://stablecoins.llama.fi/stablecoincharts/solana?stablecoin=${stablecoinId}`);
          const formattedData = response.data.map(entry => ({
            date: new Date(entry.date * 1000).toISOString().split('T')[0],
            [stablecoinId]: entry.totalCirculating.peggedUSD,
          }));
          return formattedData;
        };

        const promises = stablecoins.map(stablecoin => fetchData(stablecoin.id));
        const results = await Promise.all(promises);
        const combinedData = results.reduce((acc, curr, index) => {
          curr.forEach(entry => {
            const existingEntryIndex = acc.findIndex(accEntry => accEntry.date === entry.date);
            if (existingEntryIndex > -1) {
              acc[existingEntryIndex] = { ...acc[existingEntryIndex], ...entry };
            } else {
              acc.push(entry);
            }
          });
          return acc;
        }, []);
        
        const labeledData = combinedData.map(entry => {
          const labeledEntry = { date: entry.date };
          stablecoins.forEach((stablecoin, index) => {
            labeledEntry[stablecoin.name] = entry[stablecoin.id];
          });
          return labeledEntry;
        });

        setData(labeledData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStablecoinData();
  }, );

  const getColor = (stablecoinId) => {
    switch (stablecoinId) {
      case 1:
        return '#8884d8'; // USDT color
      case 2:
        return '#82ca9d'; // USDC color
      case 16:
        return '#ffc658'; // PAI color
      case 64:
        return '#ff00ff'; // UXD color
      case 65:
        return '#0000ff'; // USDH color
      case 36:
        return '#00ffff'; // USDR color
      case 111:
        return '#ff0000'; // DAI color
      case 57:
        return '#008000'; // USH color
      case 24:
        return '#ffa500'; // CUSD color
      case 3:
        return '#800080'; // USTC color
      case 4:
        return '#a52a2a'; // BUSD color
      default:
        return '#000000'; // Default color
    }
  };

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Stablecoin Market Cap</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            
            {stablecoins.map(stablecoin => (
              <Line
                key={stablecoin.id}
                type="monotone"
                dataKey={stablecoin.name}
                stroke={getColor(stablecoin.id)}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}