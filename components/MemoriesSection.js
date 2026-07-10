import React from 'react';
import styles from './MemoriesSection.module.css';
import useInView from '../hooks/useInView';

const memories = [
  {
    id: 1,
    image: '/images/shimlamanali.jpg',
    tag: '#ShimlaVibes',
    location: 'Shimla, Himachal',
    caption: 'Wanderlust in the hills',
    traveler: 'Anya & Sid',
    rotate: '-2.5deg',
  },
  {
    id: 2,
    image: '/images/kashmirnew.webp',
    tag: '#KashmirHeaven',
    location: 'Srinagar, Kashmir',
    caption: 'Heaven on Earth!',
    traveler: 'Rohan & Sonal',
    rotate: '3deg',
  },
  {
    id: 3,
    image: '/images/goa.webp',
    tag: '#SunsetGoa',
    location: 'Palolem Beach, Goa',
    caption: 'Salty hair, sandy toes',
    traveler: 'Kabir & Friends',
    rotate: '-1.5deg',
  },
  {
    id: 4,
    image: '/images/spiti.webp',
    tag: '#SpitiStars',
    location: 'Key Monastery, Spiti',
    caption: 'Chasing ancient stories',
    traveler: 'Dr. Rahul',
    rotate: '2deg',
  },
  {
    id: 5,
    image: '/images/rajsthan.webp',
    tag: '#DesertRoyalty',
    location: 'Jaisalmer Desert',
    caption: 'Royal golden dunes ride',
    traveler: 'The Mehtas',
    rotate: '-3deg',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    tag: '#TajReflections',
    location: 'Agra, Taj Mahal',
    caption: 'A timeless reflection',
    traveler: 'Emma & John',
    rotate: '1.5deg',
  },
];

export default function MemoriesSection() {
  const ref = useInView();

  return (
    <section ref={ref} className={`${styles.section} sectionWrapper`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="section-badge">📸 Traveler Memories</span>
            <h2 className="section-title" style={{ textAlign: 'left' , color : 'white' }}>Real Journeys, Real Stories</h2>
          </div>
          <p style={{ color : 'white' }} className={styles.subtext}>
            Every photo is a memory created with Samast Travel. Tag your adventures with <strong style={{ color : 'white' }}>#SamastMoments</strong> and inspire future explorers.
          </p>
        </div>

        {/* Polaroid Scrapbook Collage */}
        <div className={styles.collageGrid}>
          {memories.map((m) => (
            <div
              key={m.id}
              className={styles.polaroidCard}
              style={{ '--rotate': m.rotate }}
            >
              {/* Tape Effect */}
              <div className={styles.washiTape} />
              
              {/* Image Frame */}
              <div className={styles.imgFrame}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.image} alt={m.location} className={styles.img} />
              </div>

              {/* Polaroid Bottom Caption in Kalam font */}
              <div className={styles.captionArea}>
                <span className={styles.captionText}>"{m.caption}"</span>
                <div className={styles.meta}>
                  <span className={styles.location}>📍 {m.location}</span>
                  <span className={styles.traveler}>{m.traveler}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
