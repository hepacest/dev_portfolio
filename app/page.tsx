import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="app">
      {/* Global Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <h1 className="app__title">Helen Patricia Acero Castro</h1>
          <p className="app__subtitle"> Developer | Ingeniera de Sistemas | IA aplicada al desarrollo | Mejora continua</p>
        </div>
      </header>

      <main className="app__main">
        <div >
            {/* HERO */}
            <section className="app__hero">
              <div className="app__actions">
                <a href="#projects" className="app__link">
                  Ver proyectos
                </a>
                <a href="https://github.com/hepacest/helen_acero_dev_portfolio?tab=readme-ov-file" target="_blank" className="app__link app__link--secondary">
                  GitHub
                </a>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="projects">
              <h2 className="section__title">Proyectos</h2>

              <div className="projects__grid">
                {projects.map((project, i) => (
                  <article key={i} className="project-card">
                    <h3 className="project-card__title">
                      {project.name}
                    </h3>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    <div className="project-card__tech-list">
                      {project.tech.map((t, i) => (
                        <span key={i} className="project-card__tech">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-card__links">
                      <a href={project.demo} target="_blank" className="project-card__link">
                        Demo
                      </a>
                      <a href={project.github} target="_blank" className="project-card__link">
                        Código
                      </a>
                      <span className="project-card__category">{project.category}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>


            {/* ABOUT ME */}
            <section id="about_me" className="about">
              <h2 className="about__title">Sobre mí</h2>

              <p className="about__text">
                Desarrollador enfocado en construir productos rápidos,
                limpios y funcionales. Interesado en AI y SaaS.
              </p>
            </section>

          </div>
      </main>

      {/* Global Footer */}
      <footer className="app__footer">
        <div className="app__footer-inner">
          <div className="app__footer-grid">
            <div>
              <h3 className="app__footer-title">Características</h3>
              <ul className="app__footer-list">
                <li>✓ Conversión en tiempo real</li>
                <li>✓ Protección contra XSS</li>
                <li>✓ Interfaz intuitiva</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">Tecnologías</h3>
              <ul className="app__footer-list">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Marked + DOMPurify</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">Información</h3>
              <ul className="app__footer-list">
                <li>v1.0</li>
                <li>2026 © HEPAC</li>
              </ul>
            </div>
          </div>
          <div className="app__footer-bottom">
            <p>Diseñado con ❤️ por © HEPAC</p>
          </div>
        </div>
      </footer>


    </div>
  );
}

