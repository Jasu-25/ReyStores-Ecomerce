import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { Crumbs, ItemCard, OrderNote } from '../components/ui';
import { categoryName, COLLECTION, itemById, orderText, STORE, waLink } from '../data/store';

export default function Product() {
  const { id } = useParams();
  const item = itemById(id) || COLLECTION[0];
  const [size, setSize] = useState(null);
  const [type, setType] = useState('single');
  const [qty, setQty] = useState(1);
  const bulk = type === 'bulk';
  const pieces = bulk ? Math.max(10, qty) : qty;

  const extra = `${size ? `\n• Size: ${size}` : ''}\n• Quantity: ${pieces} pc${pieces > 1 ? 's' : ''}${bulk ? ' (bulk order)' : ''}`;
  const related = COLLECTION.filter((x) => x.id !== item.id && x.category === item.category)
    .concat(COLLECTION.filter((x) => x.category !== item.category)).slice(0, 4);

  return (
    <>
      <div className="container" style={{ paddingTop: '1.25rem' }}>
        <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Collection', to: '/collection' }, { label: categoryName(item.category), to: `/collection?c=${item.category}` }, { label: item.name }]} />
      </div>

      <section className="section-tight">
        <div className="container pdp">
          <div className="pdp-gallery">
            <div className="card tile photo pdp-photo">
              <img src={item.img} alt={item.name} />
              {item.tag && <span className="badge badge-white photo-badge">{item.tag}</span>}
            </div>
            <p className="help" style={{ marginTop: '0.6rem' }}>Photo from our shop's Instagram. Actual colour may vary slightly.</p>
          </div>

          <div className="pdp-info stack-lg">
            <div className="stack-sm">
              <span className="caps olive">{categoryName(item.category)}</span>
              <h1 className="h-lg">{item.name}</h1>
              <p className="h-md">{item.price || 'Ask for price'}</p>
              <p className="muted" style={{ marginTop: '0.5rem' }}>{item.desc}</p>
            </div>

            <div className="stack-sm">
              <span className="label">Order type</span>
              <div className="grid g-2 m-2" style={{ gap: '0.6rem' }}>
                <button type="button" className={`option ${!bulk ? 'active' : ''}`} onClick={() => { setType('single'); setQty(1); }}>
                  <span className="tick" /><p className="title" style={{ fontSize: '1.05rem' }}>Single piece</p><p className="body-sm muted">For yourself or a gift</p>
                </button>
                <button type="button" className={`option ${bulk ? 'active' : ''}`} onClick={() => { setType('bulk'); setQty(10); }}>
                  <span className="tick" /><p className="title" style={{ fontSize: '1.05rem' }}>Bulk order</p><p className="body-sm muted">10+ pcs for team / event</p>
                </button>
              </div>
            </div>

            <div className="stack-sm">
              <span className="label">{bulk ? 'Main size (send full size list on WhatsApp)' : 'Select size'}</span>
              <div className="row wrap" style={{ gap: '0.4rem' }}>
                {item.sizes.map((s) => <button key={s} className={`chip size-chip ${size === s ? 'active' : ''}`} onClick={() => setSize(size === s ? null : s)}>{s}</button>)}
              </div>
            </div>

            <div className="row wrap">
              <span className="label">Quantity</span>
              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(bulk ? 10 : 1, q - 1))} aria-label="Decrease"><Icon name="minus" size={14} /></button>
                <input inputMode="numeric" value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value.replace(/\D/g, '') || '1', 10)))} aria-label="Quantity" />
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase"><Icon name="plus" size={14} /></button>
              </div>
              {bulk && qty < 10 && <span className="body-sm muted">Bulk starts from 10 pcs</span>}
            </div>

            <div className="stack-sm hide-900">
              <a className="btn btn-primary btn-block" href={waLink(orderText(item, extra))} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> Order on WhatsApp</a>
              <a className="btn btn-secondary btn-block" href={`tel:+${STORE.phones[0].digits}`}><Icon name="phone" size={15} /> Call to Order · {STORE.phones[0].display}</a>
            </div>

            <OrderNote />

            <div className="pdp-perks card card-pad">
              <span><Icon name="truck" size={16} /> Delivery all over India</span>
              <span><Icon name="store" size={16} /> Pick up at Tirupati shop</span>
              <span><Icon name="needle" size={16} /> Add your logo / name</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head">
            <div className="stack-sm"><p className="caps eyebrow">You may also like</p><h2 className="h-lg">More from the collection</h2></div>
            <Link to="/collection" className="link">View all <Icon name="arrow" size={12} /></Link>
          </div>
          <div className="grid g-4">{related.map((r) => <ItemCard key={r.id} item={r} />)}</div>
        </div>
      </section>

      <div className="sticky-buy">
        <a className="btn btn-secondary" href={`tel:+${STORE.phones[0].digits}`}><Icon name="phone" size={14} /> Call</a>
        <a className="btn btn-primary" href={waLink(orderText(item, extra))} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> WhatsApp Order</a>
      </div>
    </>
  );
}
