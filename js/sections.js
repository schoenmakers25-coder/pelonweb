// Pelon marketing — page sections.
const PLD = {
  race: 'var(--pl-race)',
  gravel: 'var(--pl-gravel)',
  mtb: 'var(--pl-mtb)'
};

// ════════════════════════ NAV ════════════════════════
function Nav({
  overDark
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onDark = overDark && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    className: onDark ? 'pl-nav-ondark' : '',
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: scrolled ? 'color-mix(in srgb, var(--pl-canvas) 86%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--pl-hairline)' : '1px solid transparent',
      transition: 'background .3s ease, border-color .3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: '14px clamp(20px, 5vw, 48px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 24,
    glyph: 32,
    tagline: true,
    color: onDark ? '#fff' : undefined,
    taglineColor: onDark ? 'rgba(255,255,255,0.7)' : undefined
  })), /*#__PURE__*/React.createElement("nav", {
    className: "pl-navlinks",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#hoe",
    className: "pl-navlink"
  }, "Zo werkt het"), /*#__PURE__*/React.createElement("a", {
    href: "#waarom",
    className: "pl-navlink"
  }, "Waarom Pelon"), /*#__PURE__*/React.createElement("a", {
    href: "#nieuws",
    className: "pl-navlink"
  }, "Nieuws")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pl-loginlink",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--pl-ink-2)'
    }
  }, "Inloggen"), /*#__PURE__*/React.createElement(Btn, {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    size: "sm"
  }, "Probeer nu gratis"))));
}

// ════════════════════════ HERO ════════════════════════
function HeroCopy({
  align = 'left'
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? 760 : 560,
      margin: center ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 14px 7px 11px',
      borderRadius: 'var(--pl-r-pill)',
      background: 'var(--pl-surface)',
      boxShadow: 'var(--pl-shadow)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.race
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.gravel
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.mtb
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--pl-ink-2)',
      letterSpacing: '-0.01em'
    }
  }, "Voor race, gravel & MTB"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    as: "h1",
    style: {
      fontSize: 'clamp(48px, 7vw, 88px)',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 0.98,
      color: 'var(--pl-ink)'
    }
  }, "Wie rijdt", /*#__PURE__*/React.createElement("br", null), "er mee?"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    as: "p",
    style: {
      fontSize: 'clamp(17px, 2vw, 20px)',
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--pl-ink-2)',
      margin: center ? '22px auto 0' : '22px 0 0',
      maxWidth: 480
    }
  }, "Pelon verzamelt alle groepsritten op \xE9\xE9n plek. Plan een rit, zie wie er meegaat en haak met \xE9\xE9n tik aan. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--pl-ink)',
      fontWeight: 700
    }
  }, "Geen WhatsApp-gedoe meer.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 34,
      justifyContent: center ? 'center' : 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    size: "lg",
    iconAfter: "arrowRight"
  }, "Probeer nu gratis"), /*#__PURE__*/React.createElement(Btn, {
    href: "#hoe",
    size: "lg",
    variant: "outline"
  }, "Zo werkt het"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginTop: 22,
      justifyContent: center ? 'center' : 'flex-start',
      color: 'var(--pl-ink-3)',
      fontSize: 13.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 17,
    color: "var(--pl-mtb)"
  }), " Inloggen met Google")));
}

