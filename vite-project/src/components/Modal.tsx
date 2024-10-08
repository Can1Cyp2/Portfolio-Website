import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};

export default function Modal({ children, open, onClose }: Props) {
  const MODAL_STYLES: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };

  const OVERLAY_STYLES: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 999,
  };

  const CLOSE_BUTTON_STYLES: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#333",
  };

  if (!open) return null;

  return createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div className="modal" style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal")!
  );
}
