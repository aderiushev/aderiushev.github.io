(function() {
  const {useState} = React;

  window.Nav = function Nav() {
    return (
      <header className="nav">
        <div className="nav-row">
          <a href="#" className="logo">
            <span className="logo-mark">AD</span>
            <span className="logo-text">Deriushev</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <span className="status-pill"><span className="dot"></span>Open to work</span>
        </div>
      </header>
    );
  };

  window.Hero = function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="eyebrow">// Senior Front-end Engineer · Barcelona, ES</span>
              <h1 className="big">
                Building<br/>
                <span className="hl">high-performance</span><br/>
                <span className="stroke">web &amp;</span> mobile<br/>
                apps since 2012.
              </h1>
              <p className="hero-tagline">
                I'm <b>Aleksei Deriushev</b> — 14+ years shipping React, React Native, TypeScript &amp; Node.js.
              </p>
              <div className="hero-meta">
                <span className="tag">📍 Barcelona, ES</span>
                <span className="tag">✉ derushev.aleksei@gmail.com</span>
                <span className="tag">🌐 EN · ES · RU</span>
              </div>
              <div className="hero-actions">
                <a className="btn solid-orange" href="#">⬇ Download CV</a>
                <a className="btn solid-yellow" href="#">★ GitHub</a>
                <a className="btn solid-cyan" href="#">in LinkedIn</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="photo-frame">
                <div className="photo-portrait" style={{display:'grid',placeItems:'center',color:'#fff',fontFamily:"'Archivo Black'",fontSize:48}}>AD</div>
                <div className="caption">&gt;&gt; AD_PORTRAIT.JPG</div>
              </div>
              <div className="fact">
                <strong>5.7M+</strong>
                <span>Downloads on Spoten // App Store Editor's Choice</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  window.Marquee = function Marquee() {
    const items = 'React ★ React Native ★ TypeScript ★ Node.js ★ Next.js ★ GraphQL ★ NestJS ★ Expo ★ Docker ★';
    return (
      <div className="marquee">
        <div className="marquee-track">
          <span>{items}</span><span>{items}</span>
        </div>
      </div>
    );
  };

  window.SectionHead = function SectionHead({num, title, chipText, chipColor='yellow'}) {
    return (
      <div className="section-head">
        <span className="section-num">{num}</span>
        <h2 className="section-title">{title} <span className={`chip ${chipColor}`}>{chipText}</span></h2>
      </div>
    );
  };

  window.TldrGrid = function TldrGrid() {
    return (
      <div className="tldr-grid">
        <div className="tldr-card"><div className="tldr-icon">📍</div><h3>Lead Developer of Spoten</h3><p>Phone location tracker. iOS Editor's Choice, Top-10 in Navigation.</p><div className="tldr-stat">// 5.7M+ downloads</div></div>
        <div className="tldr-card"><div className="tldr-icon">⟁</div><h3>Leading role on Haqqex &amp; Haqabi</h3><p>DEX crypto market + mobile wallet on the HAQQ Network.</p><div className="tldr-stat">// Realtime DEX</div></div>
        <div className="tldr-card"><div className="tldr-icon">▶</div><h3>Solo frontend on Rakuten TV</h3><p>Top-100 global streaming platform. Legacy owned end-to-end.</p><div className="tldr-stat">// 3M+ monthly users</div></div>
      </div>
    );
  };

  window.SkillsGrid = function SkillsGrid() {
    const groups = [
      {cls:'c-yellow',title:'Frontend',count:13,chips:['TypeScript','React','React Native','Next.js','Redux','MobX','Zustand','Styled-components','Tailwind','TanStack Query','Expo','Electron','Zod']},
      {cls:'c-cyan',title:'Backend',count:10,chips:['Node.js','Express','NestJS','Prisma','GraphQL','WebSockets','SQL','Firebase','AWS','RPC']},
      {cls:'c-lime',title:'Testing & Tools',count:11,chips:['Vite','Webpack','Turborepo','Cypress','Playwright','Jest','Docker','Figma','Sentry','Rollbar','Youbora']},
      {cls:'c-orange',title:'DevOps & Cloud',count:6,chips:['Kubernetes','Docker','AWS','CI/CD','GitHub Actions','GitLab CI']},
    ];
    return (
      <div className="skills-grid">
        {groups.map(g=>(
          <div key={g.title} className={`skills-card ${g.cls}`}>
            <h3>{g.title} <span className="count">{g.count}</span></h3>
            <div className="skill-list">{g.chips.map(c=><span key={c} className="skill-chip">{c}</span>)}</div>
          </div>
        ))}
      </div>
    );
  };

  window.Projects = function Projects() {
    const ps=[
      {n:'01',g:'CM',h:'Control Manager',p:'Team task management app.'},
      {n:'02',g:'N3',h:'N3WS',p:'News in 3 words — AI headlines.'},
      {n:'03',g:'PA',h:'Palabrino',p:'Learn Spanish visually.'},
      {n:'04',g:'FX',h:'Exchange Tracker',p:'Track RUB/USDT/EUR live.'},
      {n:'05',g:'VP',h:'Vispana',p:'BLS Spain visa slot finder.'},
      {n:'06',g:'PR',h:'Pirate',p:'2D auto-runner in Godot 4.6.'},
      {n:'07',g:'NT',h:'ninja-tch',p:'P2P BLE walkie-talkie.'},
      {n:'08',g:'LP',h:'Lovepoints',p:'Gamified couples app.'},
    ];
    return (
      <div className="projects-grid">
        {ps.map(p=>(
          <div key={p.n} className="proj">
            <div className="proj-top"><span className="proj-num">{p.n}</span><span className="proj-glyph">{p.g}</span></div>
            <h3>{p.h}</h3><p>{p.p}</p>
            <a className="proj-link" href="#">Open →</a>
          </div>
        ))}
      </div>
    );
  };

  window.Contact = function Contact() {
    return (
      <div className="contact-wrap">
        <div className="contact-card">
          <h3>Say hi. I answer.</h3>
          <p>New opportunities, weird projects, coffee in Barcelona — all welcome.</p>
          <div className="contact-list">
            <a className="contact-item" href="#"><span className="contact-icon">@</span>derushev.aleksei@gmail.com</a>
            <a className="contact-item" href="#"><span className="contact-icon">☏</span>+34 614 377 858</a>
            <a className="contact-item" href="#"><span className="contact-icon">GH</span>github.com/aderiushev</a>
            <a className="contact-item" href="#"><span className="contact-icon">in</span>linkedin.com/in/aderiushev</a>
          </div>
        </div>
        <div className="availability">
          <h3>Status<br/>Report</h3>
          <div className="avail-row"><span>LOCATION</span><span className="v">Barcelona, ES</span></div>
          <div className="avail-row"><span>ROLE</span><span className="v">Sr. Front-end</span></div>
          <div className="avail-row"><span>AVAILABILITY</span><span className="v">Selective</span></div>
          <div className="avail-row"><span>TIMEZONE</span><span className="v">CET / UTC+1</span></div>
          <div className="avail-row"><span>LANGUAGES</span><span className="v">EN · ES · RU</span></div>
          <div className="avail-row"><span>RESPONSE</span><span className="v">&lt; 24h</span></div>
        </div>
      </div>
    );
  };

  window.Footer = function Footer(){
    return (
      <footer className="site-foot">
        <div className="container">
          <div className="foot-row">
            <div className="fm">© 2026 DERIUSHEV<span>.</span></div>
            <div className="foot-meta">
              <a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Email</a>
              <span>// HAND-MADE IN BARCELONA</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
})();
