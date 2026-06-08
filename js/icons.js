// Pelon — inline SVG icon set. Single weight, currentColor, stroke ~1.75.
// Usage: <Icon name="calendar" size={20} />
const PL_ICON_PATHS = {
  // navigation / chrome
  calendar: '<path d="M7 3v3M17 3v3M3.5 9.5h17M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Z"/>',
  week: '<path d="M4 5.5h16M4 12h16M4 18.5h16"/><circle cx="8" cy="5.5" r="0" /><path d="M7 4v3M13 10.5v3M16 17v3"/>',
  layers: '<path d="M12 3.5 3 8l9 4.5L21 8 12 3.5Z"/><path d="M3.5 12.5 12 16.8l8.5-4.3M3.5 16.8 12 21l8.5-4.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  users: '<path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19"/><circle cx="10" cy="8" r="3.2"/><path d="M19.5 19v-1.4a3.4 3.4 0 0 0-2.6-3.3M15.5 5.2a3.2 3.2 0 0 1 0 5.9"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M5.5 20v-1a4.5 4.5 0 0 1 4.5-4.5h4A4.5 4.5 0 0 1 18.5 19v1"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.6-3.6"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14 18 8Z"/><path d="M10.5 19a2 2 0 0 0 3 0"/>',
  // ride meta
  pin: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  gauge: '<path d="M5 18a8 8 0 1 1 14 0"/><path d="m12 14 3.5-4.2"/><circle cx="12" cy="14" r="1.3" fill="currentColor" stroke="none"/>',
  ruler: '<rect x="3.5" y="8" width="17" height="8" rx="1.5"/><path d="M7.5 8v3M11 8v4M14.5 8v3M18 8v4"/>',
  route: '<circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="6" r="2.4"/><path d="M8.4 18H14a3 3 0 0 0 0-6H10a3 3 0 0 1 0-6h5.6"/>',
  camera: '<path d="M4.5 8.5h3l1.3-2h6.4l1.3 2h3A1.5 1.5 0 0 1 21 10v8.5A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5V10a1.5 1.5 0 0 1 1.5-1.5Z"/><circle cx="12" cy="14" r="3.3"/>',
  repeat: '<path d="M4 9a4 4 0 0 1 4-4h9m0 0-2.5-2.5M17 5l-2.5 2.5"/><path d="M20 15a4 4 0 0 1-4 4H7m0 0 2.5 2.5M7 19l2.5-2.5"/>',
  note: '<path d="M6 4h9l5 5v9.5A1.5 1.5 0 0 1 18.5 20h-12A1.5 1.5 0 0 1 5 18.5v-13A1.5 1.5 0 0 1 6 4Z"/><path d="M14.5 4v5h5"/><path d="M8.5 13h7M8.5 16.5h4.5"/>',
  // status / actions
  check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M9 7h8v8"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  chevronLeft: '<path d="m15 5-7 7 7 7"/>',
  chevronDown: '<path d="m5 9 7 7 7-7"/>',
  x: '<path d="M6 6 18 18M18 6 6 18"/>',
  crown: '<path d="M4 17h16M4 17 5.5 8l3.8 3L12 6.5 14.7 11l3.8-3L20 17"/>',
  flame: '<path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.6.7-2.8 1.4-3.6.3 1 .9 1.6 1.6 1.6 1.3 0 1.2-1.8 1-3 .2-2 .6-3 1-4Z"/>',
  lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5S14.4 18.2 12 20.5C9.6 18.2 8.4 15.2 8.4 12S9.6 5.8 12 3.5Z"/>',
  google: '__google__',
  road: '<path d="M9 4 6 20M15 4l3 16M12 5v2M12 11v2M12 17v2"/>',
  mountain: '<path d="m3 19 6-11 4 6 2-3 6 8H3Z"/>',
  signal: '<path d="M4 20v-4M9 20v-8M14 20v-12M19 20V5"/>',
  star: '<path d="m12 4 2.3 5 5.4.5-4.1 3.6 1.3 5.3L12 20.7 7.1 23.4l1.3-5.3L4.3 14.5 9.7 14 12 4Z"/>',
  bookmark: '<path d="M6.5 4.5h11a1 1 0 0 1 1 1V20l-6.5-3.6L5.5 20V5.5a1 1 0 0 1 1-1Z"/>',
  play: '<path d="M7 4.5v15l13-7.5L7 4.5Z"/>'
};
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  color = 'currentColor',
  style = {},
  fill = false
}) {
  if (name === 'google') {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        ...style
      }
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M21.6 12.2c0-.6-.05-1.2-.15-1.8H12v3.4h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.1Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1Z"
    }));
  }
  const inner = PL_ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? 'currentColor' : 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
window.Icon = Icon;