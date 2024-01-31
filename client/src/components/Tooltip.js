import React from "react";
import clss from "./Tooltip.module.css"; // You can create a separate CSS module for styling

const Tooltip = ({ x, y, label, value, color }) => {
  return (
    <div className={clss.tooltip} style={{ left: x, top: y }}>
      <div style={{ backgroundColor: color }} className={clss.tooltipColor}></div>
      <div className={clss.tooltipText}>
        <strong>{label}</strong>: {value}
      </div>
    </div>
  );
};

export default Tooltip;