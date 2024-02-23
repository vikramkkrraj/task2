import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const SimpleAreaChart = ({ selectedOption }) => {
  let data = null;
  switch (selectedOption) {
    case "day":
      data = [
        {
          uv: 0,
        },
        {
          uv: 700,
        },
        {
          uv: 500,
        },
        {
          uv: 1200,
        },
      ];
      // Sample data for day
      break;
    case "week":
      data = [
        {
          uv: 0,
        },
        {
          uv: 900,
        },
        {
          uv: 800,
        },
        {
          uv: 2200,
        },
      ]; // Sample data for week
      break;
    case "month":
      data = [
        {
          uv: 200,
        },
        {
          uv: 300,
        },
        {
          uv: 700,
        },
        {
          uv: 1000,
        },
      ]; // Sample data for month
      break;
    case "year":
      data = [
        {
          uv: 1000,
        },
        {
          uv: 1500,
        },
        {
          uv: 1000,
        },
        {
          uv: 3000,
        },
      ]; // Sample data for year
      break;
    default:
      chartData = null;
  }

  return (
    <AreaChart
      width={350}
      height={150}
      data={data}
      margin={{
        top: 10,
        right: 20,
        left: 0,
        bottom: 0,
      }}
    >
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#FFD57B" fill="#FF9118" />
    </AreaChart>
  );
};
