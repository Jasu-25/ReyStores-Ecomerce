import { Link } from 'react-router-dom';
import Icon from './Icon';
import { categoryName, orderText, STORE, waLink } from '../data/store';

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i} className="row" style={{ gap: '0.5rem' }}>
          {it.to ? <Link to={it.to}>{it.label}</Link> : <span>{it.label}</span>}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function TrustStrip() {
  const rows = [
    ['whatsapp', 'Order on WhatsApp', 'Send the photo, size & quantity'],
    ['users', 'Single & Bulk Orders', 'One piece or a full team — both OK'],
    ['needle', 'Embroidery & DTF', 'Your logo, photo or name printed'],
    ['truck', 'All-India Delivery', 'Or pick up from our Tirupati shop'],
  ];
  return (
    <div className="trust">
      {rows.map(([ic, t, s]) => (
        <div key={t}>
          <Icon name={ic} size={22} style={{ color: 'var(--navy)', flex: 'none' }} />
          <div><b>{t}</b><span>{s}</span></div>
        </div>
      ))}
    </div>
  );
}

export function ItemCard({ item }) {
  return (
    <article className="card card-hover product-card">
      <Link to={`/collection/${item.id}`} className="tile photo">
        <img src={item.img} alt={item.name} loading="lazy" />
        {item.tag && <span className="badge badge-white photo-badge">{item.tag}</span>}
      </Link>
      <div className="body">
        <span className="caps olive">{categoryName(item.category)}</span>
        <Link to={`/collection/${item.id}`} className="name">{item.name}</Link>
        <span className="price-line">{item.price || 'Ask for price'}</span>
        <div className="bulk">
          <a className="link" href={waLink(orderText(item))} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={13} /> Order</a>
          <Link to={`/collection/${item.id}`} className="caps navy">Details</Link>
        </div>
      </div>
    </article>
  );
}

export function SectionHead({ eyebrow, title, lede, action }) {
  return (
    <div className="section-head">
      <div className="stack-sm">
        {eyebrow && <p className="caps eyebrow">{eyebrow}</p>}
        <h2 className="h-lg">{title}</h2>
      </div>
      {lede && <p className="lede muted">{lede}</p>}
      {action}
    </div>
  );
}

export function OrderNote() {
  return (
    <div className="note row" style={{ alignItems: 'flex-start', gap: '0.6rem' }}>
      <Icon name="lock" size={16} style={{ flex: 'none', marginTop: 3 }} />
      <span className="body-sm">
        <b>Online payment is not available yet.</b> To order — single piece or bulk — WhatsApp or call us on {STORE.phones[0].display}. We confirm price, size and delivery on chat.
      </span>
    </div>
  );
}
