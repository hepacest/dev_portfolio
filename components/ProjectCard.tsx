import type { Locale, Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  codeLabel: string;
};

export default function ProjectCard({ project, locale, codeLabel }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">
        <a href={project.web} target="_blank" className="project-card__link">
          {project.name}
        </a>
      </h3>

      <p className="project-card__description">{project.description[locale]}</p>

      <div className="project-card__tech-list">
        {project.tech.map((techItem) => (
          <span key={techItem} className="project-card__tech">
            {techItem}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        <a href={project.github} target="_blank" className="project-card__link">
          {codeLabel}
        </a>
        <span className="project-card__category">{project.category[locale]}</span>
      </div>
    </article>
  );
}