// ════════════════════════ VIDEO HERO (join.cc-style full-bleed) ════════════════════════
function VideoHero() {
  const [hasVideo, setHasVideo] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: 'min(90vh, 860px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: '#0B0D0E',
      marginTop: '-66px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(130% 100% at 72% 18%, #20262b 0%, #11151a 55%, #090b0d 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      color: 'var(--pl-accent)',
      opacity: 0.16,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(RingField, {
    stroke: "currentColor",
    originX: "74%",
    originY: "26%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: hasVideo ? 1 : 0,
      transition: 'opacity .7s ease'
    }
  }, /*#__PURE__*/React.createElement(SequencedVideo, {
    sources: ['assets/pelon-intro-a.mp4', 'assets/pelon-intro.mp4'],
    fade: 1.4,
    rate: 0.82,
    onReady: () => setHasVideo(true)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(to bottom, rgba(9,11,13,0.62) 0%, rgba(9,11,13,0.12) 26%, rgba(9,11,13,0.18) 55%, rgba(9,11,13,0.86) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(40px, 8vw, 88px) clamp(20px, 5vw, 48px) clamp(48px, 7vw, 84px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 14px 7px 11px',
      borderRadius: 'var(--pl-r-pill)',
      background: 'rgba(255,255,255,0.12)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)',
      marginBottom: 22,
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.race
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.gravel
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PLD.mtb
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, "Voor race, gravel & MTB"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    as: "h1",
    style: {
      fontSize: 'clamp(46px, 6.6vw, 84px)',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 0.98,
      color: '#fff'
    }
  }, "Wie rijdt", /*#__PURE__*/React.createElement("br", null), "er mee?"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    as: "p",
    style: {
      fontSize: 'clamp(17px, 2vw, 20px)',
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.82)',
      margin: '20px 0 0',
      maxWidth: 500
    }
  }, "Pelon verzamelt alle groepsritten op \xE9\xE9n plek. Plan een rit, zie wie er meegaat en haak met \xE9\xE9n tik aan."), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    size: "lg",
    iconAfter: "arrowRight"
  }, "Probeer nu gratis"), /*#__PURE__*/React.createElement(Btn, {
    href: "#hoe",
    size: "lg",
    variant: "outline",
    style: {
      color: '#fff',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.34)'
    }
  }, "Zo werkt het"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginTop: 20,
      color: 'rgba(255,255,255,0.66)',
      fontSize: 13.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 17,
    color: "var(--pl-accent)"
  }), " Maak eenvoudig een account aan en start direct")))));
}
function Hero({
  layout
}) {
  if (layout === 'video') return /*#__PURE__*/React.createElement(VideoHero, null);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      color: 'var(--pl-accent)',
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(RingField, {
    stroke: "currentColor",
    originX: layout === 'centered' ? '50%' : '78%',
    originY: "42%"
  })), layout === 'split' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 48px) clamp(64px, 8vw, 110px)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 40,
      alignItems: 'center',
      position: 'relative'
    },
    className: "pl-hero-split"
  }, /*#__PURE__*/React.createElement(HeroCopy, null), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    width: 310
  }))), layout === 'centered' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: 'clamp(48px, 7vw, 92px) clamp(20px, 5vw, 48px) 0',
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(HeroCopy, {
    align: "center"
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    width: 300
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'clamp(40px, 6vw, 80px)'
    }
  })), layout === 'duo' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 48px) clamp(72px, 9vw, 130px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30,
      alignItems: 'center',
      position: 'relative'
    },
    className: "pl-hero-split"
  }, /*#__PURE__*/React.createElement(HeroCopy, null), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      position: 'relative',
      height: 660,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      transform: 'translateX(72px) rotate(7deg) scale(0.86)',
      opacity: 0.92,
      filter: 'saturate(0.95)'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    width: 280,
    screen: /*#__PURE__*/React.createElement(WeekScreen, null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transform: 'translateX(-52px) rotate(-3deg)'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    width: 290
  })))));
}

// Secondary phone screen for the "duo" hero — the "Mijn week" stat header
function WeekScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--pl-canvas)',
      fontFamily: 'var(--pl-font)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pl-ink-3)'
    }
  }, "Jouw planning"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--pl-ink)',
      marginTop: 2
    }
  }, "Mijn week"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '20px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--pl-accent-deep)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "Deze week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--pl-ink-3)'
    }
  }, "3 jun \u2013 9 jun")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--pl-surface)',
      borderRadius: 20,
      boxShadow: 'var(--pl-shadow)',
      padding: '18px 8px',
      marginTop: 8
    }
  }, [['4', 'Ritten'], ['295', 'Km'], ['2', 'Groepen']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      borderLeft: i ? '1.5px solid var(--pl-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--pl-ink)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--pl-ink-3)',
      marginTop: 2
    }
  }, l))))));
}

// ════════════════════════ MARQUEE / proof strip ════════════════════════
function ProofStrip() {
  const items = ['Race', 'Koffieritjes', 'MTB', 'Gravel', 'Verenigingen', 'Evenementen', 'Trainingen', 'Toerclubs', 'Vrienden'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--pl-hairline)',
      borderBottom: '1px solid var(--pl-hairline)',
      background: 'var(--pl-surface-2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      whiteSpace: 'nowrap',
      animation: 'pl-marquee 28s linear infinite'
    },
    className: "pl-marquee-track"
  }, [...items, ...items, ...items].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 28,
      padding: '16px 0',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--pl-ink-3)',
      letterSpacing: '-0.01em'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--pl-accent)',
      margin: '0 28px'
    }
  })))));
}

