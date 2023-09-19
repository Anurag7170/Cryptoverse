import React, { useState } from "react";
import CoinItem from "../Component/CoinItem";
import "../Component/coins.css";
import Coin from "../routes/coin";
import { Link } from "react-router-dom";

function Homepage(props) {
  console.log(props.coins);
  return (
    <div>
      <div className="container">
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hide-mobile">Volume</p>
            <p className="hide-mobile">Mkt Cap</p>
          </div>

          {props.coins.map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
