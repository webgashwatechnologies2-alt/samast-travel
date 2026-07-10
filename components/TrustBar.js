'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Users, MapPin, Star, Clock, Shield, Award, ArrowRight } from 'lucide-react';
import styles from './TrustBar.module.css';

/* ── Animated counter hook ─────────────────────────── */
function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ── Stats data ────────────────────────────────────── */
const stats = [
  {
    icon: Users,
    value: 250,
    suffix: '+',
    label: 'Trips & Tours',
    sub: 'Smiles delivered across the globe',
    gradient: 'linear-gradient(135deg, #00B4D8, #0077B6)',
    glow: 'rgba(0, 180, 216, 0.4)',
    ring: 'rgba(0, 180, 216, 0.2)',
  },
  {
    icon: MapPin,
    value: 100,
    suffix: '+',
    label: 'Destinations',
    sub: 'From Himalayas to ocean shores',
    gradient: 'linear-gradient(135deg, #FEB210, #FF8C00)',
    glow: 'rgba(254, 178, 16, 0.4)',
    ring: 'rgba(254, 178, 16, 0.2)',
  },
  {
    icon: Clock,
    value: 200,
    suffix: '+',
    label: 'Tour Packages',
    sub: 'Curated itineraries for every dream',
    gradient: 'linear-gradient(135deg, #43A047, #2E7D32)',
    glow: 'rgba(46, 125, 50, 0.4)',
    ring: 'rgba(46, 125, 50, 0.2)',
  },
  {
    icon: Star,
    value: 1000,
    suffix: '+',
    label: 'Happy Nomads',
    sub: 'Smiles & stories shared worldwide',
    gradient: 'linear-gradient(135deg, #F06292, #E91E63)',
    glow: 'rgba(233, 30, 99, 0.4)',
    ring: 'rgba(233, 30, 99, 0.2)',
  },
];

/* ── Partner logos ────────────────────────────────────── */
const partners = [
  { name: 'Tripadvisor',      accent: '#00AA6C' },
  { name: 'Lonely Planet',    accent: '#1A1A2E' },
  { name: 'Incredible India', accent: '#FF6B35' },
  { name: 'Nat Geographic',   accent: '#FFCC00' },
  { name: 'Booking.com',      accent: '#003580' },
  { name: 'Google Travel',    accent: '#4285F4' },
];

/* ── Stat Card ─────────────────────────────────────── */
function StatCard({ stat, started, index }) {
  const raw = useCounter(stat.value, 2000, started);
  const display = `${raw.toLocaleString()}${stat.suffix}`;
  const Icon = stat.icon;
  return (
    <div className={styles.statCard} style={{ '--delay': `${index * 0.15}s` }}>
      {/* Animated ring behind icon */}
      <div className={styles.iconRing} style={{ '--ring-color': stat.ring, '--glow': stat.glow }}>
        <div className={styles.iconCircle} style={{ background: stat.gradient, boxShadow: `0 8px 25px ${stat.glow}` }}>
          <Icon size={22} strokeWidth={2} color="#fff" />
        </div>
      </div>

      <div className={styles.statContent}>
        <div className={styles.statNumber} style={{ '--num-gradient': stat.gradient }}>
          {display}
        </div>
        <div className={styles.statLabel}>{stat.label}</div>
        <div className={styles.statSub}>{stat.sub}</div>
      </div>

      {/* Hover glow effect */}
      <div className={styles.cardGlow} style={{ background: stat.glow }} />
    </div>
  );
}

/* ── Main Component ─────────────────────────────────── */
export default function TrustBar() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* ── Background Elements ── */}
      <div className={styles.bgElements} aria-hidden="true">
        <div className={styles.gridPattern} />
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
        <div className={styles.glowOrb3} />
        <div className={styles.bottomGradient} />
      </div>

      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.badgePill}>
            <Shield size={13} />
            <span>Trusted by Thousands</span>
          </div>
          <h2 className={styles.title}>
            Why Travellers Choose <span>Samast Travel</span>
          </h2>
          <p className={styles.subtitle}>
            Numbers that speak louder than words — our commitment to crafting unforgettable journeys.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} started={started} index={i} />
          ))}
        </div>

        {/* ── Partners Strip ── */}
        <div className={styles.partnersSection}>
          <div className={styles.partnersDivider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerBadge}>
              <Award size={12} />
              Featured & Recognised By
            </span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...partners, ...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className={styles.partnerChip}
                  style={{ '--chip-accent': p.accent }}
                >
                  <span className={styles.partnerDot} />
                  <span className={styles.partnerName}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
