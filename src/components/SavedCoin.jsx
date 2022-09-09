import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
// some logics that connect with firebase

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {/* add some state in here + some logics */}
      {coins?.length === 0 ? (
        <p>
          You have no saved coins. Please add some.
          <Link to="/">Click here to search coins</Link>
        </p>
      ) : (
        // a table that shows our saved coins:
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbbody>
            {coins.map((coin) => {
              <tr className="h-[60px] overflow-hidden" key={coin.id}>
                <td>{coin?.rank}</td>
                {/* we want to click and go to that coin: */}
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center ">
                      <img className="w-8 mr-4" src={coin?.image} alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose className="curser-ponter" />
                </td>
              </tr>;
            })}
          </tbbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
