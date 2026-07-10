import Link from 'next/link';
import Image from 'next/image';
import { Compass, Phone, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';
import styles from './Footer.module.css';
import FooterNewsletter from './FooterNewsletter';


const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const SvgYoutube = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="  #FEB210" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const SvgTwitter = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const destinations = [
  { name: 'Himachal Pradesh', slug: 'himachal' },
  { name: 'Spiti Valley',     slug: 'spiti' },
  { name: 'Ladakh',           slug: 'ladakh' },
  { name: 'Kashmir',          slug: 'kashmir' },
  { name: 'Uttarakhand',      slug: 'uttarakhand' },
  { name: 'Goa',              slug: 'goa' },
  { name: 'Rajasthan',        slug: 'rajasthan' },
  { name: 'Kerala',           slug: 'kerala' },
  { name: 'North East',       slug: 'north-east' },
  { name: 'International',    slug: 'international' },
];

const quickLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Destinations',href: '/destinations' },
  { label: 'Bookings',    href: '/bookings' },
  { label: 'Contact Us',  href: '/contact' },
];

const legalLinks = [
  { label: 'Disclaimer',        href: '/disclaimer' },
  { label: 'Privacy Policy',    href: '/privacy-policy' },
  { label: 'Terms & Conditions',href: '/terms-conditions' },
  { label: 'Refund Policy',     href: '/refund-policy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Wave Top */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="  #FEB210"/>
        </svg>
      </div>

      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>

            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.footerLogo}>
                <Image 
                  src="/himalayan-tour-logo.png" 
                  alt="Samast Travel Logo" 
                  width={160} 
                  height={50} 
                  unoptimized
                  className={styles.footerLogoImg}
                />
              </Link>
              <p className={styles.brandDesc}>
                Your trusted travel partner for unforgettable journeys across India and the world. Crafting memories since 2015.
              </p>
              <div className={styles.contactList}>
                <a href="tel:+918679677152" className={styles.contactItem}>
                  <Phone size={15} />  +91 86796 77152
                </a>
                <a href="mailto:info@samasttravel.com" className={styles.contactItem}>
                  <Mail size={15} /> info@samasttravel.com
                </a>
                <span className={styles.contactItem}>
                  <MapPin size={15} /> Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009
                </span>
              </div>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/samasttravel" aria-label="Facebook"  className={styles.socialBtn}><SvgFacebook /></a>
                <a href="https://www.instagram.com/samasttravel/" aria-label="Instagram" className={styles.socialBtn}><SvgInstagram /></a>
                {/* <a href="#" aria-label="YouTube"   className={styles.socialBtn}><SvgYoutube /></a>
                <a href="#" aria-label="Twitter"   className={styles.socialBtn}><SvgTwitter /></a> */}
              </div>
            </div>

            {/* Destinations Column */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Destinations</h4>
              <ul className={styles.linkList}>
                {destinations.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/destinations/${d.slug}`} className={styles.footerLink}>
                      <ArrowRight size={13} />
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <ArrowRight size={13} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className={styles.colTitle} style={{ marginTop: 28 }}>Legal</h4>
              <ul className={styles.linkList}>
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <ArrowRight size={13} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className={styles.newsCol}>
              <h4 className={styles.colTitle}>Stay Updated</h4>
              <p className={styles.newsDesc}>
                Subscribe to get exclusive travel deals, tips, and destination guides straight to your inbox.
              </p>
              <FooterNewsletter />
              <div className={styles.badges}>
                <div className={styles.badge}>
                  <span className={styles.badgeNum}>500+</span>
                  <span className={styles.badgeLabel}>Tours</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeNum}>10K+</span>
                  <span className={styles.badgeLabel}>Happy Travellers</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeNum}>10+</span>
                  <span className={styles.badgeLabel}>Years Exp.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {new Date().getFullYear()} Samast Travel. All rights reserved.</p>
            <p className={styles.madeWith}>
              Made with <Heart size={13} fill="currentColor" /> for travellers
            </p>
            <div className={styles.legalBottom}>
              {legalLinks.map((l, i) => (
                <span key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                  {i < legalLinks.length - 1 && <span className={styles.sep}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
