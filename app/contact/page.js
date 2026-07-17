'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Navigation } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: ' +91 86796 77152', href: 'tel:+918679677152' },
    { icon: Mail, label: 'Email Us', value: 'info@samasttravel.com', href: 'mailto:info@samasttravel.com' },
    { icon: MapPin, label: 'Visit Us', value: 'Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 9 AM – 7 PM', href: null },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you and plan your next adventure</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Contact Us</span>
          </nav>
        </div>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>

              {/* Left - Info */}
              <div className={styles.infoCol}>
                <div className="section-badge">📞 Get In Touch</div>
                <h2 className="section-title">Let's Plan Your <span>Dream Trip</span></h2>
                <p className="section-subtitle">
                  Have a question or want to book a custom tour? Reach out to our travel experts and we'll get back to you within 24 hours.
                </p>

                <div className={styles.infoList}>
                  {contactInfo.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className={styles.infoItem}>
                        <div className={styles.infoIcon}><Icon size={20} /></div>
                        <div>
                          <p className={styles.infoLabel}>{c.label}</p>
                          {c.href ? (
                            <a href={c.href} className={styles.infoValue}>{c.value}</a>
                          ) : (
                            <p className={styles.infoValue}>{c.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Embed Placeholder */}
                <div className={styles.mapBox}>
                  <iframe
                    src="https://maps.google.com/maps?q=Krishna%20Niwas%20Near%20SVM%20School%20Vikasnagar%20Shimla%20171009&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="220"
                    style={{
                      border: 0,
                      borderRadius: 'var(--radius)',
                      display: 'block',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samast Travel Location"
                  />
                </div>
              </div>

              {/* Right - Form */}
              <div className={styles.formCol}>
                {sent ? (
                  <div className={styles.successBox}>
                    <CheckCircle size={56} color="var(--accent)" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="btn btn-primary">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formHeader}>
                      <MessageSquare size={22} color="var(--accent)" />
                      <h3>Send Us a Message</h3>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="email">Email Address (Optional)</label>
                        <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange}  />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="phone">Phone Number (Compulsory)</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange}  required/>
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="subject">Subject *</label>
                        <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                          <option value="">Select a subject</option>
                          <option>Tour Enquiry</option>
                          <option>Custom Tour</option>
                          <option>Booking Support</option>
                          <option>Cancellation / Refund</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="message">Your Message (Optional)</label>
                      <textarea id="message" name="message" rows={5} placeholder="Tell us about your travel plans, preferred dates, budget, and anything else..." value={form.message} onChange={handleChange}  />
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                      <Send size={16} /> Send Message
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
