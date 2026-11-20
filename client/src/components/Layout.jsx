import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { CATEGORIES, fullAddress, STORE, waLink } from '../data/store';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/collection', label: 'Collection' },
  { to: '/services', label: 'Our Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <>
      <div className="announce">
        <div className="container">
          <span>Orders on WhatsApp & call only</span>
          <span className="sep hide-m">◆</span>
          <span className="hide-m">Single piece & bulk orders</span>
          <span className="sep hide-m">◆</span>
          <span className="hide-m">Delivery all over India</span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row" style={{ gap: '0.75rem' }}>
            <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Icon name="menu" size={20} /></button>
            <Link to="/" className="logo-wrap">
              <img src="/images/logo.jpg" alt="" className="logo-img" />
              <span className="logo">REY STORES<small>TIRUPATI · KT ROAD</small></span>
            </Link>
          </div>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>)}
          </nav>
          <div className="row" style={{ gap: '0.5rem' }}>
            <a className="btn btn-secondary btn-sm hide-m" href={`tel:+${STORE.phones[0].digits}`}><Icon name="phone" size={14} /> Call</a>
            <a className="btn btn-primary btn-sm" href={waLink('Hi REY Stores, I want to place an order.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> <span className="hide-xs">Order on </span>WhatsApp</a>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-bg" onClick={() => setOpen(false)} />
          <aside className="drawer" aria-label="Menu">
            <div className="drawer-head">
              <span className="logo">REY STORES</span>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu"><Icon name="close" /></button>
            </div>
            <nav>
              {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end}>{n.label}<Icon name="arrow" size={16} /></NavLink>)}
            </nav>
            <div className="drawer-foot stack-sm">
              <a className="btn btn-primary btn-block" href={waLink('Hi REY Stores, I want to place an order.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> Order on WhatsApp</a>
              <a className="btn btn-secondary btn-block" href={`tel:+${STORE.phones[0].digits}`}><Icon name="phone" size={15} /> Call {STORE.phones[0].display}</a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row-between wrap" style={{ alignItems: 'flex-end' }}>
          <div className="stack-sm">
            <p className="brandline">REY STORES — {STORE.tagline}.</p>
            <p className="caps" style={{ color: '#8590a0' }}>Partywear · Stone collection · T-shirts · Pants · Embroidery logos & DTF prints</p>
          </div>
          <a className="btn btn-light" href={waLink('Hi REY Stores, I want to place an order.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> Order on WhatsApp</a>
        </div>
        <div className="cols cols-4">
          <div><h5>Collection</h5><ul>
            {CATEGORIES.map((c) => <li key={c.id}><Link to={`/collection?c=${c.id}`}>{c.name}</Link></li>)}
          </ul></div>
          <div><h5>Shop</h5><ul>
            <li><Link to="/services">Embroidery Logos</Link></li>
            <li><Link to="/services">DTF Prints</Link></li>
            <li><Link to="/services">Bulk & Team Orders</Link></li>
            <li><Link to="/about">About REY Stores</Link></li>
          </ul></div>
          <div><h5>Call / WhatsApp</h5><ul>
            {STORE.phones.map((p) => <li key={p.digits}><a href={`tel:+${p.digits}`}>{p.display}</a></li>)}
            <li><a href={STORE.instagramUrl} target="_blank" rel="noreferrer">Instagram @{STORE.instagram}</a></li>
          </ul></div>
          <div><h5>Visit the shop</h5><ul>
            <li>{fullAddress}</li>
            <li>{STORE.address.landmark}</li>
            <li><a href={STORE.mapsLink} target="_blank" rel="noreferrer">Get directions →</a></li>
          </ul></div>
        </div>
        <div className="bottom">
          <span>© 2026 REY Stores, Tirupati. All rights reserved.</span>
          <span>Online ordering coming soon — order on WhatsApp or call</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const sticky = /^\/collection\/.+/.test(pathname);

  return (
    <div className={sticky ? 'has-sticky' : ''}>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <a className="wa-float" href={waLink('Hi REY Stores, I have a query.')} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <Icon name="whatsapp" size={20} /><span className="lbl">Chat with us</span>
      </a>
    </div>
  );
}
