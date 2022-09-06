import React from "react";
import CoinSrearch from "../components/CoinSrearch";
import Trending from "../components/Trending";

function Home({ coins }) {
  //home ro mikhaym be coin search bedim
  // khode coins mishe props
  // function Home(props) {
  return (
    <div>
      <CoinSrearch coins={coins}></CoinSrearch>
      <Trending />
    </div>
  );
}

export default Home;
