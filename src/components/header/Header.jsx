import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import "./Header.scss";
import { Modal } from "../modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="main-header">
      <div className="left-item">
        <FaChevronLeft />
      </div>
      <div className="center-heading">
        <h1>Bitcoin Wallet</h1>
      </div>
      <div className="right-item">
        <SlOptionsVertical
          onClick={openModal}
        ></SlOptionsVertical>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};
