const Tags = ({ project }) => {
  return (
    <div className="rounded-sm bg-tertiary/50 px-2.5 py-0.5 text-xs font-inconsolata">
      {project.tech}
    </div>
  );
};

export default Tags;
