// add dynamic routes: so when we click we will have different routes.
//1- we have to use useParms hook to get the id of the coin we clicked on.
// so we can use it to fetch the data of that coin.

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

function CoinPage() {
  // it takes object as a parameter
  const [coin, setCoin] = useState({});
  // 2- add useParms hook to get the id of the coin we clicked on:
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
    // we want to run it whenever the url changes
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold">{coin?.name} Price</p>
          {/* **********put every thing to uppercase */}
          <p>({coin.symbol?.toUpperCase()}) / USD</p>
        </div>
      </div>

      {/* ************next part for usd and format it: */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between ">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>

          {/* ******market cap and formated */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.market_cap.usd.toLocaleString()} USD</p>
              ) : null}
            </div>

            {/* ********the volum */}
            <div>
              <p className="text-gray-500 text-sm">Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()} USD</p>
              ) : null}
            </div>
          </div>

          {/* ******* 24h high , 24h low  */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* market stats */}
        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          {/* Price change 24h 48h and  */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (7d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_7d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
          </div>
          {/* change monthly */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (1y)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_1y.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
          </div>
          {/* having our icons */}
          <div className="flex justify-around p-8 text-accent ">
            <FaTwitter />
            <FaFacebook />
            <FaGithub />
            <FaReddit />
          </div>
        </div>
      </div>

      {/*  About the Coin */}

      <div className="py-4">
        <p className="text-xl font-bold ">About the {coin.name}</p>
        {/*  ****we use dom purify package: for format the text */}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
}

export default CoinPage;
