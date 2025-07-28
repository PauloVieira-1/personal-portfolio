import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

interface SocialsProps {
  color: string;
}

const socialsLinks = [
  {
    icon: FaGithub,
    link: "https://github.com/PauloVieira-1",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/paulo-vieira-1bb344308",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/1paulo_v/",
  },
]

function Socials({ color }: SocialsProps) {
  const [revealed, setRevealed] = useState(false);

  const togglePanel = () => {
    setRevealed(!revealed);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: revealed ? "0" : "-140px",
        width: "200px",
        height: "auto",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        transition: "left 0.4s ease-in-out",
        zIndex: 1000,
      }}
    >
      {/* Icons Column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          flex: 1,
        }}
      >
        {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
          <div
            key={index}
            className="rounded-circle p-3 buttton shadow-button"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(socialsLinks[index].link, "_blank")}

          >
            <Icon size={24} color={color} />
          </div>
        ))}
      </div>

      <div style={{ marginLeft: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill={color}
          viewBox="0 0 16 16"
          className={`enlarge-arrow ${revealed ? "rotate" : ""}`}
          onClick={togglePanel}
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0L11.5 8l-3.146 3.146a.5.5 0 0 1-.708-.708L10.293 8 7.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Socials;
