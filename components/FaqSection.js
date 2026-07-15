'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    q: 'How do I book a custom tour with Samast Travel?',
    a: 'Simply fill out our Trip Planner form above or call us directly. Our travel experts will get in touch within 24 hours to craft a personalised itinerary based on your preferences, dates, and budget.',
  },
  {
    q: 'Are your tour packages inclusive of accommodation and meals?',
    a: 'Yes! Most of our packages are fully inclusive — covering accommodation (hotel/camp/homestay), meals as specified, transport, permits, and a dedicated guide. Exact inclusions are listed on each package page.',
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'If you need to cancel a confirmed booking, you must notify us in writing at info@samasttravel.com. Refund amount depends on how early you cancel: 45+ days before travel gets a 90% refund, 44–30 days gets 75%, 29–15 days gets 50%, and less than 15 days or a no-show means the full tour cost is charged with no refund. Certain bookings like flights, special permits, or peak-season hotels may be non-refundable regardless of timing. Refunds are processed within 7–10 working days via the original payment method. In case of unavoidable circumstances (natural disasters, government restrictions, etc.), we offer alternative travel dates or a credit note instead of a refund. No refund is given for early departure or unused services after the trip has started.',
  },
  {
    q: 'What is the best time to visit Spiti Valley or Ladakh?',
    a: 'Spiti Valley is best visited between May–October when the roads are open. Ladakh is accessible year-round, but the best weather is from June–September. For winter snow experiences, December–February is magical.',
  },
  {
    q: 'Do you handle international tour packages as well?',
    a: 'Yes! Our International packages cover destinations across Southeast Asia, Europe, Central Asia, and more. We handle visa guidance, flights, accommodation, and guided local experiences end-to-end.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left sticky heading */}
          <div className={styles.left}>
            <span className={styles.eyebrow}>❓ FAQs</span>
            <h2 className={styles.heading}>
              Questions We<br />
              <em>Get Asked Often</em>
            </h2>
            <p className={styles.subtext}>
              Can't find your answer here? Our team is just a call or message away — always happy to help.
            </p>
            <a href="/contact" className={styles.contactLink}>
              Talk to an Expert →
            </a>
          </div>

          {/* Right: Accordion */}
          <div className={styles.accordion}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                  <button
                    className={styles.question}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  <div className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}>
                    <p className={styles.answer}>{faq.a}</p>
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
