import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Users, Star, CheckCircle, ArrowRight, Phone, Calendar, Activity, Compass, ChevronRight } from 'lucide-react';
import styles from './dest.module.css';
import { getPackagesByDestination } from '@/data/packagesData';

const destinationData = {
  himachal: {
    name: 'Himachal Pradesh',
    tagline: 'Land of Gods, Glaciers & Golden Sunsets',
    image: '/images/himachalimage.webp',
    description: 'Himachal Pradesh, nestled in the western Himalayas, is a paradise for nature lovers and adventure seekers alike. From the colonial charm of Shimla to the psychedelic beauty of Kasol, from the ancient temples of Manali to the lush valleys of Dharamshala — Himachal offers an unparalleled tapestry of experiences.',
    highlights: ['Shimla — Queen of Hills', 'Manali — Adventure Capital', 'Kasol — Mini Israel', 'Dharamshala — Dalai Lama\'s Abode', 'Spiti Valley', 'Kinnaur Valley'],
    bestTime: 'March – June & September – November',
    duration: '5–12 Days',
    startingPrice: 12999,
    rating: 4.9,
    tours: 48,
    packages: [
      { name: 'Shimla–Manali Classic', days: '6D/5N', price: 12999 },
      { name: 'Himachal Adventure Circuit', days: '10D/9N', price: 18999 },
      { name: 'Kasol–Kheerganga Trek', days: '5D/4N', price: 8999 },
    ],
  },
  spiti: {
    name: 'Spiti Valley',
    tagline: 'The Cold Desert — Where Earth Meets Sky',
    image: '/images/spiti.webp',
    description: 'Spiti Valley is a remote trans-Himalayan valley in Himachal Pradesh that feels like another planet. At an average altitude of 4,270 m, this cold desert is home to ancient Buddhist monasteries, pristine lakes like Chandratal, and some of the world\'s highest villages. A true bucket-list destination for the intrepid traveller.',
    highlights: ['Key Monastery', 'Chandratal Lake', 'Kaza & Kibber', 'Langza Fossil Village', 'Pin Valley National Park', 'Kunzum Pass'],
    bestTime: 'June – October',
    duration: '7–14 Days',
    startingPrice: 19999,
    rating: 4.8,
    tours: 32,
    packages: [
      { name: 'Spiti Explorer', days: '8D/7N', price: 19999 },
      { name: 'Spiti–Ladakh Overland', days: '14D/13N', price: 34999 },
      { name: 'Spiti Motorcycle Trip', days: '10D/9N', price: 24999 },
    ],
  },
  ladakh: {
    name: 'Litlle Tibet / Ladakh',
    tagline: 'The Land of High Passes & Endless Skies',
    image: '/images/newhm.webp',
    description: 'Ladakh, often called "Little Tibet", is a land of stark beauty, ancient monasteries, and surreal landscapes. From the ethereal blue of Pangong Lake to the sand dunes of Nubra Valley, from the palaces of Leh to the world-famous Khardung La pass — Ladakh is a journey that transforms you.',
    highlights: ['Pangong Tso Lake', 'Nubra Valley', 'Khardung La Pass', 'Leh Palace', 'Tso Moriri', 'Magnetic Hill'],
    bestTime: 'June – September',
    duration: '7–14 Days',
    startingPrice: 22999,
    rating: 4.9,
    tours: 56,
    packages: [
      { name: 'Ladakh Discovery', days: '8D/7N', price: 22999 },
      { name: 'Ladakh Bike Expedition', days: '12D/11N', price: 32999 },
      { name: 'Pangong & Nubra Tour', days: '6D/5N', price: 18999 },
    ],
  },
  kashmir: {
    name: 'Kashmir',
    tagline: 'Paradise on Earth — Truly, Literally',
    image: '/images/kashmieww.webp',
    description: 'Kashmir, the crown jewel of India, is a valley of unparalleled beauty. Shimmering Dal Lake with its iconic houseboats, meadows of Gulmarg carpeted in wildflowers, the dramatic valley of Pahalgam, and the snow-draped passes of Sonamarg — Kashmir is poetry written in landscape.',
    highlights: ['Dal Lake & Shikara Ride', 'Gulmarg Gondola', 'Pahalgam Valley', 'Sonamarg', 'Srinagar Gardens', 'Betaab Valley'],
    bestTime: 'April – October',
    duration: '5–9 Days',
    startingPrice: 14999,
    rating: 4.8,
    tours: 44,
    packages: [
      { name: 'Kashmir Paradise', days: '7D/6N', price: 18999 },
      { name: 'Kashmir with Gulmarg', days: '5D/4N', price: 14999 },
      { name: 'Kashmir Honeymoon Package', days: '6D/5N', price: 22999 },
    ],
  },
  uttarakhand: {
    name: 'Uttarakhand',
    tagline: 'Devbhoomi — The Land of Gods',
    image: '/images/haridwar.webp',
    description: 'Uttarakhand, the "Devbhoomi" or Land of Gods, is where spirituality meets sublime natural beauty. From the sacred Char Dham pilgrimage circuit to the thrill of white-water rafting in Rishikesh, from the Valley of Flowers to the peaceful hill towns of Mussoorie and Nainital — Uttarakhand has it all.',
    highlights: ['Rishikesh & Haridwar', 'Char Dham Yatra', 'Valley of Flowers', 'Nainital & Mussoorie', 'Auli Skiing', 'Jim Corbett National Park'],
    bestTime: 'March – June & September – November',
    duration: '4–10 Days',
    startingPrice: 10999,
    rating: 4.7,
    tours: 38,
    packages: [
      { name: 'Rishikesh Adventure', days: '4D/3N', price: 8999 },
      { name: 'Char Dham Yatra', days: '10D/9N', price: 19999 },
      { name: 'Nainital–Mussoorie', days: '6D/5N', price: 12999 },
    ],
  },
  goa: {
    name: 'Goa',
    tagline: 'Sun, Sand, Sea & Soulful Sunsets',
    image: '/images/mumbai.webp',
    description: 'Goa, India\'s smallest state, is a vibrant mosaic of golden beaches, Portuguese-era churches, buzzing nightlife, and laid-back beach shacks. Whether you seek the lively shores of Baga and Calangute or the serene beaches of Palolem and Agonda, Goa always delivers the perfect holiday vibe.',
    highlights: ['Baga & Calangute Beach', 'Palolem Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Spice Plantation Tour', 'Goa Nightlife'],
    bestTime: 'November – February',
    duration: '3–7 Days',
    startingPrice: 9999,
    rating: 4.7,
    tours: 29,
    packages: [
      { name: 'Goa Beach Holiday', days: '5D/4N', price: 11999 },
      { name: 'North & South Goa', days: '4D/3N', price: 9999 },
      { name: 'Goa Honeymoon Package', days: '6D/5N', price: 18999 },
    ],
  },
  rajasthan: {
    name: 'Rajasthan',
    tagline: 'The Land of Kings, Colours & Camels',
    image: '/images/rajsthan.webp',
    description: 'Rajasthan is India\'s most colourful state — a land of majestic forts, opulent palaces, golden sand dunes, and vibrant festivals. From the Pink City of Jaipur to the Blue City of Jodhpur, from the Golden City of Jaisalmer to the Lake City of Udaipur, every corner of Rajasthan is a visual spectacle.',
    highlights: ['Jaipur — Pink City', 'Udaipur — Lake City', 'Jodhpur — Blue City', 'Jaisalmer Fort & Dunes', 'Ranthambore Tiger Safari', 'Pushkar Camel Fair'],
    bestTime: 'October – March',
    duration: '6–14 Days',
    startingPrice: 14999,
    rating: 4.8,
    tours: 52,
    packages: [
      { name: 'Rajasthan Golden Triangle', days: '7D/6N', price: 14999 },
      { name: 'Royal Rajasthan Full Tour', days: '12D/11N', price: 24999 },
      { name: 'Desert Safari Jaisalmer', days: '4D/3N', price: 9999 },
    ],
  },
  kerala: {
    name: 'Kerala',
    tagline: "God's Own Country — Pure, Green & Magical",
    image: '/images/knew.webp',
    description: "Kerala, aptly called God's Own Country, is a lush green paradise of backwaters, hill stations, and pristine beaches. A houseboat cruise on Alleppey's backwaters, misty mornings in Munnar's tea gardens, Ayurvedic rejuvenation, and Kathakali performances — Kerala is a complete sensory experience.",
    highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Wayanad Wildlife', 'Thekkady & Periyar', 'Kovalam Beach', 'Kochi Fort'],
    bestTime: 'September – March',
    duration: '5–10 Days',
    startingPrice: 13999,
    rating: 4.9,
    tours: 41,
    packages: [
      { name: 'Kerala Backwaters', days: '6D/5N', price: 17999 },
      { name: 'God\'s Own Country Full Tour', days: '9D/8N', price: 23999 },
      { name: 'Kerala Honeymoon', days: '7D/6N', price: 22999 },
    ],
  },
  'north-east': {
    name: 'North East India',
    tagline: 'The Seven Sisters — India\'s Unexplored Gem',
    image: '/images/north5.webp',
    description: 'North East India is a region of extraordinary biodiversity, unique cultures, and breathtaking landscapes that most of India is yet to discover. From Meghalaya\'s living root bridges and cleanest village to Sikkim\'s mountain vistas and Assam\'s tea estates and one-horned rhinos — the North East is truly special.',
    highlights: ['Meghalaya Living Root Bridges', 'Kaziranga National Park', 'Gangtok & Sikkim', 'Ziro Valley Arunachal', 'Tawang Monastery', 'Cherrapunji & Mawsynram'],
    bestTime: 'October – April',
    duration: '7–15 Days',
    startingPrice: 18999,
    rating: 4.8,
    tours: 35,
    packages: [
      { name: 'Meghalaya Explorer', days: '7D/6N', price: 18999 },
      { name: 'North East Grand Tour', days: '14D/13N', price: 36999 },
      { name: 'Sikkim & Darjeeling', days: '8D/7N', price: 21999 },
    ],
  },
  international: {
    name: 'International Tours',
    tagline: 'Explore the World with Samast Travel',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85',
    description: 'Take your wanderlust beyond India\'s borders with Samast Travel\'s curated international packages. From the ancient wonders of Southeast Asia to the romantic landscapes of Europe, from the stunning peaks of Nepal and Bhutan to the exotic shores of Maldives and Sri Lanka — we craft perfect international journeys.',
    highlights: ['Nepal & Bhutan', 'Southeast Asia', 'Europe Tours', 'Maldives & Sri Lanka', 'Middle East', 'Central Asia'],
    bestTime: 'Year-Round (Varies by destination)',
    duration: '7–21 Days',
    startingPrice: 34999,
    rating: 4.9,
    tours: 60,
    packages: [
      { name: 'Nepal & Bhutan Tour', days: '10D/9N', price: 34999 },
      { name: 'Southeast Asia Explorer', days: '12D/11N', price: 54999 },
      { name: 'Maldives Honeymoon', days: '7D/6N', price: 69999 },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(destinationData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  let { slug } = await params;
  if (slug === 'northeast') slug = 'north-east';
  const dest = destinationData[slug];
  if (!dest) return {};
  return {
    title: `${dest.name} Tours & Packages | Samast Travel`,
    description: dest.description.slice(0, 155),
  };
}

export default async function DestinationPage({ params }) {
  let { slug } = await params;
  if (slug === 'northeast') slug = 'north-east';
  const dest = destinationData[slug];
  if (!dest) notFound();

  const packagesList = getPackagesByDestination(slug);
  const toursCount = packagesList.length > 0 ? packagesList.length : dest.tours;
  const startingPrice = packagesList.length > 0 
    ? Math.min(...packagesList.map(p => p.price)) 
    : dest.startingPrice;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className={styles.destHero}>
          <Image src={dest.image} alt={dest.name} fill priority sizes="100vw" className={styles.heroImg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroContent}`}>
            <div className="section-badge" style={{ background:'rgba(255,107,53,0.25)', borderColor:'rgba(255,107,53,0.5)', color:'#ffb396' }}>
              <MapPin size={13} /> Destination Guide
            </div>
            <h1 className={styles.heroTitle}>{dest.name}</h1>
            <p className={styles.heroTagline}>{dest.tagline}</p>
            <div className={styles.heroMeta}>
              <span><Clock size={14} /> {dest.duration}</span>
              <span><Star size={14} fill="currentColor" /> {dest.rating} Rating</span>
              <span><MapPin size={14} /> {toursCount}+ Tours</span>
            </div>
            <nav className="breadcrumb" aria-label="breadcrumb" style={{ justifyContent:'flex-start', marginTop:16 }}>
              <Link href="/">Home</Link><span>›</span>
              <Link href="/destinations">Destinations</Link><span>›</span>
              <span>{dest.name}</span>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className={styles.content}>
          <div className="container">
            <div className={styles.contentGrid}>

              {/* Left */}
              <div className={styles.mainContent}>
                <h2 className={styles.sectionH}>About {dest.name}</h2>
                <div className={styles.aboutIntro}>
                  <p className={styles.introDesc}>
                    {dest.description.split('.')[0]}. Discover the perfect combination of natural landscapes, local culture, and unforgettable adventure.
                  </p>
                </div>
                <p className={styles.desc}>
                  {dest.description.split('.').slice(1).join('.')}
                </p>

                <h2 className={styles.sectionH} style={{ marginTop:44 }}>Must-Experience Highlights</h2>
                <div className={styles.highlightsGrid}>
                  {dest.highlights.map((h, i) => (
                    <div key={h} className={styles.highlightCard}>
                      <span className={styles.highlightNum}>{String(i + 1).padStart(2, '0')}</span>
                      <div className={styles.highlightText}>
                        <span>{h}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className={styles.sectionH} style={{ marginTop:40 }}>Popular Packages ({toursCount})</h2>
                <div className={styles.packages}>
                  {packagesList.map((p) => {
                    const savings = p.originalPrice ? p.originalPrice - p.price : 0;
                    return (
                      <div key={p.slug} className={styles.pkgCard}>
                        {/* Image wrap */}
                        <div className={styles.pkgImgWrap}>
                          <Image
                            src={p.image || '/images/himachalimage.webp'}
                            alt={p.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 300px"
                            className={styles.pkgImg}
                          />
                          {/* Duration Badge (e.g. 5N/6D) */}
                          <span className={styles.pkgImgBadge}>
                            {p.nights}N/{p.days}D
                          </span>
                          {/* Rating Pill overlay */}
                          <div className={styles.pkgImgRating}>
                            <span className={styles.starText}>★★★★★</span>
                            <span className={styles.reviewsCount}>({p.reviews})</span>
                          </div>
                        </div>

                        {/* Info Column */}
                        <div className={styles.pkgInfo}>
                          {/* Top row: Location & Category */}
                          <div className={styles.pkgTopBar}>
                            <span className={styles.pkgLocation}>
                              <MapPin size={13} /> {dest.name}
                            </span>
                            <span className={styles.pkgCategory}>
                              {p.category || 'Trekking'}
                            </span>
                          </div>

                          {/* Title */}
                          <Link href={`/packages/${p.slug}`} className={styles.pkgTitle}>
                            {p.name}
                          </Link>

                          {/* Icons Metadata Row */}
                          <div className={styles.pkgMetaRow}>
                            <span className={styles.pkgMetaItem}>
                              <Clock size={14} className={styles.metaIcon} /> {p.nights}N/{p.days}D
                            </span>
                            <span className={styles.pkgMetaItem}>
                              <Activity size={14} className={styles.metaIcon} /> {p.difficulty}
                            </span>
                            <span className={styles.pkgMetaItem}>
                              {p.slug.includes('trek') ? 'Max Alt: 13,050ft' : ``}
                            </span>
                          </div>

                          {/* Highlights Checklist */}
                          <div className={styles.pkgHighlightsList}>
                            {p.highlights.slice(0, 3).map((h, i) => (
                              <div key={i} className={styles.pkgHighlightItem}>
                                <CheckCircle size={14} className={styles.checkIcon} />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* Divider Line */}
                          <div className={styles.pkgDivider} />

                          {/* Bottom Row */}
                          <div className={styles.pkgFooter}>
                            <div className={styles.pkgPriceCol}>
                              <div className={styles.pkgPriceRow}>
                                <span className={styles.pkgPriceVal} style={{ fontSize: '16px' }}>
                                  Price on Request
                                </span>
                              </div>
                            </div>

                            <div className={styles.pkgButtons}>
                              <Link href={`/packages/${p.slug}`} className={styles.pkgBtnOutline}>
                                View Details
                              </Link>
                              <Link href={`/bookings?package=${p.slug}`} className={styles.pkgBtnSolid}>
                                Book Now <ChevronRight size={14} />
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCardHeader}>
                    <h3 className={styles.infoTitle}>Quick Guide Details</h3>
                  </div>
                  <div className={styles.infoList}>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}><Calendar size={15} /> Best Season</span>
                      <span className={styles.infoVal}>{dest.bestTime}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}><Clock size={15} /> Duration Range</span>
                      <span className={styles.infoVal}>{dest.duration}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}><Star size={15} /> Travel Rating</span>
                      <span className={styles.infoVal}>{dest.rating} / 5.0 Rating</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}><MapPin size={15} /> Package Count</span>
                      <span className={styles.infoVal}>{toursCount} Options</span>
                    </div>
                  </div>
                  <div className={styles.priceWrap}>
                    <span className={styles.fromLabel}>Budget</span>
                    <span className={styles.bigPrice} style={{ fontSize: '20px' }}>Price on Request</span>
                  </div>
                  <Link href={`/bookings?dest=${slug}`} className={`btn btn-primary ${styles.bookBtn}`}>
                    Book Destination <ArrowRight size={15} />
                  </Link>
                </div>

                <div className={styles.helpCard}>
                  <div className={styles.agentHeader}>
                    <div className={styles.agentAvatar}>
                      <Users size={18} className={styles.agentIcon} />
                      <span className={styles.statusDot} />
                    </div>
                    <div className={styles.agentMeta}>
                      <h4>Travel Specialist</h4>
                      <p>Online • Instant Response</p>
                    </div>
                  </div>
                  <p className={styles.helpText}>Need help customizing your itinerary? Speak directly to our travel designer for this region.</p>
                  <div className={styles.helpButtons}>
                    <a href="tel:+918679677152" className={styles.specialistCallBtn}>
                      <Phone size={14} /> Call Specialist
                    </a>
                    <a 
                      href={`https://wa.me/918679677152?text=Hi! I am interested in customizing my travel to ${dest.name}.`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.specialistWhatsappBtn}
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
