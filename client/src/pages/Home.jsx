import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ItemCard, SectionHead, TrustStrip } from '../components/ui';
import { CATEGORIES, COLLECTION, fullAddress, RECENT_OFFERS, STORE, waLink } from '../data/store';

const CAT_IMG = {
  partywear: '/images/shirt-partywear-printed-green.jpg',
  tshirts: '/images/tshirt-acid-wash-rx100.jpg',
  pants: '/images/pants-and-jackets-range.jpg',
  custom: '/images/shirt-ayyappa-embroidery-black.jpg',
};

export default function Home() {
  const featured = ['ayyappa-embroidery-black-shirt', 'printed-partywear-shirt', 'acid-wash-rx100-tee', 'white-logo-embroidery-shirt']
    .map((id) => COLLECTION.find((i) => i.id === id));

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="stack-lg hero-copy">
            <p className="caps eyebrow">Tirupati · KT Road · Beside Indian Bank</p>
            <h1 className="display">{STORE.tagline.split(' ').slice(0, 2).join(' ')}<br /><em>clothing.</em></h1>
            <p className="body-lg muted" style={{ maxWidth: '31rem' }}>
              Partywear shirts, stone collection shirts, t-shirts and pants — plus custom embroidery logos and DTF prints.
              Order one piece or bulk for your team, directly on WhatsApp.
            </p>
            <div className="row wrap">
              <Link to="/collection" className="btn btn-primary">View Collection <Icon name="arrow" size={14} /></Link>
              <a href={waLink('Hi REY Stores, I want to place an order.')} target="_blank" rel="noreferrer" className="btn btn-secondary"><Icon name="whatsapp" size={15} /> Order on WhatsApp</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>4,800+</b><span className="caps olive">Instagram family</span></div>
              <div className="stat"><b>1 to 100+</b><span className="caps olive">Pieces per order</span></div>
              <div className="stat"><b>All India</b><span className="caps olive">Delivery</span></div>
            </div>
          </div>
          <div className="hero-photos">
            <Link to="/collection/ayyappa-embroidery-black-shirt" className="card hero-photo main">
              <img src="/images/shirt-ayyappa-embroidery-black.jpg" alt="Black shirt with Ayyappa embroidery" />
              <span className="badge badge-white photo-badge">Custom embroidery</span>
            </Link>
            <Link to="/collection/printed-partywear-shirt" className="card hero-photo side">
              <img src="/images/shirt-partywear-printed-green.jpg" alt="Printed partywear shirt" />
              <span className="badge badge-white photo-badge">Partywear</span>
            </Link>
          </div>
        </div>
        <div className="container" style={{ marginTop: '3.5rem' }}><TrustStrip /></div>
      </section>

      {/* CATEGORIES */}
      <section className="section band">
        <div className="container">
          <SectionHead eyebrow="Shop by category" title="Our Collection" lede="New stock comes in every week. Can't find what you want? WhatsApp us — we will send photos of everything available." />
          <div className="grid cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.id} to={`/collection?c=${c.id}`} className={`card card-hover cat-card ${CAT_IMG[c.id] ? '' : 'no-img'}`}>
                {CAT_IMG[c.id] ? <div className="tile photo"><img src={CAT_IMG[c.id]} alt="" loading="lazy" /></div> : (
                  <div className="cat-text dark"><Icon name="sparkle" size={28} /><span className="caps brass">Ask for photos</span></div>
                )}
                <div className="body">
                  <span className="name">{c.name}</span>
                  <span className="body-sm muted">{c.sub}</span>
                  <span className="bulk"><span className="caps navy">View</span><Icon name="arrow" size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Straight from our shop" title="Customer favourites" action={<Link to="/collection" className="link">See full collection <Icon name="arrow" size={12} /></Link>} />
          <div className="grid g-4">{featured.map((i) => <ItemCard key={i.id} item={i} />)}</div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="section band">
        <div className="container offer">
          <div className="card offer-img"><img src="/images/offer-poster.jpg" alt="REY Stores Diwali combo offer poster" loading="lazy" /></div>
          <div className="stack-md">
            <p className="caps eyebrow">Combo offers</p>
            <h2 className="h-lg">Best price when you <em>buy more.</em></h2>
            <p className="muted">We run combo offers on shirts, pants and t-shirts through the year. Here is what our Diwali 2026 offer looked like:</p>
            <div className="card">
              {RECENT_OFFERS.map(([t, p]) => (
                <div key={t} className="offer-row"><span>{t}</span><b>{p}</b></div>
              ))}
            </div>
            <p className="help">Offers change often — ask on WhatsApp for today's offer.</p>
            <a className="btn btn-primary" style={{ alignSelf: 'flex-start' }} href={waLink("Hi REY Stores, what is today's combo offer?")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> Ask Today's Offer</a>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How to order" title="Ordering is simple" lede="Online payment is not open yet. Every order — single piece or bulk — is taken on WhatsApp or phone." />
          <div className="grid g-4">
            {[
              ['eye', 'Pick your item', 'Browse the collection here or on our Instagram and take a screenshot.'],
              ['whatsapp', 'WhatsApp us', 'Send the photo with your size and quantity. For bulk, send your logo too.'],
              ['rupee', 'Confirm & pay', 'We confirm the price, size and delivery time with you on chat.'],
              ['truck', 'Get delivery', 'Pick up from our Tirupati shop or get it delivered anywhere in India.'],
            ].map(([ic, t, d], i) => (
              <div key={t} className="card card-pad stack-sm">
                <div className="row-between"><span className="num">0{i + 1}</span><Icon name={ic} size={20} /></div>
                <p className="title">{t}</p>
                <p className="body-sm muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="dark bulk-band">
            <div className="stack-xs">
              <p className="caps brass">Bulk & team orders</p>
              <p className="h-sm">Need shirts for your team, fan club, function or office?</p>
              <p className="body-sm" style={{ color: '#aab3bd' }}>Custom back prints, embroidered logos and same-design shirts in all sizes.</p>
            </div>
            <div className="row wrap">
              <Link to="/services" className="btn btn-light">See Services</Link>
              <a className="btn btn-ghost-light" href={waLink('Hi REY Stores, I want a bulk order quote.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> Bulk Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="section-tight band">
        <div className="container row-between wrap">
          <div className="stack-xs">
            <p className="caps olive">Visit our shop</p>
            <p className="h-sm">{fullAddress}</p>
            <p className="body-sm muted">{STORE.address.landmark}</p>
          </div>
          <div className="row wrap">
            <a className="btn btn-secondary" href={STORE.mapsLink} target="_blank" rel="noreferrer"><Icon name="pin" size={15} /> Get Directions</a>
            <a className="btn btn-secondary" href={STORE.instagramUrl} target="_blank" rel="noreferrer"><Icon name="insta" size={15} /> @{STORE.instagram}</a>
          </div>
        </div>
      </section>
    </>
  );
}
