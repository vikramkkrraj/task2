import React, { useState } from "react";
import "./Card.scss";
import { FaAngleDown } from "react-icons/fa6";
import { BsCurrencyBitcoin } from "react-icons/bs";

export const Card = () => {
  const [show, setShow] = useState(false);

  function toogle() { setShow(!show)};
  return (
    <div className="main-card">
      <div className="card-header">
        <div className="header-left-item">
          <div className="bitcoin">
            <BsCurrencyBitcoin />
          </div>
          <p>Bitcoin</p>
        </div>
        <div className="header-right-item">BTC</div>
      </div>
      <div className="header-middle-item">
        <h1 className="h1">3.529000 BTC</h1>
        <div className="header-middle-main-item">
          <div className="left-middle-item">$ 19.153 USD</div>
          <div className="right-middle-item">-2.32%</div>
        </div>
      </div>
      <div className={`card-footer `}>
        <FaAngleDown onClick={toogle}/>
        <div className={`content ${show ? 'visible' : ''}` }>
          <button className='button'>Sell</button>
          <button className='button'>Buy</button>
        </div>
      </div>
    </div>
  );
};
