import React, { useEffect, useRef, useState } from "react";
import clss from "./Canva.module.css";
import Tooltip from "./Tooltip";

const Canva = (props) => {
  const canva = useRef(null);
  const [datasetVisibility, setDatasetVisibility] = useState(
    Array(2).fill(true)
  );
  const [tooltip, setTooltip] = useState(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const datasets = props.dataSet;

  const gradientColor = (color, factor) => {
    const ctx = canva.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, color);
    gradient.addColorStop(factor, lightenColor(color, 0.4));
    return gradient;
  };

  const lightenColor = (color, factor) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const newR = Math.min(255, r + (255 - r) * factor);
    const newG = Math.min(255, g + (255 - g) * factor);
    const newB = Math.min(255, b + (255 - b) * factor);
    return `rgb(${newR.toFixed(0)}, ${newG.toFixed(0)}, ${newB.toFixed(0)})`;
  };

  useEffect(() => {
    const canvas = canva.current;
    const context = canvas.getContext("2d");

    // toul wel 3ardh
    canvas.width = 700;
    canvas.height = 400;

    const maxValue = Math.max(
      ...datasets.flatMap((dataset) => dataset.data.map((item) => item.amount))
    );

    //  background
    context.beginPath();
    for (let i = 1; i <= 5; i++) {
      const y = 370 - (i / 5) * 350;
      context.moveTo(60, y);
      context.lineTo(660, y);
    }
    context.strokeStyle = "rgba(0, 0, 0, 0.1)";
    context.stroke();

    // x-axis labels
    context.fillStyle = "#333";
    context.font = "16px 'Courier New', Courier, monospace";
    datasets[0].data.forEach((item, index) => {
      const x = 60 + index * 100 + 50;
      const y = 390;
      context.fillText("-", x - 5, y + 5);
      context.fillText(item.label, x, y + 5);
    });

    // Draw y-axis labels
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillStyle = "#333";
    context.font = "14px sans feria";
    for (let i = 0; i <= maxValue; i += 20) {
      const x = 50;

      const y = 370 - (i / maxValue) * 350;
      context.save();
      context.translate(x, y);
      context.rotate(-Math.PI / 2);
      context.fillText(i.toString(), 0, 0);
      context.restore();
    }

    // bars
    datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((item, index) => {
        if (datasetVisibility[datasetIndex]) {
          const gradient = gradientColor(item.color, 0.5);
          context.fillStyle = gradient;
          const barHeight = (item.amount / maxValue) * 350;
          const x = 80 + index * 100 + datasetIndex * 40;

          const y = 370 - barHeight;

          const barWidth = 40;

          context.fillRect(x, y, barWidth, barHeight);

          //check if the mouse is over the current bar
          if (
            mouseX >= x &&
            mouseX <= x + barWidth &&
            mouseY >= y &&
            mouseY <= y + barHeight
          ) {
            //show tooltip
            setTooltip({
              x: mouseX + 10,
              y: mouseY - 10,
              label: item.label,
              value: item.amount,
              color: item.color,
            });
          }
        }
      });
    });
  }, [datasetVisibility, mouseX, mouseY]);

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
        {...props}
        ref={canva}
        onMouseMove={(e) => {
          const rect = canva.current.getBoundingClientRect();
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
              style={{
                backgroundColor: dataset.data[0].color,
                opacity: datasetVisibility[datasetIndex] ? 1 : 0.3,
              }}
              onClick={() => toggleDatasetVisibility(datasetIndex)}
            ></div>
            <span className={clss.legendLabel}>{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canva;
