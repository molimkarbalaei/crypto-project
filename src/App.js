import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import axios from "axios";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  // using axios to make request to the api:
  // comback as a emprt array:
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true";
  //we wanna use useEffect to api call:
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data);
    });
  }, [url]);
  // AuthContextProvider
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

// Language: javascript
// first stage:
// install tailwindcss
// we use react router dom: so we need to install react router dom

// **we have:
// count page
//coin page
// home page
// sign in page (login page)
// sign up page (register page)

// **nav bar:
// it is in app.js
// because we want to use it in all pages not only in home page
// mobile menu + navbar + sign in + sign up

// create file name coin search:
//

//*** using router 6 */
// using axios to make request to the api
// we need to install axios

// add dynamic routes: so when we click we will have different routes.
