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

  const containerHeight = 340;
  const sideWidthPct = 36;

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

      {/* LEFT gradient*/}
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

      {/* RIGHT gradient*/}
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

      {/* Center image*/}
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
          overflow: "visable",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.25s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${images[index].path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(22px) brightness(0.65) saturate(0.6)",
            transform: "scale(1.2)",
            willChange: "transform, filter",
            zIndex: 1,
          }}
        />

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
              filter: "brightness(.95)"
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "10px",
              background: "rgba(0,0,0,0.75)",
              opacity: hover ? 1 : 0,
              transition: "opacity 0.32s ease",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        </div>
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
                padding: "16px 20px",
                borderRadius: 10,
                background: "transparent",
                color: "#fff",
                textAlign: "center",
                maxWidth: "85%",
                lineHeight: 1.4,
              }}
            >
              {images[index].text && (
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: images[index].specs ? 12 : 0,
                  }}
                >
                  {images[index].text}
                </div>
              )}

              {images[index].specs && (
                <div style={{ fontSize: 14, fontWeight: 400, color: "#d1d9e0" }}>
                  {images[index].specs.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <button onClick={goPrev} aria-label="Previous" style={navButtonStyle("left")}>
        ‹
      </button>
      <button onClick={goNext} aria-label="Next" style={navButtonStyle("right")}>
        ›
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 8,
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        }}
        role="tablist"
        aria-label="Slide pagination"
      >
        {images.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active ? "true" : "false"}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.45)",
                cursor: "pointer",
                transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
                padding: 0,
                display: "inline-block",
                transform: active ? "scale(1.35)" : "scale(1)",
                transformOrigin: "center center",
                boxShadow: active ? "0 4px 10px rgba(0,0,0,0.45)" : "none",
                backgroundColor: active ? "#ffffff" : "rgba(255,255,255,0.45)",
                willChange: "transform",
              }}
            />
          );
        })}
      </div>

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
