'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search, MapPin, Calendar, Users, SlidersHorizontal,
  ChevronDown, ChevronLeft, ChevronRight, Play,
  Bird, Hotel, Utensils, Footprints, Ship, Bike,
  Landmark, Car, Snowflake, Bed, Compass, Castle
} from 'lucide-react';
import styles from './HeroSection.module.css';

const slides = [
  {
    image: '/images/slide5.webp',
    badge: 'Explore the Himalayas',
    title: "Life's an adventure,",
    titleAccent: 'live it!',
    subtitle: 'Discover breathtaking landscapes, rich cultures, and unforgettable adventures across India and beyond.',
  },
  {
    image: '/images/kasmirrr.jpg',
    badge: 'Paradise on Earth',
    title: 'Kashmir Where',
    titleAccent: 'Heaven Meets Earth',
    subtitle: 'Float on the serene Dal Lake, explore Mughal gardens, and witness snow-capped peaks in all their glory.',
  },
  {
    image: '/images/sptheronew.jpg',
    badge: 'The Cold Desert',
    title: 'Spiti',
    titleAccent: 'Land of Monasteries',
    subtitle: 'Journey through ancient Buddhist culture, stark lunar landscapes, and crystal-clear Himalayan skies.',
  },
  {
    image: '/images/rajshero.webp',
    badge: 'The Royal State',
    title: 'Rajasthan',
    titleAccent: 'Land of Maharajas',
    subtitle: 'Experience grand palaces, historic forts, desert adventures, traditional folk culture, and unforgettable sunsets in the heart of royal India.',
  },
];

const destinations = [
  'Himachal Pradesh', 'Spiti Valley', 'Ladakh', 'Kashmir',
  'Uttarakhand', 'Goa', 'Rajasthan', 'Kerala', 'North East', 'International',
];

const categoriesList = [
  { name: 'Wildlife', icon: Bird },
  { name: 'Hotels & Resorts', icon: Hotel },
  { name: 'Restaurant', icon: Utensils },
  { name: 'Hiking & Trekking', icon: Footprints },
  { name: 'Cruises', icon: Ship },
  { name: 'Bicycle Rentals', icon: Bike },
  { name: 'Museums', icon: Landmark },
  { name: 'Car Service', icon: Car },
  { name: 'Skiing', icon: Snowflake },
  { name: 'Bed & Breakfasts', icon: Bed },
  { name: 'Tours', icon: Compass },
  { name: 'Monuments', icon: Castle },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [dest, setDest] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const categoriesRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction) => {
    if (categoriesRef.current) {
      const { scrollLeft } = categoriesRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 240 : scrollLeft + 240;
      categoriesRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      {/* Background Slides */}
      {slides.map((s, i) => (
        <div key={i} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          <Image
            src={s.image}
            alt={s.badge}
            fill
            priority={i === 0}
            className={styles.slideImg}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Light Sky/Cloud-Like Soft Overlay */}
      <div className={styles.overlay} />

      {/* Dashed SVG Flight Path */}
      <svg className={styles.dashedPathSvg} viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
        <path
          d="M -50 300 C 300 100, 500 550, 850 200 C 1150 -50, 1300 450, 1500 350"
          stroke="rgba(26, 143, 227, 0.18)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Animating Paper Plane */}
      <div className={styles.paperPlane}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className={styles.planeIcon}>
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        <div className={styles.particle} style={{ '--delay': '0s', '--x': '10%', '--y': '20%', '--size': '4px' }} />
        <div className={styles.particle} style={{ '--delay': '2s', '--x': '20%', '--y': '60%', '--size': '6px' }} />
        <div className={styles.particle} style={{ '--delay': '4s', '--x': '80%', '--y': '30%', '--size': '3px' }} />
        <div className={styles.particle} style={{ '--delay': '1s', '--x': '70%', '--y': '70%', '--size': '5px' }} />
        <div className={styles.particle} style={{ '--delay': '3s', '--x': '50%', '--y': '40%', '--size': '4px' }} />
        <div className={styles.particle} style={{ '--delay': '5s', '--x': '30%', '--y': '80%', '--size': '6px' }} />
        <div className={styles.particle} style={{ '--delay': '2.5s', '--x': '90%', '--y': '50%', '--size': '3px' }} />
        <div className={styles.particle} style={{ '--delay': '4.5s', '--x': '40%', '--y': '10%', '--size': '5px' }} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={styles.badge}>
            <MapPin size={13} />
            {slide.badge}
          </span>
          <h1 className={styles.title} key={current}>
            {slide.title} <span className={styles.titleAccent}>{slide.titleAccent}</span>
          </h1>
          <p className={styles.subtitle} key={`sub-${current}`}>
            {slide.subtitle}
          </p>
        </div>

        {/* Floating Multi-Column Search Card */}
        <div className={styles.searchBar}>
          {/* Location Column */}
          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <MapPin size={20} />
            </div>
            <div className={styles.fieldText}>
              <label>Location</label>
              <select value={dest} onChange={(e) => setDest(e.target.value)}>
                <option value="">Choose destinations</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.divider} />

          {/* Date Column */}
          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <Calendar size={20} />
            </div>
            <div className={styles.fieldText}>
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                placeholder="Choose date"
              />
            </div>
          </div>
          <div className={styles.divider} />

          {/* Guests Column */}
          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <Users size={20} />
            </div>
            <div className={styles.fieldText}>
              <label>Amount of guests</label>
              <select value={people} onChange={(e) => setPeople(e.target.value)}>
                <option value="">Guests count</option>
                {['1 Person', '2 People', '3-5 People', '6-10 People', '10+ People'].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Actions Column */}
          <div className={styles.actionGroup}>
            <button className={styles.filterBtn} aria-label="Filters">
              <SlidersHorizontal size={18} />
            </button>
            <Link
              href={`/bookings?${new URLSearchParams({
                ...(dest && { destination: dest }),
                ...(date && { date: date }),
                ...(people && { guests: people })
              }).toString()}`}
              className={styles.searchBtn}
              aria-label="Search"
            >
              <Search size={20} />
            </Link>
          </div>
        </div>

        {/* Category quick-filter Slider Section */}
        <div className={styles.categoriesSliderWrapper}>
          <button className={`${styles.slideArrow} ${styles.arrowLeft}`} onClick={() => scroll('left')} aria-label="Previous categories">
            <ChevronLeft size={16} />
          </button>

          <div className={styles.categoriesList} ref={categoriesRef}>
            {categoriesList.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  className={`${styles.categoryItem} ${isActive ? styles.catActive : ''}`}
                  onClick={() => {
                    setActiveCategory(isActive ? '' : cat.name);
                  }}
                >
                  <IconComp size={18} className={styles.catIcon} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          <button className={`${styles.slideArrow} ${styles.arrowRight}`} onClick={() => scroll('right')} aria-label="Next categories">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Slide Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
