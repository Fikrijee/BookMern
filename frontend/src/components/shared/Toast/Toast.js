import React from "react";
import "./Toast.css";

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast-message ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Toast;
