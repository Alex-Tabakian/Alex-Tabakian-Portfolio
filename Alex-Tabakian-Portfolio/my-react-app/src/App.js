import './App.css';
import { useState } from "react";

// test
function App() {
  const [active, setActive] = useState("work");

  const workData = [
    {
      company: "iMAPS Research Lab",
      position: "Owner",
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
      company: "Columbia Custom PCs LLC",
      position: "Software Engineer / Staff Researcher",
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

  return (
    <div className="App" style={{ height: "100vh", position: "relative" }}>
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Scroll down to view work & education</p>
      </header>

      <div
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: "600px",
          width: "90%",
          maxWidth: "900px",
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
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: "calc(600px + 50px)",
          width: "90%",
          maxWidth: "900px",
          background: "#01050F",
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
    </div>
  );
}

export default App;
