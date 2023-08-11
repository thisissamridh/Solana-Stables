import React from 'react';
// import { Link } from 'react-router-dom';

const recentData = [

  {
    id: '1',
    Exchange: 'Coming soon',
    Pair: 'Coming soon',
    Price: 'Coming soon',
    TVL: 'Coming soon',
    'TVLs': 'Coming soon',
    'Volume-24h': 'Coming soon',
    'Last Trade': 'Coming soon',
  },
  // Add more data here...
];

export default function LiquidityMarket() {
  return (
    <div className="bg-black-gradient px-4 pt-3 pb-4 rounded-md flex-1 shadow-xl">
      <strong className="text-white-700 font-bold text-gradient text-lg">Liquidity Market</strong>
      <div className="rounded-sm mt-3 overflow-x-auto">
        <table className="w-full text-white-700 ">
          <thead className="bg-black-gradient">
            <tr>
              <th>ID</th>
              <th>Exchange</th>
              <th>Pair</th>
              <th>Price</th>
              <th>TVL</th>
              <th>TVLs</th>
              <th>Volume-24h</th>
              <th>Last Trade</th>
            </tr>
          </thead>
          <tbody>
            {recentData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.Exchange}</td>
                <td>{order.Pair}</td>
                <td>{order.Price}</td>
                <td>{order.TVL}</td>
                <td>{order['TVLs']}</td>
                <td>{order['Volume-24h']}</td>
                <td>{order['Last Trade']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
