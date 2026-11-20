import { useState } from 'react';
import Icon from '../components/Icon';
import { Crumbs } from '../components/ui';
import { fullAddress, STORE, waLink } from '../data/store';

const FAQ = [
  ['Can I order online on this website?', 'Online payment is not open yet. Please place your order on WhatsApp or by phone call — we confirm price, size and delivery with you there.'],
  ['Do you take single piece orders?', 'Yes. You can order even one shirt, t-shirt or pant. Custom embroidery or print on a single piece is also possible.'],
  ['Do you take bulk orders?', 'Yes — for teams, offices, fan clubs, functions and events. Send the design, sizes and quantity on WhatsApp and we will share the price.'],
  ['Do you deliver outside Tirupati?', 'Yes, we deliver all over India. You can also pick up your order from our shop on KT Road.'],
  ['How do I send my logo for embroidery or print?', 'Just send a clear photo or screenshot of the logo on WhatsApp, with shirt colour and placement (chest / back / sleeve).'],
];

export default function Contact() {
  const [f, setF] = useState({ name: '', type: 'Single piece order', item: '', qty: '', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const text = `Hi REY Stores,\nName: ${f.name}\nEnquiry: ${f.type}${f.item ? `\nItem: ${f.item}` : ''}${f.qty ? `\nQuantity: ${f.qty}` : ''}${f.msg ? `\n${f.msg}` : ''}`;
    window.open(waLink(text), '_blank', 'noopener');
  };

  return (
    <>
      <section className="page-hero band" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="container stack-md">
          <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />
          <div className="row-between wrap" style={{ alignItems: 'flex-end' }}>
            <h1 className="h-lg" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Contact & Orders</h1>
            <p className="muted" style={{ maxWidth: '26rem' }}>All orders — single piece and bulk — are taken on WhatsApp or phone. Message us anytime.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="stack-md">
            <a className="card card-pad card-hover row-between" href={waLink('Hi REY Stores!')} target="_blank" rel="noreferrer" style={{ background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }}>
              <div className="row"><Icon name="whatsapp" size={28} /><div><p className="caps" style={{ color: '#d8c19a' }}>Fastest way to order</p><p className="title" style={{ color: '#fff' }}>WhatsApp {STORE.phones[0].display}</p></div></div>
              <Icon name="arrow" />
            </a>

            <div className="card card-pad stack-md">
              <div className="stack-xs"><p className="caps olive">Call / WhatsApp</p><h2 className="h-sm">Phone numbers</h2></div>
              {STORE.phones.map((p) => (
                <div key={p.digits} className="row-between" style={{ borderTop: '1px solid var(--rule)', paddingTop: '0.9rem' }}>
                  <a href={`tel:+${p.digits}`} className="row spec navy"><Icon name="phone" size={17} /> {p.display}</a>
                  <a className="link" href={`https://wa.me/${p.digits}`} target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              ))}
              <div className="row" style={{ borderTop: '1px solid var(--rule)', paddingTop: '0.9rem' }}>
                <Icon name="insta" size={17} /><a className="spec navy" href={STORE.instagramUrl} target="_blank" rel="noreferrer">@{STORE.instagram}</a>
              </div>
            </div>

            <div className="card card-pad stack-md">
              <div className="stack-xs"><p className="caps olive">Visit us</p><h2 className="h-sm">Shop address</h2></div>
              <div className="studio">
                <p className="title" style={{ fontSize: '1.05rem' }}>REY Stores, Tirupati</p>
                <p className="body-sm muted">{fullAddress}</p>
                <p className="body-sm muted">{STORE.address.landmark}</p>
              </div>
              <a className="link" href={STORE.mapsLink} target="_blank" rel="noreferrer"><Icon name="pin" size={13} /> Get directions on Google Maps</a>
            </div>
          </div>

          <div className="card card-pad stack-md">
            <div className="stack-xs"><p className="caps olive">Quick enquiry</p><h2 className="h-sm">Send your order on WhatsApp</h2><p className="body-sm muted">Fill this and tap send — it opens WhatsApp with your message ready.</p></div>
            <hr className="rule" />
            <form className="stack-md" onSubmit={send}>
              <div className="form-grid">
                <div className="field"><label htmlFor="f-name">Your name <span className="req">*</span></label><input id="f-name" required className="input" placeholder="Your name" value={f.name} onChange={set('name')} /></div>
                <div className="field"><label htmlFor="f-type">Order type <span className="req">*</span></label>
                  <select id="f-type" className="select" value={f.type} onChange={set('type')}>
                    <option>Single piece order</option><option>Bulk / team order</option><option>Embroidery logo</option><option>DTF print</option><option>Other question</option>
                  </select>
                </div>
                <div className="field"><label htmlFor="f-item">What do you want?</label><input id="f-item" className="input" placeholder="e.g. Partywear shirt, size L" value={f.item} onChange={set('item')} /></div>
                <div className="field"><label htmlFor="f-qty">Quantity</label><input id="f-qty" className="input" inputMode="numeric" placeholder="e.g. 1 or 25" value={f.qty} onChange={set('qty')} /></div>
                <div className="field full"><label htmlFor="f-msg">Message</label><textarea id="f-msg" className="textarea" placeholder="Colour, sizes, delivery city, or any doubt…" value={f.msg} onChange={set('msg')} /></div>
              </div>
              <button className="btn btn-primary btn-block" type="submit"><Icon name="whatsapp" size={15} /> Send on WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container contact-faq">
          <div className="stack-md">
            <p className="caps olive">Help</p>
            <h2 className="h-lg">Common questions</h2>
            <p className="muted body-sm">Still have a doubt? We are one WhatsApp message away.</p>
          </div>
          <div className="acc-card">
            {FAQ.map(([q, a]) => (
              <details key={q} className="acc"><summary>{q}<span className="pm">+</span></summary><div className="acc-body">{a}</div></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
