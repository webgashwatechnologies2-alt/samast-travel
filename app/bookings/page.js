'use client';

import { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, MapPin, Phone, Mail, CheckCircle, ArrowRight, Clock, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { getPackageBySlug } from '@/data/packagesData';
import styles from './bookings.module.css';

const packages = [
  { name: 'Spiti Valley Expedition', price: 24999, duration: '10D/9N', dest: 'Himachal', rating: 4.9, slug: 'spiti', image: '/images/spitiheroo.webp' },
  { name: 'Kashmir Paradise Tour', price: 18999, duration: '7D/6N', dest: 'Kashmir', rating: 4.8, slug: 'kashmir', image: '/images/kashmir.webp' },
  { name: 'Ladakh Road Trip', price: 32999, duration: '12D/11N', dest: 'Ladakh', rating: 4.9, slug: 'ladakh', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80' },
  { name: 'Himachal Full Circuit', price: 16999, duration: '8D/7N', dest: 'Himachal', rating: 4.8, slug: 'himachal', image: '/images/himachalimage.webp' },
  { name: 'Rajasthan Heritage', price: 21999, duration: '9D/8N', dest: 'Rajasthan', rating: 4.7, slug: 'rajasthan', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80' },
  { name: 'Kerala Backwaters', price: 17999, duration: '6D/5N', dest: 'Kerala', rating: 4.9, slug: 'kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
];

function BookingsContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', date: '', people: '1', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const pkgSlug = searchParams.get('package');
    if (pkgSlug) {
      const pkg = getPackageBySlug(pkgSlug);
      if (pkg) {
        setForm(f => ({ ...f, destination: pkg.name }));

        // Timeout to make sure render/mount is complete before scrolling
        const timer = setTimeout(() => {
          const formEl = document.getElementById('booking-form');
          if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <Navbar />
      <main>
        <div className="page-header">
          <h1>Book Your Tour</h1>
          <p>Handpicked packages crafted for every type of traveller</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Bookings</span>
          </nav>
        </div>

        {/* Packages Grid */}
        <section className={styles.packagesSection}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-badge">📦 Tour Packages</div>
              <h2 className="section-title">Choose Your <span>Perfect Package</span></h2>
            </div>
            <div className={styles.packagesGrid}>
              {packages.map((p) => (
                <div key={p.slug} className={styles.pkgCard}>
                  <div className={styles.pkgImg}>
                    <Image src={p.image} alt={p.name} fill sizes="(max-width:640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.pkgBadge}>{p.dest}</div>
                  </div>
                  <div className={styles.pkgContent}>
                    <div className={styles.pkgMeta}>
                      <span><Clock size={13} /> {p.duration}</span>
                      <span><Star size={13} fill="currentColor" color="#F59E0B" /> {p.rating}</span>
                    </div>
                    <h3 className={styles.pkgName}>{p.name}</h3>
                    <div className={styles.pkgFooter}>
                      <div>
                        <span className={styles.pkgPrice} style={{ fontSize: '15px' }}>Price on Request</span>
                      </div>
                      <button
                        className={styles.selectBtn}
                        onClick={() => {
                          setForm(f => ({ ...f, destination: p.name }));
                          const formEl = document.getElementById('booking-form');
                          if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Select <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className={styles.formSection} id="booking-form">
          <div className="container">
            <div className={styles.formGrid}>
              <div className={styles.formLeft}>
                <div className="section-badge">📝 Enquiry Form</div>
                <h2 className="section-title">Request a <span>Booking</span></h2>
                <p className="section-subtitle">Fill in your details and our travel expert will call you back within 2 hours to confirm your booking.</p>
                <div className={styles.guarantees}>
                  {['Best Price Guarantee', 'Free Cancellation (T&C apply)', 'Expert Travel Assistance', 'Instant Confirmation'].map(g => (
                    <div key={g} className={styles.guarantee}><CheckCircle size={16} color="var(--accent)" /> {g}</div>
                  ))}
                </div>
                <div className={styles.helpBox}>
                  <p className={styles.helpLabel}>Need help? Call us directly</p>
                  <a href="tel:+918679677152" className={styles.helpPhone}><Phone size={18} />  +91 86796 77152</a>
                </div>
              </div>

              <div className={styles.formRight}>
                {sent ? (
                  <div className={styles.success}>
                    <CheckCircle size={52} color="var(--accent)" />
                    <h3>Booking Request Received!</h3>
                    <p>Our travel expert will contact you within 2 hours to confirm your trip details.</p>
                    <button onClick={() => setSent(false)} className="btn btn-primary">Make Another Enquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.bForm}>
                    <div className={styles.bRow}>
                      <div className={styles.bField}>
                        <label htmlFor="bname">Full Name *</label>
                        <input id="bname" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className={styles.bField}>
                        <label htmlFor="bemail">Email Address (Optional)</label>
                        <input
                          id="bemail"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className={styles.bRow}>
                      <div className={styles.bField}>
                        <label htmlFor="bphone">Phone Number *</label>
                        <input id="bphone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                      </div>
                      <div className={styles.bField}>
                        <label htmlFor="bdest">Destination *</label>
                        <input id="bdest" name="destination" type="text" placeholder="e.g. Spiti Valley" value={form.destination} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className={styles.bRow}>
                      <div className={styles.bField}>
                        <label htmlFor="bdate">Travel Date *</label>
                        <input id="bdate" name="date" type="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
                      </div>
                      <div className={styles.bField}>
                        <label htmlFor="bpeople">Number of People *</label>
                        <select id="bpeople" name="people" value={form.people} onChange={handleChange}>
                          {['2', '3', '4', '5', '6-10', '10+'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className={styles.bField}>
                      <label htmlFor="bmessage">Special Requirements</label>
                      <textarea id="bmessage" name="message" rows={4} placeholder="Any special requests, dietary needs, or questions..." value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.bSubmit}`}>
                      Submit Booking Enquiry <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function BookingsPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--light)', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading booking details...</h2>
          <p>Please wait a moment.</p>
        </div>
      </div>
    }>
      <BookingsContent />
    </Suspense>
  );
}
