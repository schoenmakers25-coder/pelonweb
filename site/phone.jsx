// Pelon marketing — phone mockup recreating the Kalender screen.

const DISC = {
  race:   { color: 'var(--pl-race)',   label: 'Race' },
  gravel: { color: 'var(--pl-gravel)', label: 'Gravel' },
  mtb:    { color: 'var(--pl-mtb)',    label: 'MTB' },
};

function Avatar({ initials, color, size = 28, me }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: me ? 'var(--pl-ink)' : color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.37, fontWeight: 700, flexShrink: 0,
      boxShadow: '0 0 0 2.5px var(--pl-surface)',
    }}>{initials}</div>
  );
}

function Stack({ people, size = 28 }) {
  return (
    <div style={{ display: 'flex' }}>
      {people.map((p, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -size * 0.32, zIndex: people.length - i }}>
          <Avatar {...p} size={size} />
        </div>
      ))}
    </div>
  );
}

function MiniMeta({ icon, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12.5, fontWeight: 600, color: 'var(--pl-ink-2)' }}>
      <Icon name={icon} size={14} color="var(--pl-ink-3)" /> {children}
    </span>
  );
}

function RideCard({ ride, joined }) {
  const d = DISC[ride.discipline];
  return (
    <div style={{
      background: 'var(--pl-surface)', borderRadius: 20, boxShadow: 'var(--pl-shadow)',
      padding: 15, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: 0, top: 15, bottom: 15, width: 3.5, borderRadius: 4, background: d.color }} />
      <div style={{ paddingLeft: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.02em', color: d.color, textTransform: 'uppercase' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }} /> {d.label}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12.5, fontWeight: 700, color: 'var(--pl-ink-2)' }}>
            <Icon name="clock" size={13} color="var(--pl-ink-3)" /> {ride.time}
          </span>
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', margin: '8px 0 2px', lineHeight: 1.12, color: 'var(--pl-ink)' }}>{ride.title}</h3>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--pl-ink-3)', marginBottom: 10 }}>{ride.group}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', marginBottom: 13 }}>
          <MiniMeta icon="pin">{ride.start}</MiniMeta>
          <MiniMeta icon="gauge">{ride.tempo}</MiniMeta>
          <MiniMeta icon="ruler">{ride.km} km</MiniMeta>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <Stack people={ride.people} />
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '9px 16px', borderRadius: 'var(--pl-r-pill)',
            fontSize: 13.5, fontWeight: 800, letterSpacing: '-0.01em',
            background: joined ? 'var(--pl-ink)' : 'var(--pl-accent)', color: '#fff',
            boxShadow: joined ? 'none' : '0 6px 16px var(--pl-accent-glow)',
          }}>
            {joined
              ? <><Icon name="check" size={15} stroke={3} /> Ik kom</>
              : 'Aanhaken'}
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: active ? 'var(--pl-accent)' : 'var(--pl-ink-3)' }}>
      <Icon name={icon} size={21} fill={false} />
      <span style={{ fontSize: 10, fontWeight: 700 }}>{label}</span>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--pl-canvas)',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
      fontFamily: 'var(--pl-font)',
    }}>
      {/* status bar */}
      <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', flexShrink: 0 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--pl-ink)' }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: 'var(--pl-ink)' }}>
          <Icon name="signal" size={15} /><Icon name="globe" size={14} />
          <div style={{ width: 22, height: 11, borderRadius: 3, border: '1.5px solid var(--pl-ink)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 1.5, right: 5, background: 'var(--pl-ink)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* header */}
      <div style={{ padding: '6px 20px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pl-ink-3)', marginBottom: 2 }}>Het peloton</div>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--pl-ink)' }}>Kalender</h1>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--pl-surface)', boxShadow: 'var(--pl-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Icon name="bell" size={19} color="var(--pl-ink)" />
            <span style={{ position: 'absolute', top: 9, right: 10, width: 7, height: 7, borderRadius: '50%', background: 'var(--pl-accent)', boxShadow: '0 0 0 2px var(--pl-surface)' }} />
          </div>
        </div>
        {/* chips */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflow: 'hidden' }}>
          {[{ t: 'Alle groepen', a: true }, { t: 'Zaterdagclub', dot: 'var(--pl-race)' }, { t: 'Gravelmaten', dot: 'var(--pl-gravel)' }].map((c, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              borderRadius: 'var(--pl-r-pill)', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap',
              background: c.a ? 'var(--pl-ink)' : 'var(--pl-surface)',
              color: c.a ? 'var(--pl-on-ink)' : 'var(--pl-ink-2)',
              boxShadow: c.a ? 'none' : 'inset 0 0 0 1.5px var(--pl-hairline)',
            }}>
              {c.dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot }} />}{c.t}
            </span>
          ))}
        </div>
      </div>

      {/* rides */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '4px 16px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pl-accent-deep)', marginTop: 4 }}>Deze week</div>
        <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--pl-ink)', marginTop: -4 }}>Vandaag <span style={{ color: 'var(--pl-ink-3)', fontWeight: 600 }}>· 6 jun</span></div>
        <RideCard joined ride={{ discipline: 'race', time: '08:30', title: 'Rondje Heuvelland', group: 'Vrijdaggroep', start: 'Shimano, Valkenburg', tempo: '30–32 km/u', km: 78, people: [{ initials: 'BW', color: 'var(--pl-race)' }, { initials: 'SV', color: 'var(--pl-accent)' }, { initials: 'MJ', color: 'var(--pl-gravel)' }, { initials: '', me: true }] }} />
        <RideCard ride={{ discipline: 'gravel', time: '09:00', title: 'Dwars door de Meinweg', group: 'Gravelmaten', start: 'Plein, Herkenbosch', tempo: '24–26 km/u', km: 100, people: [{ initials: 'JM', color: 'var(--pl-gravel)' }, { initials: 'RP', color: '#7B5BD6' }, { initials: 'FB', color: 'var(--pl-mtb)' }] }} />
      </div>

      {/* bottom nav */}
      <div style={{ flexShrink: 0, padding: '12px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--pl-surface)', boxShadow: '0 -1px 0 var(--pl-hairline)' }}>
        <NavItem icon="calendar" label="Kalender" active />
        <NavItem icon="bookmark" label="Mijn week" />
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--pl-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px var(--pl-accent-glow)', marginTop: -28 }}>
          <Icon name="plus" size={26} color="#fff" stroke={2.4} />
        </div>
        <NavItem icon="users" label="Groepen" />
        <NavItem icon="user" label="Profiel" />
      </div>
    </div>
  );
}

