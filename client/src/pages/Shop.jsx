import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { Crumbs, ItemCard, OrderNote } from '../components/ui';
import { CATEGORIES, COLLECTION, waLink } from '../data/store';

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const cat = params.get('c') || 'all';
  const list = COLLECTION.filter((i) => cat === 'all' || i.category === cat);
  const current = CATEGORIES.find((c) => c.id === cat);
  const pick = (id) => setParams(id === 'all' ? {} : { c: id }, { replace: true });

  return (
    <>
      <section className="page-hero">
        <div className="container stack-md">
          <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Collection', to: current ? '/collection' : undefined }, ...(current ? [{ label: current.name }] : [])]} />
          <div className="row-between wrap" style={{ alignItems: 'flex-end' }}>
            <div className="stack-sm">
              <p className="caps eyebrow">REY Stores · Tirupati</p>
              <h1 className="display">{current ? current.name : 'Our Collection'}</h1>
              <p className="muted" style={{ maxWidth: '34rem' }}>
                {current ? current.sub + '. ' : ''}These are a few pieces from our shop. We have many more colours and designs in store — WhatsApp us and we will send photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-lg">
          <div className="cat-chips">
            <button className={`chip ${cat === 'all' ? 'active' : ''}`} onClick={() => pick('all')}>All</button>
            {CATEGORIES.map((c) => <button key={c.id} className={`chip ${cat === c.id ? 'active' : ''}`} onClick={() => pick(c.id)}>{c.name}</button>)}
          </div>
          <OrderNote />

          {list.length ? (
            <div className="grid g-4 shop-products">{list.map((i) => <ItemCard key={i.id} item={i} />)}</div>
          ) : (
            <div className="card card-pad stack-md empty">
              <Icon name="sparkle" size={30} style={{ margin: '0 auto' }} />
              <p className="h-sm">{current?.name} — photos coming soon</p>
              <p className="muted">This collection is available in our shop. WhatsApp us and we will send you photos and prices of the latest designs.</p>
              <div><a className="btn btn-primary" href={waLink(`Hi REY Stores, please send photos of your ${current?.name}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> Ask for Photos</a></div>
            </div>
          )}
        </div>
      </section>

      <section className="section band">
        <div className="container row-between wrap">
          <div className="stack-sm" style={{ maxWidth: '36rem' }}>
            <p className="caps olive">See more on Instagram</p>
            <h2 className="h-md">New arrivals are posted on our Instagram first.</h2>
          </div>
          <a className="btn btn-secondary" href="https://www.instagram.com/rey_stores01/" target="_blank" rel="noreferrer"><Icon name="insta" size={15} /> Follow @rey_stores01</a>
        </div>
      </section>
    </>
  );
}
