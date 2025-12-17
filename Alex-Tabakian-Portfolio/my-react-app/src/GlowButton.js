// GlowButton.jsx
import React, { useEffect, useRef, useState } from "react";
import "./GlowButton.css";

export default function GlowButton({
  children = "Get to the fun side",
  width = 90,
  height = 31,
  radius = 14,
  duration = 20.0,
  strokeWidth = 2,
  overlapAdjust = -1
}) {
  const pathRef = useRef(null);
  const [perimeter, setPerimeter] = useState(0);

  function roundedRectPath(x, y, w, h, r) {
    const rx = Math.min(r, w / 2);
    const ry = Math.min(r, h / 2);
    return [
      `M ${x + rx} ${y}`,
      `H ${x + w - rx}`,
      `A ${rx} ${ry} 0 0 1 ${x + w} ${y + ry}`,
      `V ${y + h - ry}`,
      `A ${rx} ${ry} 0 0 1 ${x + w - rx} ${y + h}`,
      `H ${x + rx}`,
      `A ${rx} ${ry} 0 0 1 ${x} ${y + h - ry}`,
      `V ${y + ry}`,
      `A ${rx} ${ry} 0 0 1 ${x + rx} ${y}`,
      `Z`
    ].join(" ");
  }

  useEffect(() => {
    if (!pathRef.current) return;
    const p = pathRef.current;
    function measure() {
      if (p && typeof p.getTotalLength === "function") {
        setPerimeter(Math.round(p.getTotalLength()));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [width, height, radius, strokeWidth]);

  const inset = Math.ceil(strokeWidth / 2) + 1;
  const rectW = Math.max(0, width - inset * 2);
  const rectH = Math.max(0, height - inset * 2);
  const d = roundedRectPath(inset, inset, rectW, rectH, radius);

  const half = perimeter ? perimeter / 2 : 0;
  const dashLen = perimeter
    ? Math.min(Math.floor(half + Math.round(strokeWidth / 2) + overlapAdjust), Math.floor(perimeter * 0.98))
    : 0;
  const gap = perimeter ? Math.max(1, Math.floor(perimeter - dashLen)) : 1;;
  const startA = 0;
  const startB = perimeter ? Math.round(perimeter / 2) : 0;

  const svgVars = {
    ["--perimeter"]: `${perimeter}px`,
    ["--duration"]: `${duration}s`
  };

  // center for gradient rotation
  const cx = width / 2;
  const cy = height / 2;

  return (
    <button
      className="glow-btn svg-border-btn"
      style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${radius}px` }}
    >
      <span className="label">{children}</span>

      <svg
        className="glow-svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        style={svgVars}
        aria-hidden="true"
      >
        {/* reference path */}
        <path ref={pathRef} d={d} fill="none" stroke="none" strokeWidth={strokeWidth} />

        {perimeter > 0 && (
          <>
            <path
              className="segment"
              d={d}
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeDasharray={`${dashLen} ${gap}`}
              style={{ ["--start-offset"]: `${startA}px` }}
            />
            <path
              className="segment"
              d={d}
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeDasharray={`${dashLen} ${gap}`}
              style={{ ["--start-offset"]: `${startB}px` }}
            />
          </>
        )}

        <defs>
          {/* Continuous gradient that will be rotated with animateTransform */}
          <linearGradient
            id="borderGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={width}
            y2="0"
            gradientTransform={`rotate(0 ${cx} ${cy})`}
          >
            <stop offset="0%" stopColor="#00e7ff" />
            <stop offset="45%" stopColor="#8a6bff" />
            <stop offset="70%" stopColor="#bf6bff" />
            <stop offset="100%" stopColor="#ff4ddb" />
            {/* animate the gradient transform to rotate it around the button center */}
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from={`0 ${cx} ${cy}`}
              to={`360 ${cx} ${cy}`}
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