// Phone bezel wrapper
function Phone({ width = 300, style = {}, screen }) {
  const h = width * 2.06;
  return (
    <div style={{
      width, height: h, borderRadius: width * 0.155, background: '#0B0D0E',
      padding: width * 0.032, boxShadow: 'var(--pl-shadow-phone)', position: 'relative', flexShrink: 0, ...style,
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: width * 0.125, overflow: 'hidden', position: 'relative', background: 'var(--pl-canvas)' }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)', width: width * 0.32, height: width * 0.085, background: '#0B0D0E', borderRadius: 99, zIndex: 5 }} />
        {screen || <PhoneScreen />}
      </div>
    </div>
  );
}

// ── Group "Dit seizoen" attendance ranking screen ──
function SeasonRow({ rank, name, rides, color, pct, me, top }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 13px', borderRadius: 15, background: me ? 'var(--pl-accent-tint)' : 'var(--pl-surface)', boxShadow: me ? 'inset 0 0 0 1.5px color-mix(in srgb, var(--pl-accent) 35%, transparent)' : 'var(--pl-shadow)' }}>
      <span style={{ width: 18, textAlign: 'center', fontSize: 14, fontWeight: 800, color: top ? 'var(--pl-gold)' : 'var(--pl-ink-3)', flexShrink: 0 }}>{rank}</span>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Avatar initials={name.split(' ').map(w => w[0]).join('').slice(0, 2)} color={color} size={34} me={me} />
        {top && <span style={{ position: 'absolute', top: -7, left: '50%', transform: 'translateX(-50%)', color: 'var(--pl-gold)' }}><Icon name="crown" size={14} fill stroke={0} /></span>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--pl-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{me ? 'Jij' : name}</div>
        <div style={{ height: 5, borderRadius: 3, background: 'var(--pl-hairline)', marginTop: 5, overflow: 'hidden' }}>
          <div style={{ width: pct + '%', height: '100%', borderRadius: 3, background: top ? 'var(--pl-gold)' : color }} />
        </div>
      </div>
      <span style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--pl-ink)', flexShrink: 0 }}>{rides}<span style={{ fontSize: 11, fontWeight: 600, color: 'var(--pl-ink-3)' }}>×</span></span>
    </div>
  );
}

function SeasonScreen() {
  const riders = [
    { name: 'Bart Wijnen', rides: 34, color: 'var(--pl-race)', pct: 100, top: true },
    { name: 'Sanne Vos', rides: 29, color: 'var(--pl-accent)', pct: 85 },
    { name: 'Jij', rides: 22, color: 'var(--pl-ink)', pct: 65, me: true },
    { name: 'Mark Janssen', rides: 18, color: 'var(--pl-gravel)', pct: 53 },
    { name: 'Femke Bakker', rides: 15, color: 'var(--pl-mtb)', pct: 44 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--pl-canvas)', fontFamily: 'var(--pl-font)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 44 }} />
      <div style={{ padding: '6px 20px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pl-ink-3)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--pl-race)' }} /> Zaterdagclub
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--pl-ink)', marginTop: 3 }}>Dit seizoen</h1>
        <div style={{ display: 'flex', gap: 7, marginTop: 12 }}>
          {[['Opkomst', true], ['Ritten', false], ['Leden', false]].map(([t, a], i) =>
            <span key={i} style={{ padding: '7px 13px', borderRadius: 'var(--pl-r-pill)', fontSize: 12.5, fontWeight: 700, background: a ? 'var(--pl-ink)' : 'var(--pl-surface)', color: a ? 'var(--pl-on-ink)' : 'var(--pl-ink-2)', boxShadow: a ? 'none' : 'inset 0 0 0 1.5px var(--pl-hairline)' }}>{t}</span>
          )}
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', padding: '6px 16px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--pl-ink-3)' }}>
          <span>Renner</span><span>Keer meegereden</span>
        </div>
        {riders.map((r, i) => <SeasonRow key={i} rank={i + 1} {...r} />)}
      </div>
      <div style={{ flexShrink: 0, padding: '12px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--pl-surface)', boxShadow: '0 -1px 0 var(--pl-hairline)' }}>
        <NavItem icon="calendar" label="Kalender" />
        <NavItem icon="bookmark" label="Mijn week" />
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--pl-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px var(--pl-accent-glow)', marginTop: -28 }}>
          <Icon name="plus" size={26} color="#fff" stroke={2.4} />
        </div>
        <NavItem icon="users" label="Groepen" active />
        <NavItem icon="user" label="Profiel" />
      </div>
    </div>
  );
}

Object.assign(window, { Phone, PhoneScreen, SeasonScreen });
