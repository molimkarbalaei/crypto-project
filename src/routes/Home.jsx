import React from "react";
import CoinSrearch from "../components/CoinSrearch";

function Home({ coins }) {
  //home ro mikhaym be coin search bedim
  // khode coins mishe props
  // function Home(props) {
  return (
    <div>
      <CoinSrearch coins={coins}></CoinSrearch>
    </div>
  );
}

export default Home;
