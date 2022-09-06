// create file name coin search:
// look for any type of coins in the database

import React from "react";
import { useState } from "react";

import CoinItem from "./CoinItem";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export default function CoinSrearch({ coins }) {
  // styling search box:
  const [searchText, setSearchText] = useState("");

  return (
    <div className=" rounded-div my-4 ">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          {/* add search handler */}
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-md"
            type="text"
            placeholder="Search a Coin"
          />
        </form>
      </div>
      {/* we would have our table */}

      <table className="w-full border-collapse text-center ">
        <thead>
          <tr className="border-b ">
            {/*  if there is no coin show skeleton other wise show coins */}
            {/* !coin ? (skeleton ) :( hame row ha) */}
            {/* {!coins ? (
              <Skeleton count={100} height={50} />
            ) : (
              <> */}
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
            {/* </>
            )} */}
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                // we want to put everything lowercase
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

// we use react sparkline to show the graph
// npm install react-sparklines
