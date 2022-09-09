import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
// some logics that connect with firebase

// for saved coins we have to connect with firebase **** 3 lines:
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  // we want to have useeffect when ever an email changes:
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  // to remove from saved coins:

  const coinPath = doc(db, "users", `${user?.email}`);
  const deletCoin = async (passedId) => {
    try {
      const result = coins.filter((item) => item.id !== passedId);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          <tbody>
            {coins?.map((coin) => (
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
                  <AiOutlineClose
                    onClick={() => deletCoin(coin.id)}
                    className="curser-ponter"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
