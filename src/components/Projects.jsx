import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section>
      <div>
        <SectionHeader
          title="Selected Work"
          subtitle="A curated list of projects I created"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0 ">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
