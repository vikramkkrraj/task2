import React, { useState } from "react";
import { Chart } from "./../Chart/Chart";
import "./Navbar.scss";

export const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("week");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="main-container">
        <ul className="list-item">
          <li onClick={() => handleOptionChange("day")}  >Day</li>
          <li onClick={() => handleOptionChange("week")} >Week</li>
          <li  onClick={() => handleOptionChange("month")}>
            Month
          </li>
          <li  onClick={() => handleOptionChange("year")}>
            Year
          </li>
        </ul>
      </div>
      <Chart selectedOption={selectedOption} />
    </>
  );
};