// ════════════════════════ HOW IT WORKS ════════════════════════
function HowItWorks() {
  const steps = [{
    n: '01',
    icon: 'users',
    title: 'Maak of vind je groep',
    body: 'Start je eigen groep, of sluit je aan bij een bestaande groep of vereniging bij jou in de buurt.',
    tint: PLD.race
  }, {
    n: '02',
    icon: 'calendar',
    title: 'Plan of haak aan',
    body: 'Zet een rit in de kalender, of tik “Aanhaken” bij een rit die je ziet. Nodig eenvoudig vrienden uit.',
    tint: 'var(--pl-accent)'
  }, {
    n: '03',
    icon: 'route',
    title: 'Samen rijden',
    body: 'Iedereen ziet vooraf wie er meegaat. Meer opkomst, meer kilometers, meer plezier in het peloton.',
    tint: PLD.mtb
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "hoe",
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(72px, 10vw, 130px) clamp(20px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 720,
      marginBottom: 'clamp(40px, 5vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Zo werkt het"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4.6vw, 54px)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.04,
      color: 'var(--pl-ink)',
      marginTop: 16
    }
  }, "Van losse appjes naar \xE9\xE9n duidelijk overzicht.")), /*#__PURE__*/React.createElement("div", {
    className: "pl-steps",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 110,
    style: {
      background: 'var(--pl-surface)',
      borderRadius: 'var(--pl-r-card)',
      boxShadow: 'var(--pl-shadow)',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: 'var(--pl-surface-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: s.tint,
      boxShadow: 'inset 0 0 0 1.5px var(--pl-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: 'var(--pl-ink-3)',
      letterSpacing: '0.02em'
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--pl-ink)',
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--pl-ink-2)'
    }
  }, s.body)))));
}

// ════════════════════════ SEASON ATTENDANCE SHOWCASE ════════════════════════
function SeasonShowcase() {
  return /*#__PURE__*/React.createElement("section", {
    id: "seizoen",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(64px, 9vw, 120px) clamp(20px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-season-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(40px, 6vw, 88px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nieuw \xB7 Seizoensopkomst"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4.6vw, 54px)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.04,
      color: 'var(--pl-ink)',
      margin: '16px 0 20px'
    }
  }, "Zie wie er dit seizoen \xE9cht bij is."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: 1.55,
      color: 'var(--pl-ink-2)',
      maxWidth: 440,
      marginBottom: 28
    }
  }, "Elke groep heeft een ranglijst van wie hoe vaak meereed. Geen snelheidsranking, geen wattages, gewoon trouwe opkomst. Het zet de stille krachten in het zonnetje en geeft iedereen een reden om er volgende week weer bij te zijn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    icon: 'crown',
    tint: 'var(--pl-gold)',
    t: 'Ranglijst per groep, het hele seizoen'
  }, {
    icon: 'users',
    tint: 'var(--pl-race)',
    t: 'Telt meegereden ritten, niet app-gebruik'
  }, {
    icon: 'flame',
    tint: 'var(--pl-accent)',
    t: 'Houdt de opkomst week na week hoog'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--pl-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pl-surface-2)',
      color: r.tint,
      boxShadow: 'inset 0 0 0 1.5px var(--pl-hairline)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 16,
    fill: r.icon === 'crown',
    stroke: r.icon === 'crown' ? 0 : 1.75
  })), r.t)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    width: 300,
    screen: /*#__PURE__*/React.createElement(SeasonScreen, null)
  })))));
}
function FeatureRow() {
  return /*#__PURE__*/React.createElement("section", {
    id: "waarom",
    style: {
      background: 'var(--pl-surface-2)',
      borderTop: '1px solid var(--pl-hairline)',
      borderBottom: '1px solid var(--pl-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(72px, 10vw, 130px) clamp(20px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-why-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(40px, 6vw, 90px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Waarom Pelon"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4.6vw, 54px)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.04,
      color: 'var(--pl-ink)',
      margin: '16px 0 20px'
    }
  }, "Geen ruis."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: 1.55,
      color: 'var(--pl-ink-2)',
      maxWidth: 420,
      marginBottom: 28
    }
  }, "Pelon is puur voor het plannen, geen chat, geen trainingsschema's, geen verjaardagen. Gewoon makkelijk samen afspreken."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Alle groepsritten op één plek', 'Vooraf zien wie er meegaat', 'Openbaar of privé, laat je groep groeien'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--pl-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 22,
    color: "var(--pl-accent)"
  }), " ", t)))), /*#__PURE__*/React.createElement("div", {
    className: "pl-feat-cards",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, [{
    icon: 'layers',
    tint: PLD.race,
    title: 'Deze week',
    body: 'Eén blik op alle ritten over al je groepen heen, maak eenvoudig je plan voor deze week.'
  }, {
    icon: 'crown',
    tint: 'var(--pl-gold)',
    title: 'Kopman-badge',
    body: 'Zichtbare erkenning voor wie ritten organiseert. Zij zijn de motor.',
    fill: true
  }, {
    icon: 'signal',
    tint: 'var(--pl-accent)',
    title: 'Groepspagina',
    body: 'Per groep een seizoensoverzicht: wie reed hoe vaak mee. De trouwe rijders in beeld.'
  }, {
    icon: 'globe',
    tint: PLD.mtb,
    title: 'Vind groepen',
    body: 'Zoek openbare groepen en verenigingen op startlocatie en afstand.'
  }].map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90,
    style: {
      background: 'var(--pl-surface)',
      borderRadius: 'var(--pl-r-lg)',
      boxShadow: 'var(--pl-shadow)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 13,
      background: 'var(--pl-surface-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: f.tint,
      marginBottom: 18,
      boxShadow: 'inset 0 0 0 1.5px var(--pl-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 21,
    fill: f.fill,
    stroke: f.fill ? 0 : 1.75
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17.5,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--pl-ink)',
      marginBottom: 7
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--pl-ink-2)'
    }
  }, f.body)))))));
}

