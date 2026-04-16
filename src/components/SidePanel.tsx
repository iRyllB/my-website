import React from "react";
import "../styles/SidePanel.css";

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ open, onClose, children }) => {
  return (
    <div className={`side-panel${open ? " open" : ""}`}>
      <div className="side-panel-overlay" onClick={onClose}></div>
      <div className="side-panel-content">
        <button className="side-panel-close" onClick={onClose} aria-label="Close menu">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default SidePanel;
