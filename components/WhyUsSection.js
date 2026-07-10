import React from 'react';
import { Briefcase, Compass, ShieldCheck, HeartHandshake, ArrowUpRight } from 'lucide-react';
import styles from './WhyUsSection.module.css';

const features = [
  {
    icon: Briefcase,
    color: 'orange',
    title: 'Ultimate Flexibility',
    desc: 'Plans change. That’s why we offer free cancellation, flexible booking schedules, and easy payment plans.',
    highlight: 'Free cancellation options'
  },
  {
    icon: Compass,
    color: 'sky',
    title: 'Curated Experiences',
    desc: 'We design off-the-beaten-path tours led by native guides, guaranteeing experiences you won’t find elsewhere.',
    highlight: '100% local sherpa guides'
  },
  {
    icon: ShieldCheck,
    color: 'green',
    title: 'Uncompromising Quality',
    desc: 'Strict safety standards, handpicked boutique hotels, and highly-rated local transport for a seamless journey.',
    highlight: 'Vetted premium lodging'
  },
  {
    icon: HeartHandshake,
    color: 'purple',
    title: '24/7 Dedicated Support',
    desc: 'Never travel alone. Our support team is available live via chat, call, or email throughout your entire trip.',
    highlight: 'Live chat & phone support'
  },
];

export default function WhyUsSection() {
  return (
    <section className={styles.section}>
      {/* Background decorations */}
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className="container">
        <div className={styles.layout}>
          
          {/* Left Column: Heading, intro copy, CTA */}
          <div className={styles.leftCol}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Our Core Values</span>
            </div>
            
            <h2 className={styles.heading}>
              Why Travellers Choose <br />
              <span className={styles.highlightText}>Samast Travel</span>
            </h2>
            
            <p className={styles.subtext}>
              We believe travel should be inspiring, seamless, and safe. Here’s how we make sure every journey you take is memorable and worry-free.
            </p>

            <a href="/about" className={styles.ctaLink}>
              <span>Read our complete safety standards</span>
              <ArrowUpRight size={16} className={styles.ctaIcon} />
            </a>
          </div>

          {/* Right Column: 2x2 Grid of values */}
          <div className={styles.grid}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={styles.card}>
                  <div className={`${styles.iconContainer} ${styles[f.color + 'Icon']}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.footerHighlight}>{f.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