// ════════════════════════ LIMBURG / CLUBS CTA (dark band) ════════════════════════
function ClubsBand() {
  return /*#__PURE__*/React.createElement("section", {
    id: "clubs",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--pl-ink)',
      color: 'var(--pl-on-ink)'
    }
  }, /*#__PURE__*/React.createElement(BgVideo, {
    src: "assets/clip-limburg.mp4",
    dim: 0.66,
    style: {
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(9,11,13,0.92) 0%, rgba(9,11,13,0.7) 45%, rgba(9,11,13,0.45) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      color: 'var(--pl-accent)',
      opacity: 0.13
    }
  }, /*#__PURE__*/React.createElement(RingField, {
    stroke: "currentColor",
    originX: "84%",
    originY: "50%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(72px, 10vw, 128px) clamp(20px, 5vw, 48px)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-clubs-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--pl-accent)"
  }, "Pilot in Limburg"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '8px 15px 8px 12px',
      borderRadius: 'var(--pl-r-pill)',
      background: 'color-mix(in srgb, var(--pl-accent) 16%, transparent)',
      boxShadow: 'inset 0 0 0 1.5px color-mix(in srgb, var(--pl-accent) 45%, transparent)',
      margin: '18px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crown",
    size: 16,
    color: "var(--pl-accent)",
    fill: true,
    stroke: 0
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: 'var(--pl-on-ink)'
    }
  }, "Founding clubs \xB7 de eerste 50")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px, 5vw, 60px)',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.0,
      color: 'var(--pl-on-ink)',
      margin: '14px 0 22px'
    }
  }, "Gezocht: fietsclubs in Limburg!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 1.9vw, 19px)',
      fontWeight: 500,
      lineHeight: 1.55,
      color: 'color-mix(in srgb, var(--pl-on-ink) 72%, transparent)',
      maxWidth: 540,
      marginBottom: 18
    }
  }, "We zoeken Limburgse clubs en groepen die Pelon als eerste willen gebruiken en meedenken. Jullie ervaring maakt de app beter, en jullie ritten zitten vanaf dag \xE9\xE9n voller."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 1.9vw, 19px)',
      fontWeight: 600,
      lineHeight: 1.55,
      color: 'var(--pl-on-ink)',
      maxWidth: 540,
      marginBottom: 30
    }
  }, "De eerste 50 clubs blijven voor altijd gratis rijden, ook als we later betaalde extra's toevoegen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    size: "lg",
    iconAfter: "arrowRight"
  }, "Doe mee met de pilot"), /*#__PURE__*/React.createElement(Btn, {
    href: "mailto:hallo@pelon.cc?subject=Kennismaking%20Pelon%20pilot",
    size: "lg",
    variant: "outline",
    style: {
      color: 'var(--pl-on-ink)',
      boxShadow: 'inset 0 0 0 1.5px color-mix(in srgb, var(--pl-on-ink) 30%, transparent)'
    }
  }, "Plan kennismaking"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    className: "pl-clubs-stats"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, [['50 clubs', 'rijden voor altijd gratis'], ['1 ingang', 'naar een hele vereniging tegelijk'], ['0 drempel', 'openbare groepen, één tik aanmelden']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '22px 0',
      borderTop: i ? '1px solid color-mix(in srgb, var(--pl-on-ink) 16%, transparent)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(30px, 4vw, 42px)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--pl-accent)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'color-mix(in srgb, var(--pl-on-ink) 66%, transparent)',
      marginTop: 4
    }
  }, l))))))));
}

