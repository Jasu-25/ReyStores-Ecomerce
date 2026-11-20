// All shop details and the collection live here. Update this file when new stock arrives.

export const STORE = {
  name: 'REY Stores',
  tagline: "India's Finest Clothing",
  phones: [
    { display: '+91 79957 75597', digits: '917995775597' },
    { display: '+91 93928 71509', digits: '919392871509' },
  ],
  whatsapp: '917995775597', // main WhatsApp number, digits only
  instagram: 'rey_stores01',
  instagramUrl: 'https://www.instagram.com/rey_stores01/',
  address: {
    line1: '25, KT Road, Srinivasa Nagar',
    line2: 'Khadi Colony, Tirupati',
    state: 'Andhra Pradesh',
    pin: '517501',
    landmark: 'Beside Indian Bank, KT Road',
  },
  mapsLink: 'https://maps.app.goo.gl/zmPSvyWt3jJohYGA7',
  mapsEmbed: 'https://maps.google.com/maps?q=REY%20Stores%2C%2025%20KT%20Rd%2C%20Srinivasa%20Nagar%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501&z=16&output=embed',
};

export const fullAddress = `${STORE.address.line1}, ${STORE.address.line2}, ${STORE.address.state} ${STORE.address.pin}`;

export const waLink = (text) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;

export const orderText = (item, extra = '') =>
  `Hi REY Stores, I want to order:\n• ${item.name}${extra}\nPlease share price and availability.`;

export const CATEGORIES = [
  { id: 'partywear', name: 'Partywear Shirts', sub: 'Checks, plain & printed party shirts' },
  { id: 'stone', name: 'Stone Collection Shirts', sub: 'Stone-work shirts for functions & festivals' },
  { id: 'tshirts', name: 'T-Shirts', sub: 'Drop-shoulder, acid-wash & printed tees' },
  { id: 'pants', name: 'Pants', sub: 'Jeans, cotton & formal pants' },
  { id: 'custom', name: 'Custom Embroidery & DTF', sub: 'Your logo, photo or name on shirts & tees' },
];

// Photos are from the shop's own Instagram posts (@rey_stores01).
// price: shown as-is. Leave null to show "Ask for price".
export const COLLECTION = [
  {
    id: 'ayyappa-embroidery-black-shirt',
    name: 'Ayyappa Embroidery Black Shirt',
    category: 'custom',
    img: '/images/shirt-ayyappa-embroidery-black.jpg',
    price: null,
    tag: 'Devotional',
    desc: 'Black shirt with detailed golden Swamy Ayyappa embroidery on the front and a small motif on the pocket side. Popular during Ayyappa Mala season.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'printed-partywear-shirt',
    name: 'Printed Partywear Shirt',
    category: 'partywear',
    img: '/images/shirt-partywear-printed-green.jpg',
    price: null,
    tag: 'Partywear',
    desc: 'Full-sleeve printed party shirt in a fresh mint-and-black leaf print. Looks great with jeans or a lungi for functions.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'maroon-partywear-shirt',
    name: 'Maroon Partywear Shirt',
    category: 'partywear',
    img: '/images/shirt-partywear-maroon.jpg',
    price: null,
    tag: 'Partywear',
    desc: 'Rich maroon full-sleeve shirt with a small chest emblem. Many more solid colours available in the shop.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'shirt-pant-combo',
    name: 'Shirt + Pant Combo',
    category: 'pants',
    img: '/images/combo-pink-shirt-grey-jeans.jpg',
    price: 'Combo offers available',
    tag: 'Combo',
    desc: 'Pick any shirt with any pant — pink plain shirt with grey washed jeans shown here. Ask on WhatsApp for the current combo price.',
    sizes: ['30', '32', '34', '36', 'M', 'L', 'XL'],
  },
  {
    id: 'pants-range',
    name: 'Jeans & Cotton Pants',
    category: 'pants',
    img: '/images/pants-and-jackets-range.jpg',
    price: null,
    tag: 'New stock',
    desc: 'Fresh stock of jeans, cotton pants and jackets in many colours and fits. Send your waist size on WhatsApp and we will share options.',
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
  {
    id: 'acid-wash-rx100-tee',
    name: 'Acid-Wash Yamaha RX100 Tee',
    category: 'tshirts',
    img: '/images/tshirt-acid-wash-rx100.jpg',
    price: null,
    tag: 'Drop shoulder',
    desc: 'Grey acid-wash drop-shoulder t-shirt with a bold RX100 bike print. Many more graphic designs available.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'custom-back-print-shirt',
    name: 'White Shirt with Custom Back Print',
    category: 'custom',
    img: '/images/shirt-white-custom-back-print.jpg',
    price: null,
    tag: 'Bulk / team order',
    desc: 'White shirt with your own photo and team name printed on the back (DTF print). Ideal for fan clubs, political teams and group events.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'white-logo-embroidery-shirt',
    name: 'White Shirt with Logo Embroidery',
    category: 'custom',
    img: '/images/shirt-white-logo-embroidery.jpg',
    price: '₹700',
    tag: 'Embroidery',
    desc: 'Crisp white shirt with your logo embroidered on the chest. Single piece or bulk — same neat finish.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'white-chest-embroidery-shirt',
    name: 'White Shirt — Chest Badge Embroidery',
    category: 'custom',
    img: '/images/shirt-white-chest-embroidery.jpg',
    price: null,
    tag: 'Embroidery',
    desc: 'White full-sleeve shirt with an embroidered badge on the chest. Send us your logo and we will make it.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'dtf-graphic-print',
    name: 'DTF Graphic Print Designs',
    category: 'tshirts',
    img: '/images/dtf-print-design.jpg',
    price: null,
    tag: 'DTF print',
    desc: 'Bold full-colour DTF prints for t-shirts and shirts — pick from our designs or send your own artwork.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
];

export const itemById = (id) => COLLECTION.find((i) => i.id === id);
export const categoryName = (id) => CATEGORIES.find((c) => c.id === id)?.name || '';

// From the shop's Diwali 2026 offer poster (valid 7–8 Nov). Shown as an example of their combo offers.
export const RECENT_OFFERS = [
  ['Any 2 Partywear Shirts', '₹1,099'],
  ['Any 2 Pants', '₹1,099'],
  ['4 Drop-Shoulder T-Shirts', '₹999'],
  ['Any Pair (1 Shirt + 1 Pant)', '₹1,099'],
];
