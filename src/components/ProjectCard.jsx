import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="mx-auto flex flex-col w-full md:max-w-sm justify-center overflow-hidden rounded-xl border pt-0">
      {/* Image */}
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />

      {/* Title and Description */}
      <div className="grid gap-2 p-6">
        <div className="mb-3 flex flex-col gap-3">
          <h3 className="font-figtree text-2xl font-semibold leading-none tracking-tight">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-tertiary/50 px-2 py-1 font-inconsolata text-xs text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 p-6 pt-0">
        <a
          // className="flex justify-center items-center gap-1 w-full rounded-md bg-black px-4 py-2 text-center text-md font-medium text-primary transition-colors hover:bg-accent-2/50 hover:text-secondary"
          className="button-secondary w-full gap-2 px-4 py-2 font-semibold"
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
          <FaGithub  />
        </a>

        <a
          className="button-accent w-full gap-1 px-4 py-2 font-semibold"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard

