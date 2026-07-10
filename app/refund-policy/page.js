import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Refund & Cancellation Policy | Samast Travel',
  description: 'Refund and cancellation policy details for tour bookings with Samast Travel.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="page-header">
          <h1>Refund & Cancellation Policy</h1>
          <p>Clear guidance on booking cancellations, rescheduling, and refunds</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Refund Policy</span>
          </nav>
        </div>

        {/* Legal Content */}
        <section className={styles.legalContainer}>
          <div className="container">
            <div className={styles.legalGrid}>
              <div className={styles.lastUpdated}>
                Last Updated: June 5, 2026
              </div>
              <div className={styles.legalContent}>
                <p>
                  At Samast Travel, we understand that plans can change. Our cancellation policy is designed to be fair while covering necessary arrangements.
                </p>

                <h2>1. Cancellation by Customer</h2>
                <p>
                  If you need to cancel a confirmed booking, you must notify us in writing via email at info@samasttravel.com. The date we receive your email will determine the cancellation charges applicable:
                </p>
                <ul>
                  <li><strong>45 days or more before travel: 90% refund of the received amount.</strong> </li>
                  <li><strong>44–30 days before travel: 75% refund of the received amount.</strong> </li>
                  <li><strong>29–15 days before travel: 50% refund of the received amount.</strong></li>
                  <li><strong>Less than 15 days or No-Show: 100% of the total tour cost will be charged (no refund).</strong></li>
                </ul>

                <h2>2. Cancellation by Samast Travel</h2>
                <p>
                  In case of unavoidable circumstances (natural disasters, government restrictions, etc.), customers will be offered:
                </p>
                <ul>
                  <li>Alternative travel dates, OR</li>
                  <li>Credit note for future use</li>
                </ul>

                <h2>3.  Refund Process</h2>
                <ul>
                  <li>Refunds will be processed within 7–10 working days.</li>
                  <li>Refunds will be made through the original payment method.</li>
                </ul>

                <h2>4.  Non-Refundable Services</h2>
                <ul>
                  <li>Certain bookings such as flights, special permits, or peak-season hotel bookings may be non-refundable.</li>
                </ul>

                <h2>5. No Show Policy</h2>
                <p>
                  No refund will be provided for no-shows or unused services after the trip has started.
                </p>

                <h2>6. Early Departure</h2>
                <p>
                  No refund will be given if a traveler leaves the trip before completion.
                </p>
                <h2>7. Amendment Policy</h2>
                <p>
                  Any changes to bookings are subject to availability and may incur additional charges.
                </p>
                <h2>For any cancellation or refund queries, please contact us:</h2>
                <h2>Samast Travel</h2>
                <ul>
                  <li>Email: info@samasttravel.com</li>
                  <li>Phone: +91 86796 77152</li>
                </ul>
                <p>
                  We recommend reading the policy carefully before confirming your booking to avoid any inconvenience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
