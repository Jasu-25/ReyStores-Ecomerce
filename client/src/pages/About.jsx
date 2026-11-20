import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { Crumbs } from '../components/ui';
import { CATEGORIES, fullAddress, STORE, waLink } from '../data/store';

export default function About() {
  const details = [
    ['store', 'Shop name', 'REY Stores'],
    ['pin', 'Address', fullAddress],
    ['eye', 'Landmark', STORE.address.landmark],
    ['phone', 'Call / WhatsApp', STORE.phones.map((p) => p.display).join('  ·  ')],
    ['insta', 'Instagram', `@${STORE.instagram}`],
    ['truck', 'Delivery', 'All over India · pick-up from shop also available'],
    ['whatsapp', 'How to order', 'On WhatsApp or phone call — single piece & bulk'],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container stack-md">
          <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
          <div className="about-hero">
            <div className="stack-md">
              <p className="caps eyebrow">About REY Stores</p>
              <h1 className="display">Wear your <em>style.</em></h1>
            </div>
            <div className="stack-md">
              <p className="muted">
                REY Stores is a clothing shop on KT Road, Tirupati — right beside Indian Bank. We sell partywear shirts, stone collection shirts, t-shirts and pants, and we do embroidery logos and DTF prints in-house.
              </p>
              <p className="muted">
                Walk in to choose from the latest stock, or order from anywhere in India on WhatsApp. One piece for yourself or a bulk order for your team — we handle both.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-shop">
          <div className="card card-pad stack-md">
            <div className="stack-xs"><p className="caps olive">Shop details</p><h2 className="h-md">Visit us in Tirupati</h2></div>
            <div>
              {details.map(([ic, k, v]) => (
                <div key={k} className="detail-row">
                  <Icon name={ic} size={18} />
                  <span className="caps olive">{k}</span>
                  <span className="body-sm navy">{v}</span>
                </div>
              ))}
            </div>
            <div className="row wrap">
              <a className="btn btn-primary" href={STORE.mapsLink} target="_blank" rel="noreferrer"><Icon name="pin" size={15} /> Get Directions</a>
              <a className="btn btn-secondary" href={waLink('Hi REY Stores, I want to visit the shop.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> WhatsApp</a>
              <a className="btn btn-secondary" href={`tel:+${STORE.phones[0].digits}`}><Icon name="phone" size={15} /> Call</a>
            </div>
          </div>
          <div className="card map">
            <iframe title="REY Stores location on Google Maps" src={STORE.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head"><div className="stack-sm"><p className="caps eyebrow">What we sell</p><h2 className="h-lg">Our collection</h2></div></div>
          <div className="grid g-3">
            {CATEGORIES.map((c, i) => (
              <Link key={c.id} to={`/collection?c=${c.id}`} className="card card-pad card-hover stack-sm">
                <div className="row-between"><span className="num">0{i + 1}</span><Icon name="arrow" size={16} /></div>
                <p className="title">{c.name}</p>
                <p className="body-sm muted">{c.sub}</p>
              </Link>
            ))}
            <div className="card card-pad stack-sm dark" style={{ borderColor: 'var(--navy)' }}>
              <p className="caps brass">In-house services</p>
              <p className="title">Embroidery Logos & DTF Prints</p>
              <p className="body-sm" style={{ color: '#aab3bd' }}>Your logo, photo or name on shirts and t-shirts.</p>
              <Link to="/services" className="link" style={{ color: '#fff' }}>See services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid g-2" style={{ alignItems: 'center' }}>
          <div className="card tile photo about-photo"><img src="/images/pants-and-jackets-range.jpg" alt="Inside REY Stores, Tirupati" loading="lazy" /></div>
          <div className="stack-md">
            <p className="caps eyebrow">Inside the shop</p>
            <h2 className="h-lg">New stock, every week.</h2>
            <p className="muted">Shirts, t-shirts, jeans and jackets arrive regularly. Follow us on Instagram to see new arrivals first, or WhatsApp us your size and budget and we will send options.</p>
            <a className="btn btn-secondary" style={{ alignSelf: 'flex-start' }} href={STORE.instagramUrl} target="_blank" rel="noreferrer"><Icon name="insta" size={15} /> Follow @{STORE.instagram}</a>
          </div>
        </div>
      </section>
    </>
  );
}
