"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import es from "./languages/es";
import en from "./languages/en";

const translations = { es, en };

export default function Home() {
  const [locale, setLocale] = useState<"es" | "en">("es");
  const t = translations[locale];

  return (
    <div className="app">
      {/* Global Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <div>
            <h1 className="app__title">Helen Patricia Acero Castro | HEPAC</h1>
            <p className="app__subtitle">{t.subtitle}</p>
          </div>
          <div className="app__lang-switch">
            <button
              type="button"
              className={`app__lang-btn ${locale === "en" ? "app__lang-btn--active" : ""}`}
              aria-label={t.ariaEnglish}
              title="English"
              onClick={() => setLocale("en")}
            >
              <img src="/flags/us.svg" alt="Bandera de Estados Unidos" className="app__flag-img" />
            </button>
            <button
              type="button"
              className={`app__lang-btn ${locale === "es" ? "app__lang-btn--active" : ""}`}
              aria-label={t.ariaSpanish}
              title="Español"
              onClick={() => setLocale("es")}
            >
              <img src="/flags/co.svg" alt="Bandera de Colombia" className="app__flag-img" />
            </button>
          </div>
        </div>
      </header>

      <main className="app__main">
        <div >
            {/* HERO */}
            <section className="app__hero">
              <div className="app__actions">
                <a href="#projects" className="app__link">
                  {t.viewProjects}
                </a>
                <a href="https://github.com/hepacest/helen_acero_dev_portfolio?tab=readme-ov-file" target="_blank" className="app__link app__link--secondary">
                  {t.github}
                </a>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="projects">
              <h2 className="section__title">{t.projectsTitle}</h2>

              <div className="projects__grid">
                {projects.map((project, i) => (
                  <article key={i} className="project-card">
                    <h3 className="project-card__title">
                      <a href={project.web} target="_blank" className="project-card__link">
                        {project.name}
                      </a>
                    </h3>

                    <p className="project-card__description">
                      {project.description[locale]}
                    </p>

                    <div className="project-card__tech-list">
                      {project.tech.map((techItem, i) => (
                        <span key={i} className="project-card__tech">
                          {techItem}
                        </span>
                      ))}
                    </div>

                    <div className="project-card__links">
                      {/*<a href={project.demo} target="_blank" className="project-card__link">
                        Demo
                      </a> */}
                      <a href={project.github} target="_blank" className="project-card__link">
                        {t.codeLabel}
                      </a>
                      <span className="project-card__category">{project.category[locale]}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>


            {/* ABOUT ME */}
            <section id="about_me" className="about">
              <h2 className="about__title">{t.aboutTitle}</h2>

              <p className="about__text">
                {t.aboutText1}
              </p>  
              <p className="about__text">
                {t.aboutText2}
              </p>  
              <p className="about__text">
                {t.aboutText3}
              </p>
            </section>

          </div>
      </main>

      {/* Global Footer */}
      <footer className="app__footer">
        <div className="app__footer-inner">
          <div className="app__footer-grid">
            <div>
              <h3 className="app__footer-title">{t.footerFrontend}</h3>
              <ul className="app__footer-list">
                <li>React / Vite</li>
                <li>Tailwind CSS</li>
                <li>DOMPurify (Security)</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">{t.footerDevops}</h3>
              <ul className="app__footer-list">
                <li>Vercel</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </div>
          <div className="app__footer-bottom">
            <p>{t.footerBottom}</p>
          </div>
        </div>
      </footer>


    </div>
  );
}

