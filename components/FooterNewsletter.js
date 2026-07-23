'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Footer.module.css';

export default function FooterNewsletter() {
  const router = useRouter();
  const [email, setEmail]   = useState('');
  const [done, setDone]     = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
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
            _subject: "Samast Travel - Footer Newsletter Subscription",
            _captcha: "false"
          })
        });
        if (response.ok) {
          setDone(true);
          setEmail('');
          router.push('/thank-you/');
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

  if (done) {
    return (
      <p className={styles.newsSuccess}>
        ✅ Thank you! You&apos;re subscribed.
      </p>
    );
  }

  return (
    <form className={styles.newsForm} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        className={styles.newsInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className={styles.newsBtn} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Subscribe'}
      </button>
    </form>
  );
}
