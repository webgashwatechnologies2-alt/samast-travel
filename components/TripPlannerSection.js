'use client';

import { useState } from 'react';
import { Mountain, Heart, Users, User, Palmtree, Send, MapPin, Sparkles, Check, Phone, User2 } from 'lucide-react';
import styles from './TripPlannerSection.module.css';

const travelStyles = [
  { id: 'adventure', icon: Mountain, label: 'Adventure', desc: 'Trek, bike & conquer' },
  { id: 'romance', icon: Heart, label: 'Romance', desc: 'Intimate escapes' },
  { id: 'family', icon: Users, label: 'Family', desc: 'Fun for all ages' },
  { id: 'leisure', icon: Palmtree, label: 'Leisure', desc: 'Relax & rejuvenate' },
];

const durations = ['3–5 Days', '6–8 Days', '9–12 Days', '13–18 Days', '18+ Days'];
const budgets = ['₹10K–20K', '₹20K–35K', '₹35K–55K', '₹55K+'];

export default function TripPlannerSection() {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!selectedStyle) newErrors.style = 'Please select a travel style';
    if (!selectedDuration) newErrors.duration = 'Please select duration';
    if (!selectedBudget) newErrors.budget = 'Please select your budget';
    if (!name) newErrors.name = 'Please provide your name';
    if (!phone) newErrors.phone = 'Please provide your phone';

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className={styles.section}>
      {/* Dynamic Background Elements */}
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />
      <div className={styles.gridOverlay} />

      <div className="container">
        <div className={styles.layout}>
          {/* Left Side: Content & Brand Perks */}
          <div className={styles.copy}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.sparkleIcon} />
              <span>Tailor-made itineraries</span>
            </div>
            
            <h2 className={styles.heading}>
              Craft Your Perfect <br />
              <span className={styles.gradientText}>Dream Vacation</span>
            </h2>
            
            <p className={styles.subtext}>
              Don't settle for pre-packaged travel. Share your preferences with us and receive a bespoke, 100% custom itinerary designed by our local experts.
            </p>

            <div className={styles.divider} />

            <div className={styles.perksList}>
              {[
                { title: '100% Customised Itinerary', desc: 'Fully tailored around your pace, preferences, and interests.' },
                { title: 'Response in 24 Hours', desc: 'No long waits. Get a draft custom itinerary by tomorrow.' },
                { title: 'Local Expert Curation', desc: 'Handpicked routes, hidden gems, and fully vetted stays.' },
              ].map((perk, i) => (
                <div key={i} className={styles.perkCard}>
                  <div className={styles.perkCheck}>
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className={styles.perkTitle}>{perk.title}</h4>
                    <p className={styles.perkDesc}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Planner Card */}
          <div className={styles.card}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successWrapper}>
                  <div className={styles.successGlow} />
                  <div className={styles.successTick}>👍</div>
                </div>
                <h3 className={styles.successTitle}>Request Submitted!</h3>
                <p className={styles.successDesc}>
                  Thanks <strong>{name}</strong>! We've received your trip preferences and our local expert is already crafting your itinerary. We will contact you at <strong>{phone}</strong> shortly.
                </p>
                <button 
                  className={styles.resetBtn} 
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedStyle('');
                    setSelectedDuration('');
                    setSelectedBudget('');
                    setName('');
                    setPhone('');
                  }}
                >
                  Plan Another Trip
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                
                {/* 1. Travel Style Section */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionNum}>01</span>
                    <span className={styles.formLabel}>Choose your travel style</span>
                  </div>
                  <div className={styles.styleGrid}>
                    {travelStyles.map((s) => {
                      const Icon = s.icon;
                      const isSelected = selectedStyle === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          className={`${styles.styleCard} ${isSelected ? styles.styleActive : ''}`}
                          onClick={() => {
                            setSelectedStyle(s.id);
                            if (errors.style) setErrors(prev => ({ ...prev, style: null }));
                          }}
                        >
                          <div className={`${styles.iconBg} ${isSelected ? styles.iconBgActive : ''}`}>
                            <Icon size={20} />
                          </div>
                          <span className={styles.styleLabel}>{s.label}</span>
                          <span className={styles.styleDesc}>{s.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.style && <span className={styles.fieldError}>{errors.style}</span>}
                </div>

                {/* 2 & 3. Duration & Budget Section */}
                <div className={styles.formRow}>
                  {/* Duration */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNum}>02</span>
                      <span className={styles.formLabel}>Trip Duration</span>
                    </div>
                    <div className={styles.pillGroup}>
                      {durations.map((d) => (
                        <button
                          key={d}
                          type="button"
                          className={`${styles.pill} ${selectedDuration === d ? styles.pillActive : ''}`}
                          onClick={() => {
                            setSelectedDuration(d);
                            if (errors.duration) setErrors(prev => ({ ...prev, duration: null }));
                          }}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    {errors.duration && <span className={styles.fieldError}>{errors.duration}</span>}
                  </div>

                  {/* Budget */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNum}>03</span>
                      <span className={styles.formLabel}>Budget / Person</span>
                    </div>
                    <div className={styles.pillGroup}>
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`${styles.pill} ${selectedBudget === b ? styles.pillActive : ''}`}
                          onClick={() => {
                            setSelectedBudget(b);
                            if (errors.budget) setErrors(prev => ({ ...prev, budget: null }));
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    {errors.budget && <span className={styles.fieldError}>{errors.budget}</span>}
                  </div>
                </div>

                {/* 4. Details Input Section */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionNum}>04</span>
                    <span className={styles.formLabel}>Your contact details</span>
                  </div>
                  <div className={styles.inputs}>
                    {/* Name Input */}
                    <div className={styles.inputWrapper}>
                      <User2 className={styles.inputIcon} size={18} />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                        }}
                        className={styles.input}
                      />
                    </div>
                    
                    {/* Phone Input */}
                    <div className={styles.inputWrapper}>
                      <Phone className={styles.inputIcon} size={18} />
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: null }));
                        }}
                        className={styles.input}
                      />
                    </div>
                  </div>
                  {(errors.name || errors.phone) && (
                    <span className={styles.fieldError}>
                      {errors.name || errors.phone}
                    </span>
                  )}
                </div>

                {/* Submit Trigger */}
                <button type="submit" className={styles.submitBtn}>
                  <span>Get My Custom Plan</span>
                  <Send size={16} className={styles.btnIcon} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
