"use client";

import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import en from "@/data/languages/en";
import es from "@/data/languages/es";
import type { Locale } from "@/types/project";

const translations = { es, en };

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = translations[locale];

  return (
    <div className="app">
      <Header
        title={t.title}
        locale={locale}
        subtitle={t.subtitle}
        ariaEnglish={t.ariaEnglish}
        ariaSpanish={t.ariaSpanish}
        onSelectLocale={setLocale}
      />

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

            <ProjectsSection locale={locale} title={t.projectsTitle} codeLabel={t.codeLabel} />


            <AboutSection
              title={t.aboutTitle}
              paragraphs={[t.aboutText1, t.aboutText2, t.aboutText3]}
            />

          </div>
      </main>

      <Footer
        footerFrontend={t.footerFrontend}
        footerDevops={t.footerDevops}
        footerBottom={t.footerBottom}
      />


    </div>
  );
}

