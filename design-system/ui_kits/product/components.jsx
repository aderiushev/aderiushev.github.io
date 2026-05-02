(function(){
  window.ProductHeader = function ProductHeader({name='Palabrino', mono='P'}) {
    return (
      <header><div className="container"><div className="header-content">
        <a href="#" className="logo"><span className="logo-icon">{mono}</span><span className="logo-text">{name}</span></a>
        <nav><ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#support">Support</a></li>
        </ul></nav>
      </div></div></header>
    );
  };

  window.ProductHero = function ProductHero({mono='P', h1='Learn Spanish Visually', tagline='The fun way to build your vocabulary', desc='Master Spanish words through beautiful imagery and spaced repetition. Available on iOS and Android.'}) {
    return (
      <section className="hero"><div className="container">
        <div className="hero-icon">{mono}</div>
        <h1>{h1}</h1>
        <p className="tagline">{tagline}</p>
        <p className="description">{desc}</p>
        <div className="button-group">
          <a className="btn btn-primary" href="#">  Download for iOS</a>
          <a className="btn btn-secondary" href="#">▶ Google Play</a>
        </div>
      </div></section>
    );
  };

  window.FeatureGrid = function FeatureGrid({items}) {
    const defs = items || [
      {icon:'🖼️', h:'Visual Learning', p:'Associate words with rich imagery to remember them faster and longer.'},
      {icon:'🔥', h:'Streak Tracking', p:'Keep your learning streak alive — a gentle nudge every day.'},
      {icon:'🌍', h:'Offline Ready', p:'Study on the metro, on a plane, anywhere. No signal needed.'},
      {icon:'💡', h:'Smart Repetition', p:'Spaced-repetition algorithm serves words when you need them.'},
      {icon:'🎮', h:'Playful', p:'Minigames turn drills into something you want to come back to.'},
      {icon:'📊', h:'Clear Progress', p:'See exactly what you know, what\'s fading, and what\'s next.'},
    ];
    return (
      <section id="features"><div className="container">
        <h2>Built for the long haul</h2>
        <p className="section-description">Every feature exists to keep you practicing daily — not to pad a comparison table.</p>
        <div className="features-grid">
          {defs.map((f,i)=>(
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.h}</h3><p>{f.p}</p>
            </div>
          ))}
        </div>
      </div></section>
    );
  };

  window.Screenshots = function Screenshots() {
    const [a,setA] = React.useState(1);
    return (
      <section id="screenshots" className="screenshots"><div className="container">
        <h2>See it in motion</h2>
        <p className="section-description">A quick tour — swipe through the experience.</p>
        <div className="screenshots-gallery">
          <div className="screenshots-track">
            {[0,1,2,3].map(i=><div key={i} className="screenshot-image">screenshot {i+1}</div>)}
          </div>
          <div className="gallery-dots">
            {[0,1,2,3].map(i=><span key={i} className={`dot ${a===i?'active':''}`} onClick={()=>setA(i)}/>)}
          </div>
        </div>
      </div></section>
    );
  };

  window.FAQ = function FAQ() {
    const qs = [
      {q:'Is it really free?', a:'Yes — the core app is free. We offer a one-time in-app purchase for extra word packs.'},
      {q:'Do I need an account?', a:'No. Your progress stays on-device unless you opt into iCloud sync.'},
      {q:'Which devices are supported?', a:'iOS 15+ and Android 9+. An iPad-optimized layout ships in the next update.'},
    ];
    return (
      <section id="support"><div className="container">
        <h2>Support</h2>
        <p className="section-description">Most questions land here first.</p>
        {qs.map((x,i)=>(
          <div key={i} className="faq-item"><h3>{x.q}</h3><p>{x.a}</p></div>
        ))}
        <div className="contact-box">
          <h3>Still stuck?</h3>
          <a href="#">support@palabrino.app</a>
        </div>
      </div></section>
    );
  };

  window.ProductFooter = function ProductFooter({name='Palabrino'}){
    return (
      <footer><div className="container">
        <div className="footer-content">
          <div className="footer-section"><h4>{name}</h4><ul><li><a href="#">About</a></li><li><a href="#">Blog</a></li></ul></div>
          <div className="footer-section"><h4>Product</h4><ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Download</a></li></ul></div>
          <div className="footer-section"><h4>Legal</h4><ul><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li><li><a href="#">Support</a></li></ul></div>
        </div>
        <div className="footer-bottom">© 2026 {name}. Made with care in Barcelona.</div>
      </div></footer>
    );
  };
})();
