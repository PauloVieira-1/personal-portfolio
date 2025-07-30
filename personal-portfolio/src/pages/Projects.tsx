import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardText from "../components/ProjectCard/ProjectCardText";
import {cardData, assignments} from "./ProjectsContent";
import { useState } from "react";

const tabs = {
  1: cardData.map((card) => <ProjectCard
        title={card.title}
        description={card.description}
        images={card.images}
        keyFeatures={card.keyFeatures}
        type={card.type}
        githubLink={card.githubLink}
        liveLink={card.liveLink}
        key={card.title}
        techStack={card.techStack}
      />),
  2: assignments.map((card) => <ProjectCardText
        title={card.title}
        description={card.description}
        githubLink={card.githubLink}
        type={card.type}
        key={card.title}
        techStack={card.techStack}
      />),
};


function Projects() {
  const [currentTab, setCurrentTab] = useState(1);

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
    console.log("TEST")
  };

  return (
    <div className="text-white text-start">
      <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Projects</h1>
      <h2 className="fs-3 text-danger mb-4 bottom-fade-in-fast">My Work</h2>
      <div className="d-flex justify-content-center">
        <button
          className={`shadow-butto tab-button ${currentTab === 1 ? "active-tab" : ""}`}
          onClick={() => changeTab(1)}
        > Web Projects </button>
        <button
          className={`shadow-butto tab-button ${currentTab === 2 ? "active-tab" : ""}`}
          onClick={() => changeTab(2)}
        > Other </button>
      </div>
      <div className="tab-content">{tabs[currentTab]}</div>
    </div>
  );
}

export default Projects;

