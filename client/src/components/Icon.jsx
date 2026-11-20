// Minimal 1px line icon set (24px grid).
const P = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>,
  user: <><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5" /></>,
  bag: <><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6.5a3 3 0 016 0V8" /></>,
  heart: <path d="M12 19.5s-7-4.3-7-9.4A3.9 3.9 0 0112 8a3.9 3.9 0 017 2.1c0 5.1-7 9.4-7 9.4z" />,
  menu: <><path d="M3.5 7h17" /><path d="M3.5 12h17" /><path d="M3.5 17h17" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
  arrow: <><path d="M4 12h15" /><path d="M14 7l5 5-5 5" /></>,
  arrowL: <><path d="M20 12H5" /><path d="M10 7l-5 5 5 5" /></>,
  down: <path d="M6 9l6 6 6-6" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  truck: <><path d="M3 6.5h11v9H3z" /><path d="M14 9.5h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.7" /><circle cx="17.5" cy="17.5" r="1.7" /></>,
  cash: <><rect x="3" y="6.5" width="18" height="11" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v5M18 9.5v5" /></>,
  refresh: <><path d="M20 12a8 8 0 01-14 5.3" /><path d="M4 12a8 8 0 0114-5.3" /><path d="M18 3.5v3.5h-3.5" /><path d="M6 20.5V17h3.5" /></>,
  receipt: <><path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z" /><path d="M9 8.5h6M9 12h6M9 15.5h3" /></>,
  whatsapp: <><path d="M4.5 19.5l1.2-3.6A7.8 7.8 0 1112 19.8a7.7 7.7 0 01-3.9-1.1z" /><path d="M9.2 8.6c.3-.6.8-.6 1-.1l.6 1.4c.1.3 0 .6-.2.8l-.4.4c.5 1.1 1.4 2 2.6 2.6l.4-.4c.2-.2.5-.3.8-.2l1.4.6c.5.2.5.7-.1 1-.9.6-2.1.7-3.4-.1a8 8 0 01-2.8-2.8c-.7-1.3-.6-2.4 0-3.2z" /></>,
  phone: <path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 005.7 5.7L16 13l4 1.5v3A2.2 2.2 0 0117.6 20 14.6 14.6 0 014 6.4 2.2 2.2 0 016.5 4z" />,
  mail: <><rect x="3.5" y="6" width="17" height="12" /><path d="M3.5 6.5l8.5 6.5 8.5-6.5" /></>,
  pin: <><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  upload: <><path d="M12 16V4.5" /><path d="M7.5 9L12 4.5 16.5 9" /><path d="M4.5 15v4.5h15V15" /></>,
  needle: <><path d="M19.5 4.5L6 18" /><circle cx="18" cy="6" r="1" /><path d="M4 20l2-2" /><path d="M9 12c-2 1-3 3-2 5" /></>,
  print: <><rect x="6" y="3.5" width="12" height="5.5" /><rect x="3.5" y="9" width="17" height="7.5" /><rect x="7" y="13.5" width="10" height="7" /></>,
  box: <><path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z" /><path d="M3.5 7.5L12 11.5l8.5-4" /><path d="M12 11.5v9" /></>,
  shield: <><path d="M12 3.5l7 2.5v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" /><path d="M8.8 12l2.2 2.2 4.2-4.4" /></>,
  star: <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" />,
  ruler: <><rect x="3" y="8" width="18" height="8" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" /></>,
  users: <><circle cx="9" cy="9" r="3.2" /><path d="M3.5 19c.8-3.2 3-4.8 5.5-4.8s4.7 1.6 5.5 4.8" /><circle cx="17" cy="9.5" r="2.5" /><path d="M16 14.4c2.2 0 4 1.3 4.6 4.1" /></>,
  building: <><path d="M5 20.5V4.5h9v16" /><path d="M14 9.5h5v11" /><path d="M8 8h3M8 11.5h3M8 15h3" /><path d="M3 20.5h18" /></>,
  school: <><path d="M2.5 9.5L12 5l9.5 4.5L12 14z" /><path d="M6.5 11.5v4.5c3.5 2.4 7.5 2.4 11 0v-4.5" /></>,
  trophy: <><path d="M8 4.5h8v5a4 4 0 01-8 0z" /><path d="M8 6.5H5c0 2.5 1.2 4 3.3 4.3M16 6.5h3c0 2.5-1.2 4-3.3 4.3" /><path d="M12 13.5v3.5M8.5 20h7l-1-3h-5z" /></>,
  sparkle: <><path d="M12 3.5l1.7 5.3 5.3 1.7-5.3 1.7L12 17.5l-1.7-5.3L5 10.5l5.3-1.7z" /><path d="M18.5 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  store: <><path d="M4 9.5l1.5-5h13L20 9.5" /><path d="M4 9.5c0 1.5 1.2 2.5 2.7 2.5S9.3 11 9.3 9.5c0 1.5 1.2 2.5 2.7 2.5s2.7-1 2.7-2.5c0 1.5 1.2 2.5 2.6 2.5S20 11 20 9.5" /><path d="M5.5 12v8.5h13V12" /><path d="M10 20.5V15.5h4v5" /></>,
  rupee: <><path d="M7 4.5h10M7 8.5h10" /><path d="M7 4.5h3.5a4 4 0 010 8H7l8 7" /></>,
  file: <><path d="M6 3.5h8l4 4v13H6z" /><path d="M14 3.5v4h4" /></>,
  leaf: <><path d="M5 19c0-8.5 5.5-14 15-14 0 9.5-5.5 15-14 15" /><path d="M5 19l8-8" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" /><path d="M8 10.5V7.5a4 4 0 018 0v3" /></>,
  tag: <><path d="M3.5 12.5V4h8.5L20.5 12.5 12 21z" /><circle cx="8" cy="8.5" r="1.3" /></>,
  insta: <><rect x="4" y="4" width="16" height="16" /><circle cx="12" cy="12" r="3.8" /><circle cx="16.8" cy="7.2" r="0.6" /></>,
};

export default function Icon({ name, size = 18, stroke = 1.3, className, style }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="square" strokeLinejoin="miter"
      className={className} style={style} aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}
