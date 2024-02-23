import React from "react";
import "./Chart.scss";
import { SimpleAreaChart } from "./SimpleAreaChart";

export const Chart = ({ selectedOption }) => {
  let chartData = null;

  // Logic to set different chartData based on selectedOption
  switch (selectedOption) {
    case "day":
      chartData = {
        lower: 10,
        higher: 20,
      }; // Sample data for day
      break;
    case "week":
      chartData = {
        lower: 70,
        higher: 90,
      }; // Sample data for week
      break;
    case "month":
      chartData = {
        lower: 100,
        higher: 150,
      }; // Sample data for month
      break;
    case "year":
      chartData = {
        lower: 1000,
        higher: 1500,
      }; // Sample data for year
      break;
    default:
      chartData = null;
  }

  return (
    <>
      <div className="main-container-chart">
        <div className="values">
          <div className="left">
            <div className="dot-left"></div>
            <div>Lower ${chartData.lower}</div>
          </div>
          <div className="right">
            <div className="dot-right"></div>
            <div>Higher ${chartData.higher}</div>
          </div>
        </div>

        <SimpleAreaChart selectedOption={selectedOption} />
      </div>
    </>
  );
};
