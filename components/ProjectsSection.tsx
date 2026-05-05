import { projects } from "@/data/projects";
import type { Locale } from "@/types/project";
import ProjectCard from "./ProjectCard";

type ProjectsSectionProps = {
  locale: Locale;
  title: string;
  codeLabel: string;
};

export default function ProjectsSection({ locale, title, codeLabel }: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects">
      <h2 className="section__title">{title}</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} locale={locale} codeLabel={codeLabel} />
        ))}
      </div>
    </section>
  );
}