import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star, MapPin, ArrowRight, Tag, Heart } from 'lucide-react';
import styles from './FeaturedTours.module.css';

const tours = [
  {
    id: 1,
    name: 'Spiti Valley Expedition',
    slug: 'spiti',
    image: '/images/spitiheroo.webp',
    location: 'Himachal Pradesh',
    duration: '10 Days / 9 Nights',
    groupSize: 'Max 12 People',
    rating: 4.9,
    reviews: 128,
    price: 24999,
    originalPrice: 29999,
    difficulty: 'Moderate',
    diffColor: '#FF9800',
    highlights: ['Key Monastery', 'Chandratal Lake', 'Kaza', 'Pin Valley'],
  },
  {
    id: 2,
    name: 'Kashmir Paradise Tour',
    slug: 'kashmir',
    image: '/images/ksmirrr.webp',
    location: 'Jammu & Kashmir',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 15 People',
    rating: 4.8,
    reviews: 214,
    price: 18999,
    originalPrice: 22999,
    difficulty: 'Easy',
    diffColor: '#2E7D32',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
  },
  {
    id: 3,
    name: 'Ladakh Bike & Road Trip',
    slug: 'ladakh',
    image: '/images/lehbike.webp',
    location: 'Ladakh',
    duration: '12 Days / 11 Nights',
    groupSize: 'Max 10 People',
    rating: 4.9,
    reviews: 176,
    price: 32999,
    originalPrice: 39999,
    difficulty: 'Challenging',
    diffColor: '#C62828',
    highlights: ['Pangong Tso', 'Nubra Valley', 'Khardung La', 'Tso Moriri'],
  },
  {
    id: 4,
    name: 'Himachal Full Circuit',
    slug: 'himachal',
    image: '/images/himchl.webp',
    location: 'Himachal Pradesh',
    duration: '8 Days / 7 Nights',
    groupSize: 'Max 20 People',
    rating: 4.8,
    reviews: 152,
    price: 16999,
    originalPrice: 19999,
    difficulty: 'Easy',
    diffColor: '#2E7D32',
    highlights: ['Shimla', 'Manali', 'Kasol', 'Dharamshala'],
  },
  {
    id: 5,
    name: 'Rajasthan Royal Heritage',
    slug: 'rajasthan',
    image: '/images/rajsthan.webp',
    location: 'Rajasthan',
    duration: '9 Days / 8 Nights',
    groupSize: 'Max 18 People',
    rating: 4.7,
    reviews: 198,
    price: 21999,
    originalPrice: 26999,
    difficulty: 'Easy',
    diffColor: '#2E7D32',
    highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
  },
  {
    id: 6,
    name: 'Kerala Backwaters Bliss',
    slug: 'kerala',
    image: '/images/kerlahero.webp',
    location: 'Kerala',
    duration: '6 Days / 5 Nights',
    groupSize: 'Max 16 People',
    rating: 4.9,
    reviews: 241,
    price: 17999,
    originalPrice: 21999,
    difficulty: 'Easy',
    diffColor: '#2E7D32',
    highlights: ['Alleppey', 'Munnar', 'Wayanad', 'Kochi'],
  },
];

export default function FeaturedTours() {
  return (
    <section className={styles.section}>
      <div className={styles.bgDecoration} />
      
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Featured Packages</span>
            </div>
            <h2 className={styles.title}>
              Handpicked <span>Tour Packages</span>
            </h2>
            <p className={styles.subtitle}>
              Carefully curated travel experiences designed to give you the best of every destination.
            </p>
          </div>
          <Link href="/bookings" className={`btn btn-outline ${styles.viewAllBtn}`}>
            <span>All Packages</span>
            <ArrowRight size={16} className={styles.btnIcon} />
          </Link>
        </div>

        {/* Tours Grid */}
        <div className={styles.grid}>
          {tours.map((tour) => {
            const discountPct = Math.round((1 - tour.price / tour.originalPrice) * 100);
            return (
              <div key={tour.id} className={styles.card}>
                {/* Image Wrap */}
                <div className={styles.imgWrap}>
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className={styles.cardImg}
                  />
                  <div className={styles.imgOverlay} />
                  
                  {/* Discount Badge - Hidden for Price on Request */}
                  {/* <div className={styles.discountBadge}>
                    <Tag size={12} className={styles.tagIcon} />
                    <span>{discountPct}% OFF</span>
                  </div> */}
                  
                  {/* Difficulty Badge */}
                  <div 
                    className={styles.difficultyBadge} 
                    style={{ 
                      color: tour.diffColor, 
                      borderColor: `${tour.diffColor}40`, 
                      background: `${tour.diffColor}15` 
                    }}
                  >
                    {tour.difficulty}
                  </div>

                  {/* Faint heart button for save package */}
                  <button className={styles.wishlistBtn} aria-label="Save package">
                    <Heart size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  {/* Location Area */}
                  <div className={styles.cardLocation}>
                    <MapPin size={13} className={styles.locIcon} />
                    <span>{tour.location}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className={styles.cardName}>{tour.name}</h3>

                  {/* Highlights (outline elements) */}
                  <div className={styles.highlights}>
                    {tour.highlights.map((h) => (
                      <span key={h} className={styles.highlight}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Meta (Duration and Max Group Size) */}
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <Clock size={13} className={styles.metaIcon} /> 
                      <span>{tour.duration}</span>
                    </span>
                    <span className={styles.metaItem}>
                      <Users size={13} className={styles.metaIcon} /> 
                      <span>{tour.groupSize}</span>
                    </span>
                  </div>

                  {/* Divider line before pricing */}
                  <div className={styles.cardDivider} />

                  {/* Footer (Pricing Area + Rating) */}
                  <div className={styles.cardFooter}>
                    <div className={styles.pricingArea}>
                      <span className={styles.priceLabel}>Price</span>
                      <div className={styles.pricing}>
                        <span className={styles.price} style={{ fontSize: '15px', fontWeight: 'bold' }}>Price on Request</span>
                      </div>
                    </div>

                    <div className={styles.ratingBox}>
                      <Star size={13} fill="#FEB210" stroke="#FEB210" />
                      <span className={styles.ratingVal}>{tour.rating}</span>
                      <span className={styles.reviewCount}>({tour.reviews})</span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Link href={`/bookings?tour=${tour.slug}`} className={styles.bookBtn}>
                    <span>Book This Tour</span>
                    <ArrowRight size={15} className={styles.bookIcon} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
