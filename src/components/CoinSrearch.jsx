// create file name coin search:
// look for any type of coins in the database

import React from "react";

import CoinItem from "./CoinItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CoinSrearch({ coins }) {
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search a Coin" />
        </form>
      </div>
      {/* we would have our table */}

      <table>
        <thead>
          <tr>
            {/*  if there is no coin show skeleton other wise show coins */}
            {/* !coin ? (skeleton ) :( hame row ha) */}

            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// we use react sparkline to show the graph
// npm install react-sparklines
