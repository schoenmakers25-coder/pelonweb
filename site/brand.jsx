// Pelon marketing — brand marks & shared atoms.

// ── The mark: three overlapping rings (the peloton). First ring = accent. ──
function PelonMark({ size = 40, style = {} }) {
  const sw = size * 0.115;
  const r = (size - sw) / 2;
  const cy = size / 2;
  // three circles nested horizontally across a wide viewbox
  const w = size * 1.92;
  const gap = size * 0.46;
  const cx1 = r + sw / 2;
  const cx2 = cx1 + gap;
  const cx3 = cx2 + gap;
  return (
    <svg width={w} height={size} viewBox={`0 0 ${w} ${size}`} fill="none" style={{ display: 'block', ...style }}>
      <circle cx={cx3} cy={cy} r={r} stroke="var(--pl-ink-3)" strokeWidth={sw} opacity="0.55" />
      <circle cx={cx2} cy={cy} r={r} stroke="var(--pl-ink-3)" strokeWidth={sw} opacity="0.8" />
      <circle cx={cx1} cy={cy} r={r} stroke="var(--pl-accent)" strokeWidth={sw} />
    </svg>
  );
}

// ── Compact single-ring "target" mark used in nav/footer chrome ──
function PelonGlyph({ size = 34, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" style={{ display: 'block', ...style }}>
      <circle cx="17" cy="17" r="14.5" stroke="var(--pl-ink-3)" strokeWidth="2.4" opacity="0.45" />
      <circle cx="17" cy="17" r="9.3" stroke="var(--pl-accent)" strokeWidth="3" />
      <circle cx="17" cy="17" r="3.4" fill="var(--pl-accent)" />
    </svg>
  );
}

// ── The payoff line — "Join the peloton." ──
function Payoff({ size = 11, color = 'var(--pl-ink-3)', style = {} }) {
  return (
    <span style={{
      fontStyle: 'italic', fontWeight: 600, fontSize: size, letterSpacing: '0.005em',
      color, lineHeight: 1, whiteSpace: 'nowrap', ...style,
    }}>Join the peloton.</span>
  );
}

// ── Wordmark lockup (3-circle mark + "Pelon"), optional payoff beneath ──
function Wordmark({ size = 30, color, glyph = 34, gap = 13, tagline = false, taglineColor, markScale = 0.98 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <PelonMark size={size * markScale} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', gap: size * 0.13 }}>
        <span style={{
          fontSize: size, fontWeight: 800, letterSpacing: '-0.035em',
          color: color || 'var(--pl-ink)', lineHeight: 1,
        }}>Pelon</span>
        {tagline && <Payoff size={size * 0.36} color={taglineColor || 'var(--pl-ink-3)'} />}
      </span>
    </div>
  );
}

// ── Concentric ring backdrop (the splash texture) ──
function RingField({ style = {}, stroke = 'currentColor', opacity = 1, originX = '50%', originY = '38%' }) {
  const rings = [120, 230, 350, 480, 620, 770];
  return (
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, ...style }}
      aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.4">
        {rings.map((r, i) => (
          <circle key={i} cx={originX} cy={originY} r={r} opacity={1 - i * 0.07} />
        ))}
      </g>
    </svg>
  );
}

// ── Eyebrow ──
function Eyebrow({ children, color = 'var(--pl-accent-deep)', style = {} }) {
  return (
    <div style={{
      fontSize: 12.5, fontWeight: 800, letterSpacing: '0.16em',
      textTransform: 'uppercase', color, ...style,
    }}>{children}</div>
  );
}

