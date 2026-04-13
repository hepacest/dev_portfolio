export default function Home() {
  return (
    <div>
      {/* Global Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <h1 className="app__title">Helen Patricia Acero Castro</h1>
          <p className="app__subtitle"> Desarrollador Full Stack enfocado en apps modernas</p>
        </div>
      </header>

      <main className="app">
        <section className="app__main">
          <div className="app__container">
            {/* HERO */}
            <section className="app__hero">

              <div className="app__actions">
                <a href="#projects" className="app__link">
                  Ver proyectos
                </a>
                <a href="https://github.com/" target="_blank" className="app__link app__link--secondary">
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

