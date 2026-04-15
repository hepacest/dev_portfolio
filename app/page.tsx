import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="app">
      {/* Global Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <h1 className="app__title">Helen Patricia Acero Castro | HEPAC</h1>
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
                      <a href={project.web} target="_blank" className="project-card__link">
                        {project.name}
                      </a>
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
                      {/*<a href={project.demo} target="_blank" className="project-card__link">
                        Demo
                      </a> */}
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
                Soy <strong>Desarrolladora Backend</strong> especializada en <strong>Java y Spring</strong>, con una trayectoria enfocada en crear sistemas robustos para los <strong>sectores de banca, telecomunicaciones y gobierno</strong>. Mi fuerte es construir lógica de negocio sólida y escalable, garantizando siempre la eficiencia en entornos de alta demanda.
              </p>  
              <p className="about__text">
                Recientemente, <strong>he expandido mi stack hacia el Frontend y la integración de IA</strong>, transformando ideas en proyectos funcionales y abiertos a la comunidad. Creo firmemente que <strong>la programación debe resolver problemas reales</strong>; por eso, diseño mis proyectos personales con el objetivo de que sean herramientas útiles para otros desarrolladores.
              </p>  
              <p className="about__text">
                Mi meta actual es evolucionar en la intersección entre un backend sólido y las nuevas posibilidades que ofrece la inteligencia artificial, optimizando procesos y <strong>creando software con propósito</strong>.
              </p>
            </section>

          </div>
      </main>

      {/* Global Footer */}
      <footer className="app__footer">
        <div className="app__footer-inner">
          <div className="app__footer-grid">
            <div>
              <h3 className="app__footer-title">Desarrollo Frontend</h3>
              <ul className="app__footer-list">
                <li>React / Vite</li>
                <li>Tailwind CSS</li>
                <li>DOMPurify (Security)</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">DevOps</h3>
              <ul className="app__footer-list">
                <li>Vercel</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </div>
          <div className="app__footer-bottom">
            <p>Diseñado con ❤️ por © HEPAC 2026 </p>
          </div>
        </div>
      </footer>


    </div>
  );
}

