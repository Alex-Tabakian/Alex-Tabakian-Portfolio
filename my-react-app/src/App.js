import './App.css';
import { useState, useEffect } from "react";
import GlowButton from "./GlowButton";
import ContactForm from "./ContactForm";
import ImageCarousel from "./ImageCarousel";
import Sidebar from "./Sidebar";

function App() {
  
  const [active, setActive] = useState("work");

  const workData = [
    {
      company: "iMAPS Research Lab",
      position: "Software Developer / Staff Researcher",
      startDate: "Aug 2023",
      endDate: "present",
      bullets: [
        "Led full rewrite of a 6,000+ line legacy MATLAB system into a multithreaded C# application, redesigning architecture to reduce runtime by 10× under real hardware constraints.",
        "Developed a robotic arm control program in C++ for automated ultrasonic scanning, integrating sensor feedback to achieve ±0.1 mm repeatable positioning on a stepper-driven linear rail.",
        "Built a WPF front-end for real-time signal visualization and interactive control.",
        "Collaborated with faculty and graduate students to integrate software into NASA-funded ultrasonic wave analysis projects."
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
    }
  ];

  const technologies = [
    // Programming Languages
    { name: "Java", logoSrc: "/logos/java", category: "Languages" },
    { name: "Python", logoSrc: "/logos/python", category: "Languages" },
    { name: "C++", logoSrc: "/logos/c++", category: "Languages" },
    { name: "C#", logoSrc: "/logos/cSharp", category: "Languages" },
    { name: "Javascript", logoSrc: "/logos/javascript", category: "Languages" },

    // Frontend / Web
    { name: "React", logoSrc: "/logos/react", category: "Frontend" },
    { name: "CSS", logoSrc: "/logos/css", category: "Frontend" },

    // Tools & Version Control
    { name: "Git", logoSrc: "/logos/git", category: "Tools" },
    { name: "GitHub", logoSrc: "/logos/github", category: "Tools" },

    // Backend / Cloud
    { name: "Firebase", logoSrc: "/logos/firebase", category: "Cloud" },

    // Game Development
    { name: "Unity", logoSrc: "/logos/unity", category: "Game Development" },

    // Operating Systems
    { name: "Linux", logoSrc: "/logos/linux", category: "Operating Systems" },
    { name: "Windows", logoSrc: "/logos/windows", category: "Operating Systems" }
  ];

  const pcImages = [
    { path: "/media/RTX3070Pc.png", text: "This is my favorite build because of the unique case and vertical GPU mount.", specs: "RTX 3070\nRyzen 7 5700X\n32GB DDR4"},
    { path: "/media/RTX4060Pc.png", text: "Sold on 11/4/2025", specs: "RTX 4060\nRyzen 5 5500\n32GB DDR4"},
    { path: "/media/RTX5070TiPc.png", text: "Commsion build for a customer that wanted to go all-out. Most expensive computer that I have put together at $2100 in parts.", specs: "RTX 5070Ti\n Ryzen 9 9900X\n32GB DDR5" },
    { path: "/media/room.png", text: "Inventory during peak build periods" },
    { path: "/media/RTX2080Pc.png", text: "This computer is memorable because it is the most profit that I have made on a sale. I built it for $400 and it sold at $800.", specs: "RTX 2080 Super\nIntel i9 9900\n32GB DDR4" },
    { path: "/media/RTX2070Pc.png", text: "One of my first builds. Sold 7/7/2024", specs: "RTX 2070\nRyzen 5 2600\n32GB DDR4"},
    { path: "/media/RTX2070Pc2.jpg", text: "Sold on 10/4/2025", specs: "RTX 2070 Super\nRyzen 7 2700X\n32GB DDR4"}
  ];

  
  const projects = [
    {
      name: "Checkers Bot",
      description: "AI-driven Checkers bot that uses the Minimax algorithm. I have not beaten it yet.",
      videoSrc: "/media/CheckersBot.mp4",
      technologies: ["Minimax", "Alpha-Beta Pruning", "Java", "Swing"],
      source: "https://github.com/Alex-Tabakian/CheckersBot",
      demoJar: "/checkers/CheckerBot.jar"
    },
    {
      name: "PC Inventory Logger",
      description: "PC inventory tracker that logs components, updates stock automatically, and keeps hardware organized.",
      imageSrc: "/media/PcLogger.png",
      technologies: ["JavaScript", "Firebase"],
      source: "https://github.com/Alex-Tabakian/CheckersBot"
    },
    {
      name: "Music App",
      description: "A JavaFX music player that supports account login, playlist creation, and other features. The application handles local audio files and manages user playlists.",
      imageSrc: "/media/HiNote.png",
      technologies: ["Java", "JavaFX", "JSON"],
      source: "https://github.com/ijacobr/theHiNote"
    },
    {
      name: "ASL Gesture Recognition",
      description: "Built an ASL gesture classifier using PyTorch and AlexNet transfer learning, reaching 95% accuracy with optimized preprocessing and hyperparameters.",
      imageSrc: "/media/sign language.webp",
      technologies: ["Python", "Pytorch"],
      source: "https://github.com/Alex-Tabakian/CSCE-580/tree/main/ProjectA"
    }

  ];

  const baseAppStyle = { height: "100%", position: "relative" };

  const headerInnerStyle = {
    width: "90%",
    maxWidth: "900px",
    margin: "-100px auto 0 auto",
    paddingLeft: "110px",
    textAlign: "left",
    color: "white"
  };

  const titleStyle = { fontSize: "48px", margin: 0, fontWeight: 600 };
  const subtitleStyle = { fontSize: "24px", margin: "10px 0 0 0", color: "#8c8e91ff" };
  const locationRowStyle = { display: "flex", alignItems: "center", marginTop: "14px" };
  const pinStyle = { width: "18px", height: "18px", marginRight: "8px", objectFit: "contain" };
  const locationTextStyle = { fontSize: "18px", margin: 0, color: "#9aa0ab" };

  const actionRowStyle = { display: "flex", alignItems: "center", gap: "16px", marginTop: "22px" };
  const resumeLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid #d1d5de",
    padding: "2px 24px",
    borderRadius: "6px",
    fontSize: "18px",
    color: "#d1d5de",
    textDecoration: "none",
    fontWeight: 500,
    transform: "translateY(-3px)"
  };
  const resumeIconStyle = { width: "20px", height: "20px" };
  const socialIconStyle = { width: "32px", height: "32px" };

  const sectionHeaderStyle = {
    width: "90%",
    maxWidth: "900px",
    margin: "-25px auto 0 auto",
    paddingLeft: "110px",
    textAlign: "left",
    color: "white"
  };
  const sectionTitleStyle = { fontSize: "36px", margin: 0, fontWeight: 500 };

  const techWrapStyle = { marginTop: "28px", display: "flex", justifyContent: "center", width: "100%" };
  const techContainerStyle = {
    width: "90%",
    maxWidth: 850,
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    justifyContent: "flex-start",
    padding: "12px",
    boxSizing: "border-box",
    marginBottom: "8px",
  };

  const workToggleWrapperStyle = {
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
  };

  const toggleBtnBase = {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "white",
    transition: "0.2s"
  };

  const workEduContainerStyle = {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "10px",
    width: "90%",
    maxWidth: "800px",
    border: "2px solid #2A2F3A",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "16px",
    color: "white",
    boxSizing: "border-box"
  };

  const businessHeaderWrapperStyle = {
    width: "90%",
    maxWidth: "900px",
    margin: "100px auto 0 auto",
    paddingLeft: "110px",
    textAlign: "left",
    color: "white",
  };

  const businessPanelStyle = {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "800px",
    margin: "20px 0 60px 0",
    border: "2px solid #2A2F3A",
    borderRadius: "12px",
    padding: "16px",
    boxSizing: "border-box",
    backdropFilter: "blur(10px)",
    color: "white"
  };

  const businessTitleH3Style = { marginTop: "32px", textAlign: "left" };
  const businessPStyle = {
    marginTop: "32px",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#cfd3da",
    textAlign: "left",
    maxWidth: "720px"
  };

  const projectsHeaderWrapperStyle = {
    width: "90%",
    maxWidth: "900px",
    margin: "100px auto 0 auto",
    paddingLeft: "110px",
    textAlign: "left",
    color: "white",
  };

  const projectsAreaStyle = { width: "90%", maxWidth: 800, margin: "20px auto 60px auto" };

  return (


    <div className="App" style={baseAppStyle}>
      <div className="shimmer-grid" aria-hidden="true"></div>
      <Sidebar />

      <header id="home" className="App-header">
        <div style={headerInnerStyle}>
          <h1 style={titleStyle}>
            James Tabakian
          </h1>

          <p style={subtitleStyle}>
            Software Engineer
          </p>

          <div style={locationRowStyle}>
            <img
              src="/logos/pin.png"
              alt="Location pin"
              style={pinStyle}
            />
            <p style={locationTextStyle}>
              Columbia, SC
            </p>
          </div>


          {/* Social + Resume Buttons */}
          <div style={actionRowStyle}>
            <div className="person-contact">
              <a
                href="/James Tabakian Resume.pdf"
                download="James-Tabakian-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={resumeLinkStyle}
              >
                <img src="/logos/downloadFile.png" alt="Resume Icon" style={resumeIconStyle} />
                Resume
              </a>
            </div>
            <div className="person-contact">
              <a href="https://www.linkedin.com/in/james-tabakian-93a333283/" target="_blank" rel="noopener noreferrer">
                <img src="/logos/linkedin.png" alt="LinkedIn" style={socialIconStyle} />
              </a>
            </div>
            <div className="project-tech">
              <a href="https://github.com/Alex-Tabakian" target="_blank" rel="noopener noreferrer">
                <img src="/logos/github.png" alt="GitHub" style={socialIconStyle} />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* --- TECH / PROJECTS PANEL --- */}
      <div style={sectionHeaderStyle}>
        <h1 id="skills" style={sectionTitleStyle}>
          Skills
        </h1>
      </div>
      <div style={techWrapStyle}>
        <div id="tech-container" style={techContainerStyle}>
          {technologies.map((tech, i) => {
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

      {/* Toggle Work / Education */}
      <div id="work" style={workToggleWrapperStyle}>
        <button
          onClick={() => setActive("work")}
          style={{
            ...toggleBtnBase,
            background: active === "work" ? "#01050F" : "#2A2F3A"
          }}
        >
          Work
        </button>

        <button
          onClick={() => setActive("education")}
          style={{
            ...toggleBtnBase,
            background: active === "education" ? "#01050F" : "#2A2F3A"
          }}
        >
          Education
        </button>
      </div>

      <div
        className="work-edu-container"
        style={workEduContainerStyle}
      >
        {/* WORK PANEL */}
        {active === "work" && (
          <div className="work-list">
            {workData.map((job, i) => (
              <article className="work-card" key={i}>
                <div className="work-left">
                  <div className="work-logo">
                    <img src={job.logoSrc} alt={`${job.company} logo`} loading="lazy" />
                  </div>
                </div>

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

        {/* EDUCATION PANEL */}
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

      <div style={businessHeaderWrapperStyle}>
        <h1 id="business" style={sectionTitleStyle}>
          My Business
        </h1>
      </div>

      <div style={businessPanelStyle}>
        <ImageCarousel images={pcImages.filter(img => img.path)} />

        <h3
        style={businessTitleH3Style}
        >
          Columbia Custom PCs LLC
        </h3>
        <p
          style={businessPStyle}
        >
        What began as a passion for building computers evolved into Columbia Custom PCs LLC, a business dedicated to delivering well-balanced, reliable custom systems. Through this venture, I generated over $100,000 in revenue by designing and assembling 150+ PCs for gamers, streamers, and professionals. The experience allowed me to blend technical expertise with business execution, prioritizing consistency, trust, and long-term client relationships over one-off builds.
        </p>

      </div>



      <div style={projectsHeaderWrapperStyle}>
        <h1 id="projects" style={sectionTitleStyle}>
          Projects
        </h1>
      </div>

      <div style={projectsAreaStyle}>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              {project.videoSrc ? (
                <video
                  src={project.videoSrc}
                  controls
                  className="project-media"
                  poster={project.poster || ""}
                />
              ) : project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="project-media"
                />
              ) : (
                <div className="project-placeholder">No Media</div>
              )}

              <div className="project-body">
                <h3 className="project-title">{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tech-list">
                  {project.technologies.map((tech, i) => (
                    <div className="project-tech" key={i}>
                      {tech}
                    </div>
                  ))}
                </div>

                {/* GitHub / Source link */}
                <div className="project-actions">
                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-btn"
                    >
                      <img src="/logos/github1.png" alt="GitHub" />
                      <span>Source</span>
                    </a>
                  ) : (
                    <span className="project-link-disabled">No repo</span>
                  )}

                  {project.demoJar && (
                    <GlowButton className="demo-btn">
                      Click Me
                    </GlowButton>
                  )}
                </div>
              </div>
            </article>
          ))}


        </div >
        <ContactForm id="contact" />
      </div>
    </div>

  );
}

export default App;
