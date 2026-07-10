'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

export default function FooterNewsletter() {
  const [email, setEmail]   = useState('');
  const [done, setDone]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setDone(true); setEmail(''); }
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
      <button type="submit" className={styles.newsBtn}>
        Subscribe
      </button>
    </form>
  );
}
