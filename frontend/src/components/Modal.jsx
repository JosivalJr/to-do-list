import React from "react";
import { FaWindowClose } from "react-icons/fa";

export default function Modal({ isOpen, setOpenModal, children }) {
  if (isOpen) {
    return (
      <div className="modal-mask">
        <div className="modal">
          <div className="modal-close">
            <button
              className="icon-btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <FaWindowClose color="#ff6565" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }
  return null;
}
