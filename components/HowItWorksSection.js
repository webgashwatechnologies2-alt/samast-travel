'use client';

import React from 'react';
import { Search, Sliders, CalendarRange, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './HowItWorksSection.module.css';
import useInView from '../hooks/useInView';

const steps = [
  {
    num: '01',
    label: 'Explore',
    title: 'Find Your Inspiration',
    desc: 'Browse hundreds of handpicked destinations — from Himalayan treks to tropical beach escapes — curated by our expert travel team.',
    icon: Search,
    perks: ['Curated destination guides', 'Real traveller reviews', 'Seasonal trip suggestions'],
    color: 'sky',
    gradient: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
    iconColor: '#0096C7',
  },
  {
    num: '02',
    label: 'Personalise',
    title: 'Tailor It to Perfection',
    desc: 'Work one-on-one with our destination experts to customise every detail — stays, routes, activities, and dining — exactly how you want it.',
    icon: Sliders,
    perks: ['Flexible itinerary builder', 'Expert local guidance', 'Budget-friendly options'],
    color: 'accent',
    gradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
    iconColor: '#D99500',
  },
  {
    num: '03',
    label: 'Travel',
    title: 'Book & Set Off',
    desc: 'Confirm your trip with secure payment, receive your complete travel kit, and set off knowing every detail is handled seamlessly.',
    icon: CalendarRange,
    perks: ['100% secure payments', 'Instant confirmations', '24/7 on-trip support'],
    color: 'green',
    gradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    iconColor: '#2E7D32',
  },
];

export default function HowItWorksSection() {
  const ref = useInView();

  return (
    <section ref={ref} className={`${styles.section} sectionWrapper`}>
      {/* Background decoration */}
      <div className={styles.bgDeco} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-badge">How It Works</span>
          <h2 className={styles.title}>
            Your Dream Trip in{' '}
            <span className={styles.highlight}>3 Simple Steps</span>
          </h2>
          <p className={styles.subtitle}>
            Planning a trip shouldn't be stressful. We handle every detail so you can focus on creating lifelong memories.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.grid}>
          {/* Connector line (desktop) */}
          <div className={styles.connector} aria-hidden="true">
            <div className={styles.connectorLine} />
            <div className={styles.connectorDot} style={{ left: '16.5%' }} />
            <div className={styles.connectorDot} style={{ left: '49.5%' }} />
            <div className={styles.connectorDot} style={{ left: '82.5%' }} />
          </div>

          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className={styles.card}>
                {/* Top accent bar */}
                <div className={`${styles.cardAccent} ${styles[s.color + 'Accent']}`} />

                {/* Step number pill */}
                <div className={`${styles.stepPill} ${styles[s.color + 'Pill']}`}>
                  <span className={styles.stepPillLabel}>{s.label}</span>
                  <span className={styles.stepPillNum}>{s.num}</span>
                </div>

                {/* Icon block */}
                <div className={styles.iconBlock} style={{ background: s.gradient }}>
                  <Icon size={30} color={s.iconColor} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>

                  {/* Perks list */}
                  <ul className={styles.perks}>
                    {s.perks.map((perk, pi) => (
                      <li key={pi} className={styles.perkItem}>
                        <CheckCircle2 size={15} className={`${styles.perkIcon} ${styles[s.color + 'Icon']}`} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Faint watermark number */}
                <span className={styles.watermark} aria-hidden="true">{s.num}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to start your journey?</p>
          <a href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            Plan My Trip <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
