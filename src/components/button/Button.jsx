import React from 'react';
import { LiaDollarSignSolid } from "react-icons/lia";
import './Button.scss';

export const Button = ({ props, color }) => {

  console.log(color)

  const gradientStyle = {
    background: `linear-gradient(${color[0]},${color[1]})`,
  };

  return (
    <div className='main-btn'>
      <div className='dollar'>
      <LiaDollarSignSolid  className='simbole' style={gradientStyle} />
      <p className='children-name'>{props}</p>
      </div>
    </div>
  )
}
