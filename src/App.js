import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Coin from "./routes/coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(coins);
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
