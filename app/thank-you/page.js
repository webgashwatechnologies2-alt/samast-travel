import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Phone, Mail, MessageSquare, Home, Compass, Clock, ArrowRight } from 'lucide-react';
import styles from './thank-you.module.css';

export const metadata = {
  title: 'Thank You | Samast Travel',
  description: 'Thank you for reaching out to Samast Travel. Our travel experts will get in touch with you shortly.',
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBgOverlay} />
          <div className={styles.container}>
            <div className={styles.iconWrapper}>
              <CheckCircle size={48} strokeWidth={2.5} />
            </div>
            
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.subtitle}>
              Your request has been successfully submitted. Our travel specialists are already reviewing your details and will get in touch with you shortly to assist with your dream journey.
            </p>
            
            <div className={styles.badge}>
              <Clock size={16} />
              <span>Average response time: Within 15–30 minutes</span>
            </div>
          </div>
        </section>

        {/* Content & Contact Grid Section */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.cardsGrid}>
              {/* Phone Card */}
              <div className={styles.contactCard}>
                <div className={`${styles.cardIcon} ${styles.phoneIcon}`}>
                  <Phone size={26} />
                </div>
                <h3 className={styles.cardTitle}>Call Us Directly</h3>
                <p className={styles.cardText}>
                  Need instant support or want to discuss details over the phone? Talk with our travel guide right now.
                </p>
                <a href="tel:+918679677152" className={`${styles.cardAction} ${styles.phoneAction}`}>
                  <Phone size={16} />
                  <span>+91 86796 77152</span>
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className={styles.contactCard}>
                <div className={`${styles.cardIcon} ${styles.whatsappIcon}`}>
                  <MessageSquare size={26} />
                </div>
                <h3 className={styles.cardTitle}>WhatsApp Support</h3>
                <p className={styles.cardText}>
                  Prefer messaging? Chat directly with our travel advisory team on WhatsApp for quick itineraries and quotes.
                </p>
                <a 
                  href="https://wa.me/918679677152?text=Hi%21%20I%20just%20submitted%20a%20request%20on%20Samast%20Travel.%20Can%20you%20help%20me%20with%20details%3F" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.cardAction} ${styles.whatsappAction}`}
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Email Card */}
              <div className={styles.contactCard}>
                <div className={`${styles.cardIcon} ${styles.emailIcon}`}>
                  <Mail size={26} />
                </div>
                <h3 className={styles.cardTitle}>Email Us</h3>
                <p className={styles.cardText}>
                  Send us custom requirements, questions, or itinerary documents directly to our official inbox.
                </p>
                <a href="mailto:info@samasttravel.com" className={`${styles.cardAction} ${styles.emailAction}`}>
                  <Mail size={16} />
                  <span>info@samasttravel.com</span>
                </a>
              </div>
            </div>

            {/* Back to Home & Explore Navigation Banner */}
            <div className={styles.actionBanner}>
              <div className={styles.bannerText}>
                <h3>What would you like to do next?</h3>
                <p>Explore our curated holiday packages or head back to the main homepage.</p>
              </div>
              
              <div className={styles.buttonGroup}>
                <Link href="/" className={styles.homeButton}>
                  <Home size={18} />
                  <span>Back to Home</span>
                </Link>
                <Link href="/destinations" className={styles.packagesButton}>
                  <Compass size={18} />
                  <span>Explore Destinations</span>
                  <ArrowRight size={16} />
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
