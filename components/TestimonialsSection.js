import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'ajay bhandari',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    review: 'Had an amazing experience planning my Shimla–Spiti trip with Samast Travel ! Everything was handled so smoothly—from the itinerary to stays and local guidance. The team was super responsive, professional, and made sure we were comfortable throughout the journey, even in remote areas.',
    trip: 'Spiti Valley Expedition',
  },
  {
    name: 'Arpit Verma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    review: 'Our Sikkim package was very well organized. Gangtok sightseeing and Tsomgo Lake visit were beautiful experiences. Hotels and transportation were comfortable. Excellent service by Samast Travel.',
    trip: 'Sikkim Trip',
  },
  {
    name: 'Ravi Rattan',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    review: 'I booked my Goa package with Samast Travel, and it exceeded my expectations! Affordable pricing, great hotels, smooth transfers, and amazing customer support. If you want a stress-free and memorable vacation, Samast Travel is the right choice.',
    trip: 'Goa Trip',
  },
  {
    name: 'Shivani Sharma',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    review: 'Even though we didn’t book our himachal package with Samast Travel, their support during our trip was truly unbelievable. Initially, we were in touch with Samast Travel as well, but later we booked with another company because they offered a cheaper price.',
    trip: 'himachal Tour',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div  className={styles.header}>
          <div className="section-badge">💬 Testimonials</div>
          <h2  style={{
                fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}  className="section-title">
            What Our <span>Travellers Say</span>
          </h2>
          <p className="section-subtitle">
            Over 10,000 happy travellers trust us with their dream journeys. Here's what some of them have to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <Quote size={32} className={styles.quoteIcon} />

              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className={styles.review}>{t.review}</p>

              <div className={styles.tripBadge}>{t.trip}</div>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  <Image src={t.image} alt={t.name} fill sizes="56px" className={styles.avatarImg} />
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
