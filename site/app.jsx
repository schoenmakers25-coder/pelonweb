// Pelon marketing — app shell: tweaks, theme, accent, responsive CSS.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "video",
  "accent": "#FF5A3C"
}/*EDITMODE-END*/;

const ACCENTS = ['#FF5A3C', '#1FAFBE', '#3E8B5C', '#C8822E', '#7B5BD6'];

function applyAccent(hex) {
  const r = document.documentElement.style;
  r.setProperty('--pl-accent', hex);
  r.setProperty('--pl-accent-deep', `color-mix(in srgb, ${hex} 82%, #000)`);
  r.setProperty('--pl-accent-tint', `color-mix(in srgb, ${hex} 13%, #fff)`);
  r.setProperty('--pl-accent-glow', `color-mix(in srgb, ${hex} 32%, transparent)`);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  React.useEffect(() => { applyAccent(t.accent); }, [t.accent]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--pl-canvas)' }}>
      <Nav overDark={t.heroLayout === 'video'} />
      <main>
        <Hero layout={t.heroLayout} />
        <ProofStrip />
        <HowItWorks />
        <FeatureRow />
        <ClubsBand />
        <News />
        <SignUp />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Layout" value={t.heroLayout}
          options={[{ value: 'video', label: 'Video' }, { value: 'split', label: 'Split' }, { value: 'centered', label: 'Centered' }, { value: 'duo', label: 'Duo' }]}
          onChange={(v) => setTweak('heroLayout', v)} />
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent} options={ACCENTS}
          onChange={(v) => setTweak('accent', v)} />
      </TweaksPanel>
    </div>
  );
}

// Runtime CSS: hover states, marquee, responsive collapse.
const styleEl = document.createElement('style');
styleEl.textContent = `
  .pl-navlink { font-size: 15px; font-weight: 600; color: var(--pl-ink-2); transition: color .15s ease; }
  .pl-navlink:hover, .pl-loginlink:hover, .pl-footlink:hover { color: var(--pl-accent-deep); }
  .pl-nav-ondark .pl-navlink { color: rgba(255,255,255,0.85); }
  .pl-nav-ondark .pl-navlink:hover { color: #fff; }
  .pl-footlink { transition: color .15s ease; }
  @keyframes pl-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }

  @media (max-width: 900px) {
    .pl-navlinks { display: none !important; }
    .pl-hero-split { grid-template-columns: 1fr !important; gap: 8px !important; text-align: center; }
    .pl-hero-split > div:first-child { margin: 0 auto; }
    .pl-hero-split .reveal[style*="justify"] { justify-content: center !important; }
    .pl-steps { grid-template-columns: 1fr !important; }
    .pl-why-grid { grid-template-columns: 1fr !important; }
    .pl-season-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
    .pl-feat-cards { grid-template-columns: 1fr 1fr !important; }
    .pl-news-grid { grid-template-columns: 1fr !important; }
    .pl-news-grid > .reveal { grid-column: span 1 !important; }
    .pl-clubs-grid { grid-template-columns: 1fr !important; }
    .pl-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
  }
  @media (max-width: 560px) {
    .pl-feat-cards { grid-template-columns: 1fr !important; }
    .pl-footer-grid { grid-template-columns: 1fr !important; }
    .pl-loginlink { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .pl-marquee-track { animation: none !important; }
  }
`;
document.head.appendChild(styleEl);

// Center the hero copy block flex children when stacked on mobile is handled above.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
