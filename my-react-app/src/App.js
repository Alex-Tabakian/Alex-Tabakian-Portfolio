import './App.css';
import { useState, useEffect } from "react";
import GlowButton from "./GlowButton";
import ContactForm from "./ContactForm";
import ImageCarousel from "./ImageCarousel";
import Sidebar from "./Sidebar";


// ----------------- App component -----------------
function App() {
  
  const [active, setActive] = useState("work");

  const workData = [
    {
      company: "iMAPS Research Lab",
      position: "Software Developer / Staff Researcher",
      startDate: "Aug 2023",
      endDate: "present",
      bullets: [
        "Led the modernization of a large legacy MATLAB codebase into a high-performance, multithreaded C# application, redesigning system architecture to achieve a 10× runtime reduction under real hardware constraints. Developed low-level C++ robotic arm control software for automated ultrasonic scanning, integrating real-time sensor feedback to deliver ±0.1 mm repeatable positioning on a stepper-driven linear rail. Built a WPF desktop interface for real-time signal visualization and interactive system control. Collaborated closely with faculty and graduate researchers to deploy production software for NASA-funded ultrasonic wave analysis projects."
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
    { path: "/media/RTX3070Pc.png", text: "This is my favorite build that I have put together because of the unique case and vertical GPU mount.\n\nRTX3070\nRyzen 7 5700X\n32GB DDR4 Ram"},
    { path: "/media/RTX2080Pc.png", text: "This computer is memorable because it is the most profit that I have made on a sale. I paid roughly $400 for the parts and sold the pc for $800. \n\nRTX 2080 Super\nIntel i9 9900\n32GB DDR4 Ram" },
    { path: "/media/RTX4060Pc.png", text: "text" },
    { path: "/media/RTX5070TiPc.png", text: "This is a commsion build for a customer that wanted to go all-out. It is the most expensive computer that I have put together which cost $2100 in parts." },
    { path: "/media/room.png", text: "text" },
    { path: "/media/RTX2070Pc.png", text: "text" },
    { path: "/media/GTX1660Pc.png", text: "text" }
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

  return (


    <div className="App" style={{ height: "100%", position: "relative" }}>
      <div className="shimmer-grid" aria-hidden="true"></div>
      <Sidebar />

      <header id="home" className="App-header">
        <div
          style={{
            width: "90%",
            maxWidth: "900px",
            margin: "-100px auto 0 auto",
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
            <img
              src="/logos/pin.png"
              alt="Location pin"
              style={{
                width: "18px",
                height: "18px",
                marginRight: "8px",
                objectFit: "contain"
              }}
            />
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
            <div className="person-contact">
              <a
                href="/James Tabakian Resume.pdf"
                download="James-Tabakian-Resume.pdf"
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
                  fontWeight: 500,
                  transform: "translateY(-3px)"
                }}
              >
                <img src="/logos/downloadFile.png" alt="Resume Icon" style={{ width: "20px", height: "20px" }} />
                Resume
              </a>
            </div>
            <div className="person-contact">
              <a href="https://www.linkedin.com/in/james-tabakian-93a333283/" target="_blank" rel="noopener noreferrer">
                <img src="/logos/linkedin.png" alt="LinkedIn" style={{ width: "32px", height: "32px" }} />
              </a>
            </div>
            <div className="project-tech">
              <a href="https://github.com/Alex-Tabakian" target="_blank" rel="noopener noreferrer">
                <img src="/logos/github.png" alt="GitHub" style={{ width: "32px", height: "32px" }} />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* --- TECH / PROJECTS PANEL --- */}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "-25px auto 0 auto",   // top margin to match your spacing
          paddingLeft: "110px",          // <<-- EXACT same left offset as header
          textAlign: "left",
          color: "white",
        }}
      >
        <h1 id="skills" style={{ fontSize: "36px", margin: 0, fontWeight: 500 }}>
          Skills
        </h1>
      </div>
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
            maxWidth: 850,
            display: "flex",
            flexWrap: "wrap",
            gap: "18px",
            justifyContent: "flex-start",
            padding: "12px",
            boxSizing: "border-box",
            marginBottom: "8px",
          }}
        >
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
      <div
        id="work"
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
          border: "2px solid #2A2F3A",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          padding: "16px",
          color: "white",
          boxSizing: "border-box"
        }}
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

      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "100px auto 0 auto",
          paddingLeft: "110px",
          textAlign: "left",
          color: "white",
        }}
      >
        <h1 id="business" style={{ fontSize: "36px", margin: 0, fontWeight: 500 }}>
          My Business
        </h1>
      </div>

      <div
        style={{
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
        }}
      >
        <ImageCarousel images={pcImages.filter(img => img.path)} />

        <h3
        style={{
            marginTop: "32px",
            textAlign: "left"
          }}
        >
          Columbia Custom PCs LLC
        </h3>
        <p
          style={{
            marginTop: "32px",
            fontSize: "14px",
            lineHeight: "1.7",
            color: "#cfd3da",
            textAlign: "left",
            maxWidth: "720px"
          }}
        >
        What started as a passion for building computers grew into Columbia Custom PCs LLC, a business focused on delivering well-balanced, reliable custom systems. Through this company, I generated over $100,000 in revenue by designing and assembling more than 150 PCs for gamers, streamers, and professionals. This experience allowed me to combine technical skill with business execution, focusing on consistency, trust, and long-term client satisfaction rather than one-off builds.
        </p>

      </div>



      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "100px auto 0 auto",   // top margin to match your spacing
          paddingLeft: "110px",          // <<-- EXACT same left offset as header
          textAlign: "left",
          color: "white",
        }}
      >
        <h1 id="projects" style={{ fontSize: "36px", margin: 0, fontWeight: 500 }}>
          Projects
        </h1>
      </div>

      <div style={{ width: "90%", maxWidth: 800, margin: "20px auto 60px auto" }}>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              {/* Media: prefer video, then image, else placeholder */}
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

                  {/* Only show GlowButton if demoJar exists */}
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
