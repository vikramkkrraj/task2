import React from 'react';
import { LiaDollarSignSolid } from "react-icons/lia";
import './Button.scss';

export const Button = ({ props, color }) => {
  return (
    <div className='main-btn'>
      <div className='dollar'>
      <LiaDollarSignSolid  className='simbole' style={{backgroundColor : `${color}`}} />
      <p className='children-name'>{props}</p>
      </div>
    </div>
  )
}
