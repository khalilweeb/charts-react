import React, { useEffect, useRef, useState } from "react";
import clss from "./PieChart.module.css";
import Tooltip from "./Tooltip";


const PieChart = (props) => {
  

const datasets = props.pieData;
  const canvas = useRef(null);
  const [datasetVisibility, setDatasetVisibility] = useState(Array(datasets.length).fill(true));
  const [tooltip, setTooltip] = useState(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    const centerX = canvas.current.width / 3;
    const centerY = canvas.current.height / 3;
    const radius = Math.min(centerX, centerY) - 10;

    const total = datasets.reduce((acc, dataset, datasetIndex) => {
      return acc + (datasetVisibility[datasetIndex] ? dataset.data : 0);
    }, 0);

    let startAngle = 0;

    datasets.forEach((dataset, datasetIndex) => {
      if (datasetVisibility[datasetIndex]) {
        const sliceAngle = (dataset.data / total) * (2 * Math.PI);
        const endAngle = startAngle + sliceAngle;

        // Draw the pie slice with gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, lightenColor(dataset.color, 0));
        gradient.addColorStop(1, dataset.color);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Check if the mouse is over the current slice
        const angleToMouse = Math.atan2(mouseY - centerY, mouseX - centerX);
        const isMouseInSlice = angleToMouse >= startAngle && angleToMouse <= endAngle;

        if (isMouseInSlice) {
          // Show tooltip
          setTooltip({
            x: mouseX + 10,
            y: mouseY - 10,
            label: dataset.label,
            value: dataset.data,
            color: dataset.color,
          });
        }

        startAngle = endAngle;
      }
    });
  }, [datasetVisibility, mouseX, mouseY]);

  const lightenColor = (color, factor) => {
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    };

    const rgbToHex = (r, g, b) => {
      return `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    };

    const { r, g, b } = hexToRgb(color);
    const newR = Math.min(255, r + (255 - r) * factor);
    const newG = Math.min(255, g + (255 - g) * factor);
    const newB = Math.min(255, b + (255 - b) * factor);
    return rgbToHex(newR, newG, newB);
  };

  const toggleDatasetVisibility = (index) => {
    setDatasetVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <div className={clss.chartContainer}>
      <canvas
        className={clss.c}
        ref={canvas}
        width={700} // Set the width of the canvas
        height={400} // Set the height of the canvas
        onMouseMove={(e) => {
          const rect = canvas.current.getBoundingClientRect();
          setMouseX(e.clientX - rect.left);
          setMouseY(e.clientY - rect.top);
        }}
        onMouseLeave={() => setTooltip(null)}
      ></canvas>

      {tooltip && (
        <Tooltip
          x={tooltip.x}
          y={tooltip.y}
          label={tooltip.label}
          value={tooltip.value}
          color={tooltip.color}
        />
      )}

      <div className={clss.legendContainer}>
        {datasets.map((dataset, datasetIndex) => (
          <div key={datasetIndex} className={clss.legendItem}>
            <div
              className={clss.legendColor}
              style={{ backgroundColor: dataset.color, opacity: datasetVisibility[datasetIndex] ? 1 : 0.3 }}
              onClick={() => toggleDatasetVisibility(datasetIndex)}
            ></div>
            <span className={clss.legendLabel}>{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
