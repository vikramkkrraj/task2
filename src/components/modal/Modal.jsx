import React from "react";
import { CiEdit } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { CiCircleMinus } from "react-icons/ci";
import "./Modal.scss";
import { BiUpArrow } from "react-icons/bi";

export const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              width: "200px",
              height: "200px",
              position: "absolute",
              top: "calc(50% + -400px)",
              left: "calc(50% - 35px)",
            }}
          >
            <ul
              style={{ listStyleType: "none", padding: 0, fontSize: "small" }}
            >
              <div className="div">
                <li>Edit</li>
                <CiEdit />
              </div>
              <hr />
              <div className="div">
                <li>Courier info</li>
                <BsInfoCircle />
              </div>
              <hr />
              <div className="div">
                <li>Share</li>
                <FiShare />
              </div>
              <hr />
              <div className="div">
                <li style={{ color: "red" }}>Remove</li>
                <CiCircleMinus style={{ color: "red" }} />
              </div>
            </ul>
            <button onClick={onClose} style={{ marginLeft: "70px" }}>
              <BiUpArrow />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
