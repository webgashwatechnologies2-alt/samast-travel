import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  MapPin, Clock, Users, Star, CheckCircle, XCircle, ArrowRight, 
  Phone, Calendar, Compass, ShieldCheck, HelpCircle, Utensils, Hotel, Car 
} from 'lucide-react';
import styles from './package.module.css';
import { getPackageBySlug, getAllPackageSlugs } from '@/data/packagesData';

export async function generateStaticParams() {
  const slugs = getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} | ${pkg.days}D/${pkg.nights}N Tour Package | Samast Travel`,
    description: `${pkg.tagline}. Price on Request. Book online or customize your itinerary.`,
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;
  const savingsPercent = pkg.originalPrice ? Math.round((savings / pkg.originalPrice) * 100) : 0;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Image 
            src={pkg.image || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85'} 
            alt={pkg.name} 
            fill 
            priority 
            sizes="100vw" 
            className={styles.heroImg} 
          />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroLeft}>
              <nav className={styles.breadcrumb} aria-label="breadcrumb">
                <Link href="/">Home</Link>
                <span className={styles.separator}>›</span>
                <Link href="/destinations">Destinations</Link>
                <span className={styles.separator}>›</span>
                <Link href={`/destinations/${pkg.destination}`}>{pkg.destinationName}</Link>
                <span className={styles.separator}>›</span>
                <span className={styles.activeBreadcrumb}>{pkg.name}</span>
              </nav>
              
              {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
              <h1 className={styles.title}>{pkg.name}</h1>
              <p className={styles.tagline}>{pkg.tagline}</p>
              
              <div className={styles.heroMeta}>
                <span className={styles.rating}>
                  <Star size={16} fill="currentColor" />
                  <strong>{pkg.rating}</strong> ({pkg.reviews} reviews)
                </span>
                <span className={styles.metaItem}>
                  <MapPin size={15} />
                  {pkg.destinationName}
                </span>
                <span className={styles.metaItem}>
                  <Clock size={15} />
                  {pkg.days} Days / {pkg.nights} Nights
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Strip */}
        <section className={styles.factsStrip}>
          <div className="container">
            <div className={styles.factsGrid}>
              <div className={styles.factCard}>
                <Clock size={18} className={styles.factIcon} />
                <div>
                  <span className={styles.factLabel}>Duration</span>
                  <span className={styles.factValue}>{pkg.days}D / {pkg.nights}N</span>
                </div>
              </div>
              <div className={styles.factCard}>
                <Compass size={18} className={styles.factIcon} />
                <div>
                  <span className={styles.factLabel}>Difficulty</span>
                  <span className={styles.factValue}>{pkg.difficulty}</span>
                </div>
              </div>
              <div className={styles.factCard}>
                <Calendar size={18} className={styles.factIcon} />
                <div>
                  <span className={styles.factLabel}>Best Time</span>
                  <span className={styles.factValue}>{pkg.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.detailsSection}>
          <div className="container">
            <div className={styles.grid}>
              
              {/* Left Column: Details */}
              <div className={styles.leftColumn}>
                
                {/* Amenities Box */}
                <div className={styles.amenities}>
                  <h3 className={styles.sectionTitle}>What is Offered?</h3>
                  <div className={styles.amenitiesGrid}>
                    <div className={styles.amenityItem}>
                      <Car size={20} />
                      <div>
                        <strong>Transport</strong>
                        <p>{pkg.transport}</p>
                      </div>
                    </div>
                    <div className={styles.amenityItem}>
                      <Hotel size={20} />
                      <div>
                        <strong>Accommodation</strong>
                        <p>{pkg.accommodation}</p>
                      </div>
                    </div>
                    <div className={styles.amenityItem}>
                      <Utensils size={20} />
                      <div>
                        <strong>Meals</strong>
                        <p>{pkg.meals}</p>
                      </div>
                    </div>
                    <div className={styles.amenityItem}>
                      <ShieldCheck size={20} />
                      <div>
                        <strong>Safety Assurance</strong>
                        <p>Guided, Insured & Secure</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className={styles.sectionCard}>
                  <h3 className={styles.sectionTitle}>Tour Highlights</h3>
                  <div className={styles.highlightsList}>
                    {pkg.highlights.map((h, index) => (
                      <div key={index} className={styles.highlightItem}>
                        <CheckCircle size={18} className={styles.highlightCheck} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day-by-Day Itinerary */}
                <div className={styles.sectionCard}>
                  <h3 className={styles.sectionTitle}>Day-by-Day Itinerary</h3>
                  <div className={styles.timeline}>
                    {pkg.itinerary.map((item) => (
                      <div key={item.day} className={styles.timelineItem}>
                        <div className={styles.timelineIndicator}>
                          <div className={styles.timelineCircle}>
                            <span>Day</span>
                            <strong>{item.day}</strong>
                          </div>
                          <div className={styles.timelineLine} />
                        </div>
                        <div className={styles.timelineContent}>
                          <h4 className={styles.timelineDayTitle}>{item.title}</h4>
                          <p className={styles.timelineDayDesc}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className={styles.incExcGrid}>
                  <div className={`${styles.incExcCard} ${styles.inclusionsCard}`}>
                    <h3 className={styles.incExcTitle}>
                      <CheckCircle size={20} color="var(--green)" /> Inclusions
                    </h3>
                    <ul>
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className={styles.bulletInc} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${styles.incExcCard} ${styles.exclusionsCard}`}>
                    <h3 className={styles.incExcTitle}>
                      <XCircle size={20} color="#EF4444" /> Exclusions
                    </h3>
                    <ul>
                      {pkg.exclusions.map((exc, i) => (
                        <li key={i}>
                          <XCircle size={14} className={styles.bulletExc} />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Booking Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.bookingCard}>
                  <div className={styles.priceHeader}>
                    <div className={styles.priceRow}>
                      <div className={styles.priceLabel}>Best Price Guarantee</div>
                      <div className={styles.priceWrap}>
                        <span className={styles.currentPrice} style={{ fontSize: '22px' }}>
                          Price on Request
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.bookingSummary}>
                    <div className={styles.summaryItem}>
                      <span>Includes:</span>
                      <strong>Stay, Meals, Transport, Guide</strong>
                    </div>
                    <div className={styles.summaryItem}>
                      <span>Departure:</span>
                      <strong>Flexible Dates</strong>
                    </div>
                  </div>

                  <Link 
                    href={`/bookings?package=${pkg.slug}`} 
                    className={`btn btn-primary ${styles.bookNowBtn}`}
                  >
                    <span>Book This Package</span>
                    <ArrowRight size={16} />
                  </Link>

                  <p className={styles.bookingGuarantee}>
                    🔒 Secure Booking & Fast Support response
                  </p>
                </div>

                {/* Direct Help Card */}
                <div className={styles.helpCard}>
                  <HelpCircle size={24} className={styles.helpIcon} />
                  <h4>Need Help with Planning?</h4>
                  <p>Our travel specialist can customize this itinerary for you or arrange direct departures.</p>
                  <a href="tel:+918679677152" className={styles.phoneLink}>
                    <Phone size={16} />
                    <span>+91 86796 77152</span>
                  </a>
                  <a 
                    href={`https://wa.me/918679677152?text=Hi! I am interested in booking the "${pkg.name}" package.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.whatsappLink}
                  >
                    Chat on WhatsApp
                  </a>
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