// ── Buttons ──
function Btn({ children, variant = 'primary', size = 'md', icon, iconAfter, href, onClick, full, style = {}, target, rel }) {
  const pad = size === 'lg' ? '16px 26px' : size === 'sm' ? '10px 16px' : '13px 22px';
  const fs = size === 'lg' ? 17 : size === 'sm' ? 14.5 : 15.5;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
    fontWeight: 800, fontSize: fs, letterSpacing: '-0.01em', padding: pad,
    borderRadius: 'var(--pl-r-pill)', width: full ? '100%' : 'auto', lineHeight: 1,
  };
  const variants = {
    primary: { background: 'var(--pl-accent)', color: 'var(--pl-on-accent)', boxShadow: '0 8px 22px var(--pl-accent-glow)' },
    dark:    { background: 'var(--pl-ink)', color: 'var(--pl-on-ink)' },
    soft:    { background: 'var(--pl-accent-tint)', color: 'var(--pl-accent-deep)' },
    outline: { background: 'transparent', color: 'var(--pl-ink)', boxShadow: 'inset 0 0 0 1.5px var(--pl-hairline-2)' },
    ghost:   { background: 'transparent', color: 'var(--pl-ink-2)' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className="pl-tap" href={href} onClick={onClick} target={target} rel={rel} style={{ ...base, ...variants[variant], ...style }}>
      {icon && <Icon name={icon} size={fs + 3} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={fs + 2} />}
    </Tag>
  );
}

// ── Section scaffold + scroll reveal hook ──
// Pure-CSS staggered entrance (see .reveal in index.html). No JS dependency,
// so content can never get stuck hidden.
function useReveal() {}

function Reveal({ children, delay = 0, style = {}, as = 'div', className = '' }) {
  const Tag = as;
  return <Tag className={`reveal ${className}`} style={{ animationDelay: `${delay}ms`, ...style }}>{children}</Tag>;
}

// ── Background video that only plays while on screen, with graceful fallback ──
function BgVideo({ src, dim = 0, style = {}, onReady }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      else v.pause();
    }), { threshold: 0.12 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <React.Fragment>
      <video ref={ref} muted loop playsInline preload="metadata"
        onLoadedData={() => onReady && onReady()}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }}>
        <source src={src} type="video/mp4" />
      </video>
      {dim > 0 && <div style={{ position: 'absolute', inset: 0, background: `rgba(9,11,13,${dim})`, pointerEvents: 'none' }} />}
    </React.Fragment>
  );
}

// ── Sequenced crossfade video: plays clips in order, gently dissolving between
//    them and looping. Reads each clip's real duration at runtime, so no timings
//    need hardcoding. `rate` < 1 slows playback for a calmer, less busy feel. ──
function SequencedVideo({ sources = [], fade = 1.2, rate = 0.85, onReady, style = {} }) {
  const refs = React.useRef([]);
  const [front, setFront] = React.useState(0);
  const [ready, setReady] = React.useState(false);
  const lockRef = React.useRef(false);

  const advance = React.useCallback((next) => {
    if (lockRef.current) return;
    lockRef.current = true;
    const v = refs.current[next];
    if (v) { try { v.currentTime = 0; v.playbackRate = rate; const p = v.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
    setFront(next);
    // release the lock once the crossfade has completed
    setTimeout(() => { lockRef.current = false; }, fade * 1000 + 80);
  }, [fade, rate]);

  React.useEffect(() => {
    const first = refs.current[0];
    if (first) { first.playbackRate = rate; const p = first.play(); if (p && p.catch) p.catch(() => {}); }
  }, [rate]);

  const handleTime = (i) => () => {
    if (i !== front) return;
    const v = refs.current[i];
    if (!v || !isFinite(v.duration) || v.duration === 0) return;
    if (v.currentTime >= v.duration - fade) {
      advance((i + 1) % sources.length);
    }
  };

  return (
    <React.Fragment>
      {sources.map((src, i) => (
        <video key={src} ref={(el) => (refs.current[i] = el)}
          muted playsInline preload="auto"
          onTimeUpdate={handleTime(i)}
          onLoadedData={() => { if (i === 0 && !ready) { setReady(true); onReady && onReady(); } }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            opacity: i === front ? 1 : 0, transition: `opacity ${fade}s ease-in-out`, ...style }}>
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </React.Fragment>
  );
}

Object.assign(window, { PelonMark, PelonGlyph, Wordmark, Payoff, RingField, Eyebrow, Btn, useReveal, Reveal, BgVideo, SequencedVideo });
