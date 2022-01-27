import "./project-card.css";

function projectCard({ project }) {
  return (
    <div className="project-card">
      <div className="left-col">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.url && (
            <a className="project-link" href={project.url}>
              <div className="project-link-button">
                <i class="fi fi-rr-eye"></i>Live demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="project-link-button">
                <i class="far fa-code"></i>Source code
              </div>
            </a>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div className="rigth-col">
        <img src={project.image} className="project-image" alt={project.title} />
      </div>
    </div>
  );
}

export default projectCard;
