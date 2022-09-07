// add dynamic routes: so when we click we will have different routes.

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

function CoinPage() {
  // it takes object as a parameter
  const [coin, setCoin] = useState({});

  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
    // we want to run it whenever the url changes
  }, [url]);

  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} Price</p>
          {/* **********put every thing to uppercase */}
          <p>({coin.symbol?.toUpperCase()}) / USD</p>
        </div>
      </div>
      {/* ************next part for usd and format it: */}
      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>$ {coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>

          {/* ******market cap and formated */}
          <div>
            <div>
              <p>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.market_cap.usd.toLocaleString()} USD</p>
              ) : null}
            </div>

            {/* ********the volum */}
            <div>
              <p>Volume</p>
              {coin.market_data?.total_volume ? (
                <p>{coin.market_data.total_volume.usd.toLocaleString()} USD</p>
              ) : null}
            </div>
          </div>

          {/* ******* 24h high , 24h low  */}
          <div>
            <div>
              <p>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>{coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>{coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* market stats */}
        <div>
          <p>Market Stats</p>
          <div>
            <div>
              <p>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          {/* Price change 24h 48h and  */}
          <div>
            <div>
              <p>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (7d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_7d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
          </div>
          {/* change monthly */}
          <div>
            <div>
              <p>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (1y)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_1y.toFixed(2)}% USD
                </p>
              ) : null}
            </div>
          </div>
          {/* having our icons */}
          <div>
            <FaTwitter />
            <FaFacebook />
            <FaGithub />
            <FaReddit />
          </div>
        </div>
      </div>

      {/*  About the Coin */}
      <div>
        <div>
          <p>About the {coin.name}</p>
          {/*  we use dom purify package */}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default CoinPage;
