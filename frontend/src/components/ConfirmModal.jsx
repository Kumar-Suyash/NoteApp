// ConfirmModal.jsx
import React from "react";
import "../styles/ConfirmModal.css";

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-modal-backdrop">
      <div className="confirm-modal">
        <p className="confirm-message">{message}</p>
        <div className="confirm-buttons">
          <button onClick={onConfirm} className="confirm-btn confirm-yes">
            Yes
          </button>
          <button onClick={onCancel} className="confirm-btn confirm-no">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
