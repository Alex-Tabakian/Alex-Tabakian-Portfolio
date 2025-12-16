import './App.css';
import { useState } from "react";

// test 
function App() {
  const [active, setActive] = useState("work");

  const workData = [
    {
      company: "Columbia Custom PCs LLC",
      position: "Software Engineer / Staff Researcher",
      startDate: "Jun 2024",
      endDate: "Present",
      bullets: [
        "Generated over $100,000 in revenue by assembling and selling 150+ fully customized PCs tailored to performance and budget requirements.",
        "Built a full-stack inventory and sales management system with real-time analytics, automated stock tracking, and a business insights dashboard.",
        "Created detailed build logs, benchmarks, and troubleshooting documentation, improving customer support efficiency and reducing post-sale issues."
      ],
      logoSrc: "/logos/uofsc_logo.jfif"
    },

    {
      company: "iMAPS Research Lab",
      position: "Owner / Founder",
      startDate: "Aug 2023",
      endDate: "present",
      bullets: [
        "Rebuilt a 6,000+ line MATLAB application into a modern, multi-threaded C# system, achieving a 10× reduction in computation time.",
        "Developed C++ control software for an automated ultrasonic-scanning robotic arm, integrating sensor feedback for precise, repeatable motion.",
        "Designed a responsive WPF interface with real-time graph visualization and interactive controls, and collaborated with faculty and graduate researchers to integrate the software into NASA-funded ultrasonic wave analysis projects."
      ],
      logoSrc: "/logos/uofsc_logo.jfif"
    }
  ];
  const educationData = [
    {
      school: "University of South Carolina",
      degree: "Bachelor of Science in Computer Science",
      date: "2023 - 2026",
      grade: "GPA: 3.5",
      logoSrc: "/logos/uofsc_logo.jfif"
    }];
  const technologies = [
    {
      name: "Java",
      logoSrc: "/logos/java"
    },
    {
      name: "Python",
      logoSrc: "/logos/python"
    },
    {
      name: "C++",
      logoSrc: "/logos/c++"
    },
    {
      name: "React",
      logoSrc: "/logos/react"
    },
    {
      name: "Git",
      logoSrc: "/logos/git"
    },
    {
      name: "GitHub",
      logoSrc: "/logos/github"
    },
    {
      name: "Linux",
      logoSrc: "/logos/linux"
    },
    {
      name: "Windows",
      logoSrc: "/logos/windows"
    },
    {
      name: "Javascript",
      logoSrc: "/logos/javascript"
    },
    {
      name: "Firebase",
      logoSrc: "/logos/firebase"
    },
    {
      name: "Unity",
      logoSrc: "/logos/unity"
    }
  ]

  return (
    <div className="App" style={{ height: "100vh", position: "relative" }}>


      <header className="App-header">
        <div
          style={{
            width: "90%",
            maxWidth: "900px",
            margin: "20px auto 0 auto",
            paddingLeft: "110px",
            textAlign: "left",
            color: "white"

          }}
        >
          <h1 style={{ fontSize: "48px", margin: 0, fontWeight: 600 }}>
            James Tabakian
          </h1>

          <p style={{ fontSize: "24px", margin: "10px 0 0 0", color: "#8c8e91ff" }}>
            Software Engineer
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "14px" }}>
            <span
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                marginRight: "8px"
              }}
            >
              📍
            </span>
            <p style={{ fontSize: "18px", margin: 0, color: "#9aa0ab" }}>
              Columbia, SC
            </p>


          </div>

          {/* Social + Resume Buttons */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "22px"
          }}>

            {/* Resume Button */}
            <a
              href="/James Tabakian Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #d1d5de",
                padding: "2px 24px",
                borderRadius: "6px",
                fontSize: "18px",
                color: "#d1d5de",
                textDecoration: "none",
                fontWeight: 500
              }}
            >
              <img
                src="/logos/download.png"
                alt="Resume Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Resume
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
              <img
                src="/logos/linkedin.png"
                alt="LinkedIn"
                style={{ width: "32px", height: "32px" }}
              />
            </a>


            {/* GitHub Icon */}
            <a href="https://github.com/yourprofile" target="_blank">
              <img
                src="/logos/github.png"
                alt="GitHub"
                style={{ width: "32px", height: "32px" }}
              />
            </a>



          </div>

        </div>
      </header>

      <button className="loop-glow-btn">
        My Projects
      </button>

      {/* --- TECH / PROJECTS PANEL --- */}
      <h1 style={{ fontSize: "36px", margin: 0, fontWeight: 500, color: "white", marginTop: "200px" }}>
        My Technologies
      </h1>
      <div
        style={{
          marginTop: "28px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >

        <div
          id="tech-container"
          style={{
            width: "90%",
            maxWidth: 800,
            display: "flex",
            flexWrap: "wrap",    // wrap when no more horizontal space
            gap: "18px",
            justifyContent: "flex-start",
            padding: "12px",
            boxSizing: "border-box",
            marginBottom: "8px",
          }}
        >
          {technologies.map((tech, i) => {
            // build src with fallback and extension if missing
            const hasSrc = tech.logoSrc && tech.logoSrc.trim() !== "";
            const maybeWithExt = hasSrc
              ? tech.logoSrc.endsWith(".png") || tech.logoSrc.endsWith(".jpg") || tech.logoSrc.endsWith(".svg")
                ? tech.logoSrc
                : `${tech.logoSrc}.png`
              : "/logos/placeholder.png";

            return (
              <article className="tech-card" key={i} title={tech.name}>
                <div className="tech-logo-wrap">
                  <img
                    src={maybeWithExt}
                    alt={tech.name + " logo"}
                    loading="lazy"
                    onError={(e) => {
                      // fallback to placeholder if the image fails to load
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/logos/placeholder.png";
                    }}
                  />
                </div>
                <div className="tech-name">{tech.name}</div>
              </article>
            );
          })}
        </div>
      </div>


      <div
        style={{
          position: "relative",
          left: "50%",
          marginTop: "50px",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "800px",
          display: "flex",
          gap: "10px",
          padding: "1px",
          background: "#2A2F3A",
          border: "2px solid #2A2F3A",
          borderRadius: "12px",
          boxSizing: "border-box"
        }}
      >
        <button
          onClick={() => setActive("work")}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: active === "work" ? "#01050F" : "#2A2F3A",
            color: "white",
            transition: "0.2s"
          }}
        >
          Work
        </button>

        <button
          onClick={() => setActive("education")}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: active === "education" ? "#01050F" : "#2A2F3A",
            color: "white",
            transition: "0.2s"
          }}
        >
          Education
        </button>
      </div>

      <div
        className="work-edu-container"
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "10px",
          width: "90%",
          maxWidth: "800px",
          border: "1px solid #2A2F3A",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          padding: "16px",
          color: "white",
          boxSizing: "border-box"
        }}
      >

        {/* ---- WORK PANEL ---- */}
        {active === "work" && (
          <div className="work-list">
            {workData.map((job, i) => (
              <article className="work-card" key={i}>
                {/* Left logo */}
                <div className="work-left">
                  <div className="work-logo">
                    <img
                      src={job.logoSrc}
                      alt={`${job.company} logo`}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right content */}
                <div className="work-main">
                  <div className="work-header">
                    <h3 className="work-company">{job.company}</h3>
                    <div className="work-dates">{job.startDate} – {job.endDate}</div>
                  </div>

                  <div className="work-position">{job.position}</div>

                  <ul className="work-bullets">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}


        {/* ---- EDUCATION PANEL ---- */}
        {active === "education" && (
          <div className="education-list">
            {educationData.map((edu, i) => (
              <article className="edu-card" key={i}>
                <div className="edu-left">
                  <div className="edu-logo">
                    <img src={edu.logoSrc} alt={`${edu.school} logo`} loading="lazy" />
                  </div>
                </div>

                <div className="edu-main">
                  <div className="edu-header">
                    <h3 className="edu-school">{edu.school}</h3>
                    <div className="edu-date">{edu.date}</div>
                  </div>

                  <div className="edu-degree">{edu.degree}</div>

                  {edu.grade && <div className="edu-grade">{edu.grade}</div>}
                  {edu.location && <div className="edu-location">{edu.location}</div>}
                </div>
              </article>
            ))}
          </div>
        )}

        
      </div>
      <h1 style={{ fontSize: "36px", margin: 0, fontWeight: 500, color: "white", marginTop: "100px" }}>
        My Projects
      </h1>
    </div>
    
  );
}

export default App;
