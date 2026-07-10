import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import styles from './DestinationsSection.module.css';

const destinations = [
  {
    name: 'Himachal Pradesh',
    slug: 'himachal',
    image: '/images/newww.webp',
    tagline: 'Land of Gods & Glaciers',
    duration: '5-10 Days',
    rating: 4.9,
    tours: 48,
    badge: 'Most Popular',
    badgeColor: '#FF6B35',
  },
  {
    name: 'Spiti Valley',
    slug: 'spiti',
    image: '/images/spiti.webp',
    tagline: 'The Cold Desert Monastery Trail',
    duration: '7-12 Days',
    rating: 4.8,
    tours: 32,
    badge: 'Adventure',
    badgeColor: '#2E7D32',
  },
  {
    name: 'Ladakh',
    slug: 'ladakh',
    image: '/images/slide4.webp',
    tagline: 'The Land of High Passes',
    duration: '7-14 Days',
    rating: 4.9,
    tours: 56,
    badge: 'Trending',
    badgeColor: '#0096C7',
  },
  {
    name: 'Kashmir',
    slug: 'kashmir',
    image: '/images/kashmir.webp',
    tagline: 'Paradise on Earth',
    duration: '5-8 Days',
    rating: 4.8,
    tours: 44,
    badge: 'Must Visit',
    badgeColor: '#8E24AA',
  },
  {
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    image: '/images/uk.webp',
    tagline: 'Devbhoomi — Land of Temples',
    duration: '4-9 Days',
    rating: 4.7,
    tours: 38,
    badge: 'Spiritual',
    badgeColor: '#D99500',
  },
  {
    name: 'Goa',
    slug: 'goa',
    image: '/images/goa.webp',
    tagline: 'Sun, Sand & Portuguese Vibes',
    duration: '3-6 Days',
    rating: 4.7,
    tours: 29,
    badge: 'Beach Escape',
    badgeColor: '#00B4D8',
  },
  {
    name: 'Rajasthan',
    slug: 'rajasthan',
    image: '/images/rajsthan.webp',
    tagline: 'The Land of Kings & Colours',
    duration: '6-12 Days',
    rating: 4.8,
    tours: 52,
    badge: 'Heritage',
    badgeColor: '#C62828',
  },
  {
    name: 'Kerala',
    slug: 'kerala',
    image: '/images/kl.webp',
    tagline: 'God\'s Own Country',
    duration: '5-9 Days',
    rating: 4.9,
    tours: 41,
    badge: 'Backwaters',
    badgeColor: '#2E7D32',
  },
  {
    name: 'North East India',
    slug: 'north-east',
    image: '/images/northeast.webp',
    tagline: 'The Seven Sisters of India',
    duration: '7-14 Days',
    rating: 4.8,
    tours: 35,
    badge: 'Off-Beat',
    badgeColor: '#558B2F',
  },
  {
    name: 'International',
    slug: 'international',
    image: '/images/internationaklimage.jpg',
    tagline: 'Explore the World with Us',
    duration: '7-21 Days',
    rating: 4.9,
    tours: 60,
    badge: 'Global Exclusive',
    badgeColor: '#6A1B9A',
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className={styles.section}>
      <div className={styles.bgDecoration} />
      
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleArea}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Our Destinations</span>
            </div>
            <h2 className={styles.title}>
              Explore <span>Incredible</span> India
            </h2>
            <p className={styles.subtitle}>
              From the frozen deserts of Spiti to the tropical backwaters of Kerala — we take you everywhere your heart desires.
            </p>
          </div>
          <Link href="/destinations" className={`btn btn-outline ${styles.viewAllBtn}`}>
            <span>View All Destinations</span>
            <ArrowRight size={16} className={styles.btnIcon} />
          </Link>
        </div>

        {/* Masonry-Style Grid */}
        <div className={styles.grid}>
          {destinations.map((dest, i) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className={styles.cardImg}
                  priority={i < 2}
                />
                
                {/* Advanced Multi-layer Overlay */}
                <div className={styles.vignetteOverlay} />
                <div className={styles.hoverOverlay} />
                
                {/* Glass Badge */}
                <span
                  className={styles.cardBadge}
                  style={{ '--badge-bg': dest.badgeColor }}
                >
                  {dest.badge}
                </span>
                
                {/* Frosted Glass Meta Container */}
                <div className={styles.cardInfo}>
                  <div className={styles.cardInfoBackground} />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{dest.name}</h3>
                    <p className={styles.cardTagline}>{dest.tagline}</p>
                    
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}>
                        <Clock size={13} className={styles.metaIcon} /> 
                        <span>{dest.duration}</span>
                      </span>
                      <span className={styles.metaItem}>
                        <Star size={13} fill="#FEB210" stroke="#FEB210" className={styles.metaIcon} /> 
                        <span>{dest.rating}</span>
                      </span>
                      <span className={styles.metaItem}>
                        <MapPin size={13} className={styles.metaIcon} /> 
                        <span>{dest.tours} Tours</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Action Button inside card */}
                  <div className={styles.floatingActionBtn}>
                    <ArrowRight size={18} color="#ffffff" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
