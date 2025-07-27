import ProjectCard from "../components/ProjectCard/ProjectCard";

const cardData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nisl eu blandit consequat, justo nulla dignissim magna, et aliquam lorem ipsum dolor sit amet.",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nisl eu blandit consequat, justo nulla dignissim magna, et aliquam lorem ipsum dolor sit amet.",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nisl eu blandit consequat, justo nulla dignissim magna, et aliquam lorem ipsum dolor sit amet.",
    image: "https://picsum.photos/200/300"
  }
]


function Projects() {
  return (
    <div className="text-white text-start">
            <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Welcome</h1>
      <h2 className="fs-3 text-danger mb-4 bottom-fade-in-fast">About Me</h2>
      {cardData.map((card) => <ProjectCard
        title={card.title}
        description={card.description}
        image={card.image}
        key={card.title}
      />
      )}
    </div>
  );
}

export default Projects;
