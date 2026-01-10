import { useState } from "react";

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  if (!images || images.length === 0) return null;
  const len = images.length;
  const prevIndex = (index - 1 + len) % len;
  const nextIndex = (index + 1) % len;

  const goPrev = () => setIndex((i) => (i - 1 + len) % len);
  const goNext = () => setIndex((i) => (i + 1) % len);

  // Tunable sizes
  const containerHeight = 340; // px
  const sideWidthPct = 36; // percentage width for left/right background previews

  // Helper for extracting a nicer filename from a path (optional)
  const basename = (p) => {
    if (!p) return "";
    const parts = p.split("/");
    return parts[parts.length - 1];
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${containerHeight}px`,
        boxSizing: "border-box",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#01050F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-roledescription="carousel"
    >
      {/* LEFT background preview */}
      <div
        onClick={goPrev}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: `${sideWidthPct}%`,
          height: "100%",
          backgroundImage: `url(${images[prevIndex].path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) saturate(0.7)",
          transform: "scale(1.03)",
          opacity: 0.38,
          cursor: "pointer",
        }}
        aria-hidden="true"
      />

      {/* LEFT gradient fade to center */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: `${sideWidthPct + 6}%`,
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(1,5,15,0.9) 20%, rgba(1,5,15,0.3) 60%, rgba(1,5,15,0.0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* RIGHT background preview */}
      <div
        onClick={goNext}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: `${sideWidthPct}%`,
          height: "100%",
          backgroundImage: `url(${images[nextIndex].path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) saturate(0.7)",
          transform: "scale(1.03)",
          opacity: 0.38,
          cursor: "pointer",
        }}
        aria-hidden="true"
      />

      {/* RIGHT gradient fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: `${sideWidthPct + 6}%`,
          height: "100%",
          background:
            "linear-gradient(270deg, rgba(1,5,15,0.9) 20%, rgba(1,5,15,0.3) 60%, rgba(1,5,15,0.0) 100%)",
          pointerEvents: "none",
        }}
      />

{/* Center image container (handles hover) */}
<div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{
    position: "relative",
    height: "86%",
    maxWidth: "92%",
    margin: "0 auto",
    zIndex: 5,
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.25s ease",
  }}
>
  {/* Blurred background fill (keeps edges filled) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${images[index].path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(28px) brightness(0.95)",
      transform: "scale(1.2)",
      willChange: "transform, filter",
      zIndex: 1,
    }}
  />

  {/* Scaling wrapper: grows on hover */}
  <div
    style={{
      position: "relative",
      display: "inline-block",
      transform: hover ? "scale(1.1)" : "scale(1)",
      transition: "transform 0.32s cubic-bezier(.2,.9,.2,1)",
      transformOrigin: "center center",
      zIndex: 2,
      pointerEvents: "auto",
    }}
  >
    {/* Foreground image */}
    <img
      src={images[index].path}
      alt={images[index].text || `Slide ${index + 1}`}
      style={{
        height: "100%",
        maxHeight: `${containerHeight * 0.86}px`,
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
        borderRadius: "10px",
        boxShadow: "none",
      }}
    />

    {/* Dim overlay covering the entire image */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "10px",
        background: "rgba(0,0,0,0.55)", // adjust alpha to taste
        opacity: hover ? 1 : 0,
        transition: "opacity 0.32s ease",
        pointerEvents: "none",
        zIndex: 3,
      }}
    />
  </div>

  {/* Hover text (only shows images[index].text) */}
  {hover && (
    <div
      style={{
        position: "absolute",
        zIndex: 6,
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",
          padding: "8px 12px",
          borderRadius: 8,
          background: "transparent",
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          textAlign: "center",
          maxWidth: "85%",
          whiteSpace: "normal",
          lineHeight: 1.3,
        }}
      >
        {images[index].text || ""}
      </div>
    </div>
  )}
</div>
      {/* Left / Right nav buttons (centered vertically) */}
      <button onClick={goPrev} aria-label="Previous" style={navButtonStyle("left")}>
        ‹
      </button>
      <button onClick={goNext} aria-label="Next" style={navButtonStyle("right")}>
        ›
      </button>

      {/* Optional: image counter */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 12,
          zIndex: 6,
          fontSize: 13,
          color: "#cfd3da",
          background: "rgba(0,0,0,0.35)",
          padding: "6px 10px",
          borderRadius: 8,
          backdropFilter: "blur(4px)",
        }}
      >
        {index + 1} / {len}
      </div>
    </div>
  );
}

const navButtonStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "8px",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  border: "none",
  fontSize: "28px",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
});

export default ImageCarousel;