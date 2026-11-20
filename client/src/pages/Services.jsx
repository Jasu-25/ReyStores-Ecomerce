import Icon from '../components/Icon';
import { Crumbs } from '../components/ui';
import { waLink } from '../data/store';

const SERVICES = [
  {
    id: 'emb', eyebrow: 'Service 01', title: 'Embroidery Logos',
    img: '/images/shirt-ayyappa-embroidery-black.jpg',
    intro: 'Neat, long-lasting embroidery on shirts and t-shirts — from a small chest logo to a full devotional design like our Ayyappa shirt.',
    points: ['Company, shop or team logo on the chest', 'Names and initials', 'Devotional and festival designs', 'Done on our shirts or the shirt you choose in store'],
    cta: 'Get Embroidery Price',
  },
  {
    id: 'dtf', eyebrow: 'Service 02', title: 'DTF Prints',
    img: '/images/shirt-white-custom-back-print.jpg',
    intro: 'Full-colour prints with photos, names and any number of colours. Soft on the fabric and does not crack easily.',
    points: ['Photo prints for fan clubs & political teams', 'Big back prints and graphic tees', 'Names and numbers for sports teams', 'Your own artwork or one of our designs'],
    cta: 'Get DTF Print Price',
    flip: true,
  },
  {
    id: 'bulk', eyebrow: 'Service 03', title: 'Bulk & Team Orders',
    img: '/images/shirt-white-logo-embroidery.jpg',
    intro: 'Same design for your whole group — offices, colleges, functions, temples, fan clubs and teams. Send your size list and logo on WhatsApp.',
    points: ['Mixed sizes in one order', 'Shirts, t-shirts and pants', 'Delivery all over India', 'Price confirmed on WhatsApp before we start'],
    cta: 'Send Bulk Enquiry',
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container stack-md">
          <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Our Services' }]} />
          <div className="stack-sm">
            <h1 className="display">Our services.</h1>
            <p className="muted" style={{ maxWidth: '34rem' }}>Embroidery logos and DTF prints, for one piece or a full team. Send us your design on WhatsApp and we will tell you the price and time.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          {SERVICES.map((s) => (
            <article key={s.id} className={`card svc ${s.flip ? 'flip' : ''}`}>
              <div className="tile photo svc-img"><img src={s.img} alt={s.title} loading="lazy" /></div>
              <div className="stack-md svc-body">
                <p className="caps eyebrow">{s.eyebrow}</p>
                <h2 className="h-md">{s.title}</h2>
                <p className="muted">{s.intro}</p>
                <ul className="list-dot">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="row wrap">
                  <a className="btn btn-primary" href={waLink(`Hi REY Stores, I want details about ${s.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> {s.cta}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="dark guide">
            <div className="stack-md" style={{ maxWidth: '38rem' }}>
              <p className="caps brass">◆ How to send your design</p>
              <h2 className="h-lg">Just WhatsApp a photo of your logo.</h2>
              <p style={{ color: '#aab3bd' }}>A clear photo or screenshot is enough. Tell us the shirt colour, where you want it (chest / back / sleeve), sizes and how many pieces.</p>
              <div className="row wrap">
                <a className="btn btn-light" href={waLink('Hi REY Stores, I am sending my design for printing / embroidery.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> Send Your Design</a>
              </div>
            </div>
            <span className="guide-mark" aria-hidden="true">REY</span>
          </div>
        </div>
      </section>
    </>
  );
}
