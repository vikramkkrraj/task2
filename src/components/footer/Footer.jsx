import React from "react";
import "./Footer.scss";
import { IoWalletSharp } from "react-icons/io5";
import { FaCompass } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className="container">
      <IoWalletSharp />
      <FaCompass style={{ color: "#AEB8C4" }} />
      <IoMdNotifications style={{ color: "#AEB8C4" }} />
      <IoSettingsSharp style={{ color: "#AEB8C4" }} />
    </div>
  );
};
