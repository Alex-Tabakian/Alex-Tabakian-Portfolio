import React, { useState, useEffect, useCallback } from "react";

function Sidebar() {
  // initial sections (yOffset in pixels)
  const initial = [
    { id: "home", label: "Home", yOffset: 0 },
    { id: "skills", label: "Skills", yOffset: 400 },
    { id: "work", label: "Work", yOffset: 200 },
    { id: "business", label: "Business", yOffset: 440 },
    { id: "projects", label: "Projects", yOffset: 440 },
    { id: "contact", label: "Contact", yOffset: 0 }
  ];

  // load saved offsets from localStorage if present
  // NOTE: we only keep 'sections' because setSections wasn't being used elsewhere
  const [sections] = useState(() => {
    try {
      const raw = localStorage.getItem("sidebarSections");
      if (raw) {
        const parsed = JSON.parse(raw);
        // merge with initial to ensure all fields exist
        return initial.map(init => ({ ...init, ...(parsed.find(p => p.id === init.id) || {}) }));
      }
    } catch (e) {}
    return initial;
  });

  const [active, setActive] = useState(sections[0].id);

  // persist sections when they update (if you later need to change sections,
  // you'll want to reintroduce setSections)
  useEffect(() => {
    try {
      localStorage.setItem("sidebarSections", JSON.stringify(sections));
    } catch (e) {}
  }, [sections]);

  // Detect which section is centered (uses section.yOffset)
  const detectCenteredSection = useCallback(() => {
    const viewportMid = window.innerHeight / 2;
    let closestSection = sections[0].id;
    let closestDistance = Infinity;

    sections.forEach(sec => {
      const element = document.getElementById(sec.id);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2 + (sec.yOffset || 0);
      const distance = Math.abs(sectionMid - viewportMid);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = sec.id;
      }
    });

    setActive(closestSection);
  }, [sections]);


    // Scroll listener (scrollspy)
    useEffect(() => {
      const onScroll = () => detectCenteredSection();
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, [sections]);

    // Handle clicking a sidebar button - scroll so section midpoint + yOffset sits at viewport center
    const handleClick = (id) => {
      const sec = sections.find(s => s.id === id);
      if (!sec) return;
      const element = document.getElementById(id);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const currentScroll = window.scrollY || window.pageYOffset;
      const targetY =
        currentScroll +
        rect.top +
        rect.height / 2 -
        window.innerHeight / 2 +
        (sec.yOffset || 0);

      window.scrollTo({
        top: Math.max(0, Math.round(targetY)),
        behavior: "smooth"
      });

      setTimeout(() => detectCenteredSection(), 350);
    };

    return (
      <nav
        style={{
          position: "fixed",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 9999,
          padding: 4
        }}
      >
        {sections.map(sec => (
          <button
            key={sec.id}
            onClick={() => handleClick(sec.id)}
            className="sidebar-btn"
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              background: active === sec.id ? "#2A2F3A" : "transparent",
              border: active === sec.id ? "1px solid #2A2F3A" : "1px solid transparent",
              color: active === sec.id ? "white" : "#9aa0ab",
              fontWeight: 500,
              textAlign: "left",
              cursor: "pointer",
              transition: "0.15s",
              minWidth: 90
            }}
          >
            {sec.label}
          </button>
        ))}
      </nav>
    );
  }

export default Sidebar;