// ════════════════════════ FINAL CTA / SIGN-UP ════════════════════════
function SignUp() {
  return /*#__PURE__*/React.createElement("section", {
    id: "start",
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(80px, 11vw, 150px) clamp(20px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      background: 'var(--pl-surface)',
      borderRadius: 'clamp(28px, 4vw, 44px)',
      boxShadow: 'var(--pl-shadow-lg)',
      overflow: 'hidden',
      textAlign: 'center',
      padding: 'clamp(48px, 7vw, 90px) clamp(24px, 5vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      color: 'var(--pl-accent)',
      opacity: 0.06
    }
  }, /*#__PURE__*/React.createElement(RingField, {
    stroke: "currentColor",
    originX: "50%",
    originY: "30%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 520,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PelonMark, {
    size: 46
  }), /*#__PURE__*/React.createElement(Payoff, {
    size: 14,
    color: "var(--pl-ink-3)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4.8vw, 56px)',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.02,
      color: 'var(--pl-ink)',
      marginBottom: 16
    }
  }, "Klaar om samen te rijden?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--pl-ink-2)',
      marginBottom: 34
    }
  }, "Maak gratis een account aan en haal je peloton naar Pelon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 380,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pl-tap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 11,
      padding: '16px',
      borderRadius: 'var(--pl-r-pill)',
      background: 'var(--pl-surface)',
      boxShadow: 'inset 0 0 0 1.5px var(--pl-hairline-2)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--pl-ink)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "google",
    size: 20
  }), " Doorgaan met Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--pl-ink-3)',
      fontSize: 13,
      fontWeight: 600,
      margin: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--pl-hairline)'
    }
  }), " of ", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--pl-hairline)'
    }
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    size: "lg",
    full: true
  }, "Account aanmaken met e-mail")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--pl-ink-3)',
      marginTop: 22
    }
  }, "Al een account? ", /*#__PURE__*/React.createElement("a", {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--pl-accent-deep)',
      fontWeight: 700
    }
  }, "Log in")))));
}

