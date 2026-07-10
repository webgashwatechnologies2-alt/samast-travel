'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award, Heart, Users, Globe, CheckCircle, ArrowRight,
  ExternalLink, Share2, Mail, MapPin, Star, Clock, Shield,
  Compass, Camera, Mountain
} from 'lucide-react';
import styles from './about.module.css';

/* ── Static Data ───────────────────────────────────────── */
const stats = [
  { icon: Users,   value: '10,000+', label: 'Trips Ans Tours' },
  { icon: MapPin,  value: '150+',    label: 'Destinations' },
  { icon: Star,    value: '4.9',     label: 'Average Rating' },
  { icon: Clock,   value: '10+',     label: 'Years of Excellence' },
];

const team = [
  { name: 'Arjun Mehta',   role: 'Founder & CEO',          specialty: 'Himalayan Treks',        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', linkedin: '#', twitter: '#' },
  { name: 'Sneha Kapoor',  role: 'Head of Operations',      specialty: 'Logistics & Planning',   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', linkedin: '#', twitter: '#' },
  { name: 'Rohan Bhatia',  role: 'Lead Tour Designer',      specialty: 'Cultural Experiences',   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', linkedin: '#', twitter: '#' },
  { name: 'Priya Nair',    role: 'Customer Success Head',   specialty: 'Guest Relationships',    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', linkedin: '#', twitter: '#' },
];

const values = [
  { icon: Heart,    title: 'Passion for Travel',   desc: 'We are travellers first. Our hands-on wanderlust drives every curated itinerary we design for you.',       color: 'orange',  bg: '#FFF3E0' },
  { icon: Award,    title: 'Quality & Excellence', desc: 'Zero compromises on safety or comfort. We handpick boutique stays and thoroughly vet every partner.',        color: 'sky',     bg: '#E0F7FA' },
  { icon: Users,    title: 'Customer First',        desc: 'Your satisfaction is our success. 24/7 on-trip support ensures every moment of your journey is flawless.', color: 'green',   bg: '#E8F5E9' },
  { icon: Globe,    title: 'Sustainable Tourism',   desc: 'We support local communities, use native sherpas, and practice eco-friendly travel to protect nature.',      color: 'purple',  bg: '#F3E5F5' },
  { icon: Shield,   title: 'Safe & Secure',         desc: 'Fully licensed, insured, and backed by global safety protocols so you can travel with total peace of mind.', color: 'teal',    bg: '#E0F2F1' },
  { icon: Compass,  title: 'Expert Navigation',     desc: 'From remote valleys to bustling cities, our certified guides know every route, hidden gem, and local secret.', color: 'gold', bg: '#FFFDE7' },
];

const milestones = [
  { year: '2015', title: 'Founded in Shimla', desc: 'Samast Travel was born from a passion for Himalayan adventures.' },
  { year: '2017', title: '1,000 Travellers', desc: 'Reached our first milestone with groups across North India.' },
  { year: '2019', title: 'Pan-India Expansion', desc: 'Extended our tours to 50+ destinations across all of India.' },
  { year: '2022', title: 'International Tours', desc: 'Launched guided tours to Nepal, Bhutan, Sri Lanka & Southeast Asia.' },
  { year: '2024', title: '10,000 Happy Guests', desc: 'Crossed 10,000 happy travellers with a 4.9-star average rating.' },
];

/* ── Page Component ────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutMain}>

        {/* ── Hero Banner ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroPill}>
                <Compass size={14} />
                <span>Our Story</span>
              </div>
              <h1 className={styles.heroTitle}>
                Crafting Journeys,<br />
                <span className={styles.heroAccent}>Creating Memories</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Since 2015, Samast Travel has been India&apos;s most trusted travel companion —
                turning every trip into a story worth telling.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/destinations" className={styles.btnPrimary}>
                  <span>Explore Tours</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className={styles.btnOutline}>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative scroll indicator */}
          <div className={styles.scrollHint}>
            <span />
          </div>
        </section>

        {/* ── Stats Ribbon ── */}
        <section className={styles.statsRibbon}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className={styles.statItem}>
                    <div className={styles.statIcon}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <div className={styles.statValue}>{s.value}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className={styles.story}>
          <div className={styles.storyBgBlob} />
          <div className="container">
            <div className={styles.storyGrid}>

              {/* Image Collage */}
              <div className={styles.storyImgs}>
                <div className={styles.img1}>
                  <Image
                    src="/images/himachalimage.webp"
                    alt="Scenic Himachal trek"
                    fill
                    sizes="(max-width:768px) 100vw, 45vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imgOverlay} />
                </div>
                <div className={styles.img2}>
                  <Image
                    src="/images/kashmir.webp"
                    alt="Travel group in Kashmir"
                    fill
                    sizes="(max-width:768px) 100vw, 30vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.storyFloatBadge}>
                  <Camera size={18} className={styles.badgeCamIcon} />
                  <div>
                    <strong>10+</strong>
                    <span>Years of<br />Excellence</span>
                  </div>
                </div>
                <div className={styles.storyFloatCard}>
                  <Star size={14} fill="#FEB210" stroke="none" />
                  <span><b>4.9</b> / 5 from 2,400+ reviews</span>
                </div>
              </div>

              {/* Story Content */}
              <div className={styles.storyText}>
                <div className={styles.sectionPill}>
                  <span className={styles.pillDot} />
                  Our Story
                </div>
                <h2 className={styles.sectionTitle}>
                  Born from a Love of<br />
                  <span className={styles.titleHighlight}>Exploration</span>
                </h2>
                <p className={styles.bodyText}>
                  Samast Travel was founded in 2015 by a group of passionate travellers who believed every journey should be more than just a trip — it should be a transformative experience that stays with you forever.
                </p>
                <p className={styles.bodyTextMuted}>
                  Starting with small groups exploring the Himalayas, we&apos;ve grown into one of India&apos;s most trusted travel companies, with over 10,000 satisfied travellers and 500+ curated packages covering every corner of India and beyond.
                </p>

                <ul className={styles.checkList}>
                  {[
                    'Licensed & Certified Travel Agency',
                    'Expert Local Guides at Every Destination',
                    'Transparent Pricing — No Hidden Costs',
                    'Customised Tours for Every Budget',
                  ].map(item => (
                    <li key={item} className={styles.checkItem}>
                      <div className={styles.checkIcon}>
                        <CheckCircle size={16} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.btnPrimary}>
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline / Milestones ── */}
        <section className={styles.timeline}>
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionPill}>
                <span className={styles.pillDot} />
                Our Journey
              </div>
              <h2 className={styles.sectionTitleCenter}>
                A Decade of <span className={styles.titleHighlight}>Milestones</span>
              </h2>
            </div>

            <div className={styles.timelineTrack}>
              <div className={styles.timelineLine} />
              {milestones.map((m, i) => (
                <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineYear}>{m.year}</div>
                    <h3 className={styles.timelineTitle}>{m.title}</h3>
                    <p className={styles.timelineDesc}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className={styles.values}>
          <div className={styles.valuesBgDeco} />
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionPill}>
                <span className={styles.pillDot} />
                Our Values
              </div>
              <h2 className={styles.sectionTitleCenter}>
                What Drives <span className={styles.titleHighlight}>Us Forward</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide every journey we craft — from the first consultation to your safe return home.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className={`${styles.valueCard} ${styles['valueCard_' + v.color]}`}>
                    <div className={styles.valueIconWrapper} style={{ background: v.bg }}>
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* ── CTA Banner ── */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaBannerBg} />
          <div className="container">
            <div className={styles.ctaBannerContent}>
              <div className={styles.sectionPillLight}>
                <span className={styles.pillDotLight} />
                Ready to Travel?
              </div>
              <h2 className={styles.ctaTitle}>
                Let&apos;s Plan Your<br />
                <span className={styles.ctaTitleAccent}>Dream Trip Together</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Get a free personalised itinerary crafted by our experts — tailored to your interests, budget and travel dates.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  <span>Plan My Trip</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/destinations" className={styles.ctaBtnGhost}>
                  <span>Browse Destinations</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
