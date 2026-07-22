'use client';

import { useState } from 'react';
import { Send, CheckCircle, Check } from 'lucide-react';
import Image from 'next/image';
import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && agree) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/info@samasttravel.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            Email: email,
            _subject: "Samast Travel - Section Newsletter Subscription",
            _captcha: "false"
          })
        });
        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Error subscribing. Please check your internet connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.newsletterCard}>
          
          {/* Left Side: Form Content */}
          <div className={styles.contentLeft}>
            <span className={styles.eyebrow}>Sign up to our newsletter</span>
            <h2 className={styles.title}>
              Get Your Free Samast Travel Newsletter
            </h2>
            <p className={styles.subtitle}>
              Get your free travel newsletter full of travel ideas, destinations and adventures. Discover new places to explore, new adventures and new experiences.
            </p>

            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className={styles.successTitle}>You're on the list!</h3>
                  <p className={styles.successDesc}>
                    Thank you for subscribing. Get ready for awesome travel stories &amp; secret deals.
                  </p>
                </div>
                <button 
                  className={styles.resetBtn} 
                  onClick={() => setSubmitted(false)}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Unified Input Bar */}
                <div className={styles.inputBar}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={styles.inputField}
                    required
                  />
                  <button type="submit" className={styles.subscribeBtn} disabled={!agree || isSubmitting}>
                    <span>{isSubmitting ? 'Submitting...' : 'Subscribe'}</span>
                    <Send size={15} className={styles.sendIcon} />
                  </button>
                </div>

                {/* Agreement Checkbox */}
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className={styles.hiddenCheckbox}
                  />
                  <span className={`${styles.customCheckbox} ${agree ? styles.checked : ''}`}>
                    {agree && <Check size={10} strokeWidth={3} />}
                  </span>
                  <span className={styles.checkboxLabel}>
                    I'm agreeing to Terms of Use and Privacy Policy
                  </span>
                </label>
              </form>
            )}
          </div>

          {/* Right Side: Traveler Image Card */}
          <div className={styles.imageRight}>
            <Image
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80"
              alt="Traveler with backpack holding map"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.travelerImg}
              priority
            />
            <div className={styles.imageOverlay} />
          </div>

        </div>
      </div>
    </section>
  );
}
