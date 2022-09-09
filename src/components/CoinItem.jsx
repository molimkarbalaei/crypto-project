// we devide the components into two parts

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
// for fill the start we use these 4 lines:
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();
  // **** we want to save the coins:

  // file path we save in in the firebase as a specific data:
  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("you need to login first");
    }
  };

  return (
    //tr = table row
    <tr className="h-[80px] border-b overflow-hidden">
      {/* avali stare dovomi cap rank sevomi namade coin va esmesh  */}
      <td onClick={saveCoin} className="cursor-pointer">
        {/* add dynamic start fillig: */}
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        {/*  here we put dynamic link to link name to a description of coin: */}
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      {/* red if is negetive green if is positive:*/}
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>

      {/* baraye in ke nemudari neshun bede as package react sparkline estefade mikonim */}
    </tr>
  );
};

export default CoinItem;

// we want to add dynamic coin data to the table
