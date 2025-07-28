import ProjectCard from "../components/ProjectCard/ProjectCard";
import cardData from "./ProjectsContent";


function Projects() {
  return (
    <div className="text-white text-start">
            <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Projects</h1>
      <h2 className="fs-3 text-danger mb-4 bottom-fade-in-fast">My Work</h2>

      {cardData.map((card) => <ProjectCard
        title={card.title}
        description={card.description}
        images={card.images}
        keyFeatures={card.keyFeatures}
        type={card.type}
        githubLink={card.githubLink}
        liveLink={card.liveLink}
        key={card.title}
        techStack={card.techStack}
      />
      )}
    </div>
  );
}

export default Projects;

