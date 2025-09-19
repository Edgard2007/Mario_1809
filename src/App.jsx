import React from 'react'

export default function App() {
  return (
    <div className="site-root">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Fluxo</div>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Um pequeno site criativo em React</h1>
          <p>Design minimalista com micro-interações e estilo moderno.</p>
          <div className="cta">
            <a className="btn" href="#about">Veja mais</a>
            <a className="btn ghost" href="#contact">Entrar em contato</a>
          </div>
        </div>
        <div className="floating-card">Experimente o hover</div>
      </header>

      <main>
        <section id="about" className="panel">
          <h2>Sobre o projeto</h2>
          <p>Este projeto demonstra: React + CSS puro, layout responsivo, efeitos com transform e animações leves.</p>
        </section>

        <section id="features" className="panel split">
          <article>
            <h3>Design responsivo</h3>
            <p>Grid simples com foco em leitura, adaptável a mobile.</p>
          </article>
          <article>
            <h3>Micro-interações</h3>
            <p>Hover, foco e transições para tornar a experiência fluída.</p>
          </article>
        </section>

        <section id="contact" className="panel contact">
          <h2>Contato</h2>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Seu nome" />
            <input placeholder="Seu e-mail" />
            <textarea placeholder="Mensagem" rows={4} />
            <button className="btn" type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Fluxo — Projeto de demonstração</small>
      </footer>
    </div>
  )
}