// ════════════════════════ NEWS ════════════════════════
function NewsCard({
  tag,
  tagColor,
  date,
  read,
  title,
  excerpt,
  featured,
  video
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "pl-news-card pl-tap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      width: '100%',
      background: 'var(--pl-surface)',
      borderRadius: 'var(--pl-r-card)',
      boxShadow: 'var(--pl-shadow)',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      height: featured ? 260 : 190,
      background: `linear-gradient(135deg, color-mix(in srgb, ${tagColor} 22%, var(--pl-surface)), color-mix(in srgb, ${tagColor} 7%, var(--pl-surface)))`
    }
  }, video ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BgVideo, {
    src: video
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(9,11,13,0.34), rgba(9,11,13,0.12) 40%, rgba(9,11,13,0.3))',
      pointerEvents: 'none'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      color: tagColor,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(RingField, {
    stroke: "currentColor",
    originX: "78%",
    originY: "42%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '7px 13px',
      borderRadius: 'var(--pl-r-pill)',
      background: 'var(--pl-surface)',
      boxShadow: 'var(--pl-shadow)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: tagColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '0.02em',
      color: 'var(--pl-ink)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      bottom: 16,
      color: video ? '#fff' : tagColor,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(PelonMark, {
    size: featured ? 40 : 30
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? '28px 30px 30px' : '22px 24px 26px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--pl-ink-3)',
      marginBottom: 12
    }
  }, date, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\xB7"), " ", read, " min lezen"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: featured ? 26 : 20,
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
      color: 'var(--pl-ink)',
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: featured ? 16 : 14.5,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--pl-ink-2)',
      marginBottom: 18,
      maxWidth: featured ? 560 : 'none'
    }
  }, excerpt), /*#__PURE__*/React.createElement("a", {
    href: "https://app.pelon.cc",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 14.5,
      fontWeight: 800,
      color: 'var(--pl-accent-deep)'
    }
  }, "Lees meer ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16
  }))));
}
function News() {
  const items = [{
    tag: 'Lancering',
    tagColor: 'var(--pl-accent)',
    date: '8 jun 2026',
    read: 2,
    featured: true,
    video: 'assets/clip-nieuws.mp4',
    title: 'Pelon is live en de eerste 50 clubs rijden voor altijd gratis',
    excerpt: 'Vanaf vandaag kun je in Pelon je groep aanmaken, ritten plannen en met één tik aanhaken. Om de pilot in Limburg te vieren blijven de eerste 50 clubs die instappen voor altijd gratis rijden, ook als we later betaalde extra’s toevoegen.'
  }, {
    tag: 'Update',
    tagColor: 'var(--pl-race)',
    date: '8 jun 2026',
    read: 1,
    title: 'Nieuw: zie de seizoensopkomst per groep',
    excerpt: 'Elke groepspagina heeft nu een seizoensoverzicht: wie reed hoe vaak mee. Geen snelheidsranking, gewoon trouwe opkomst in beeld.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "nieuws",
    style: {
      background: 'var(--pl-surface-2)',
      borderTop: '1px solid var(--pl-hairline)',
      borderBottom: '1px solid var(--pl-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(72px, 10vw, 124px) clamp(20px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 'clamp(36px, 5vw, 56px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nieuws"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4.6vw, 54px)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.04,
      color: 'var(--pl-ink)',
      marginTop: 16
    }
  }, "Vers vanuit het peleton."))), /*#__PURE__*/React.createElement("div", {
    className: "pl-news-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 22
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100,
    style: {
      display: 'flex',
      gridColumn: it.featured ? 'span 2' : 'span 1'
    }
  }, /*#__PURE__*/React.createElement(NewsCard, it))))));
}

// ════════════════════════ FOOTER ════════════════════════
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--pl-hairline)',
      background: 'var(--pl-surface-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--pl-container)',
      margin: '0 auto',
      padding: 'clamp(48px, 6vw, 72px) clamp(20px, 5vw, 48px) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 24,
    glyph: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 500,
      lineHeight: 1.55,
      color: 'var(--pl-ink-2)',
      maxWidth: 280,
      margin: '18px 0 0'
    }
  }, "Het peloton in je broekzak. Samen rijden, simpel geregeld."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Payoff, {
    size: 15,
    color: "var(--pl-ink-3)"
  }))), [{
    h: 'Product',
    links: [{
      label: 'Zo werkt het',
      href: '#hoe'
    }, {
      label: 'Waarom Pelon',
      href: '#waarom'
    }, {
      label: 'Voor clubs',
      href: '#clubs'
    }, {
      label: 'Nieuws',
      href: '#nieuws'
    }]
  }, {
    h: 'Disciplines',
    links: [{
      label: 'Race',
      href: 'https://app.pelon.cc'
    }, {
      label: 'Gravel',
      href: 'https://app.pelon.cc'
    }, {
      label: 'MTB',
      href: 'https://app.pelon.cc'
    }, {
      label: 'Verenigingen',
      href: 'https://app.pelon.cc'
    }]
  }, {
    h: 'Contact',
    links: [{
      label: 'hallo@pelon.cc',
      href: 'mailto:hallo@pelon.cc'
    }, {
      label: 'Pilot Limburg',
      href: '#clubs'
    }, {
      label: 'Feedback delen',
      href: 'mailto:hallo@pelon.cc?subject=Feedback%20Pelon'
    }]
  }].map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--pl-ink-3)',
      marginBottom: 16
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href,
    className: "pl-footlink",
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--pl-ink-2)'
    }
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pl-hairline)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--pl-ink-3)'
    }
  }, "\xA9 2026 Pelon \xB7 pelon.cc"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--pl-ink-3)'
    }
  }, "Gemaakt voor wielrenners, gravel & MTB"))));
}
Object.assign(window, {
  Nav,
  Hero,
  ProofStrip,
  HowItWorks,
  SeasonShowcase,
  FeatureRow,
  ClubsBand,
  News,
  SignUp,
  Footer
});