import React from "react";
import { createPortal } from "react-dom";

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
    maxHeight: "90vh",
    maxWidth: "95vw",
    width: "80%", // Make the modal wider (80% of the viewport width)
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    overflowY: "auto",
    display: "flex", // Flexbox layout to align image and text side by side
    gap: "20px", // Space between image and text
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
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>
          &times;
        </button>
        {children} {/* This is where the image and text content goes */}
      </div>
    </>,
    document.getElementById("modal")!
  );
}
