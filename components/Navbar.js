'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu, X, MapPin, Phone, Mail, Search, ChevronDown,
  Mountain, Compass, Bike, Map, Waves, Castle, Palmtree, Sun, Plane, Trees
} from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Destinations', href: '/destinations', id: 'packages' },
  { label: 'Contact Us', href: '/contact', id: 'contact' },
];

const destinations = [
  { name: 'Himachal', slug: 'himachal', icon: Mountain, color: '#E0F7FA', iconColor: '#00B4D8' },
  { name: 'Spiti', slug: 'spiti', icon: Compass, color: '#FFF3CD', iconColor: '#FEB210' },
  { name: 'Ladakh', slug: 'ladakh', icon: Bike, color: '#E8F5E9', iconColor: '#2E7D32' },
  { name: 'Uttarakhand', slug: 'uttarakhand', icon: Map, color: '#FFEFE6', iconColor: '#FF6B35' },
  { name: 'Kashmir', slug: 'kashmir', icon: Waves, color: '#F3E5F5', iconColor: '#9C27B0' },
  { name: 'Rajasthan', slug: 'rajasthan', icon: Castle, color: '#E8EAF6', iconColor: '#3F51B5' },
  { name: 'Kerala', slug: 'kerala', icon: Palmtree, color: '#E0F2F1', iconColor: '#00796B' },
  { name: 'Goa', slug: 'goa', icon: Sun, color: '#FFE0B2', iconColor: '#E65100' },
  { name: 'Northeast', slug: 'north-east', icon: Trees, color: '#E8F5E9', iconColor: '#2E7D32' },
  { name: 'International', slug: 'international', icon: Plane, color: '#E3F2FD', iconColor: '#1565C0' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileDestOpen(false);
  }, [pathname]);

  const navbarClass = [
    styles.navbar,
    scrolled || !isHome ? styles.scrolled : '',
    menuOpen ? styles.menuOpen : '',
  ].join(' ');

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <div className={styles.topBarLeft}>
              <span><Phone size={13} />  +91 86796 77152</span>
              <span><Mail size={13} /> info@samasttravel.com</span>
            </div>
            <div className={styles.topBarRight}>
              <span><MapPin size={13} /> Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={navbarClass}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/himalayan-tour-logo.png"
                alt="Samast Travel Logo"
                width={200}
                height={100}
                priority
                unoptimized
                className={styles.logoImage}
              />
            </Link> 

            {/* Desktop Nav */}
            <ul className={styles.navLinks}>
              {navLinks.map((link) => {
                if (link.id === 'packages') {
                  return (
                    <li key={link.id} className={`${styles.navItem} ${styles.hasDropdown}`}>
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={styles.chevron} />
                      </Link>
                      <div className={styles.dropdown}>
                        <div className={styles.dropdownInner}>
                          <div className={styles.dropdownHeader}>
                            <span>Popular Destinations</span>
                            <Link href="/destinations" className={styles.viewAll}>
                              View All
                            </Link>
                          </div>
                          <div className={styles.dropdownGrid}>
                            {destinations.map((dest) => {
                              const Icon = dest.icon;
                              return (
                                <Link
                                  key={dest.slug}
                                  href={`/destinations/${dest.slug}`}
                                  className={styles.dropdownItem}
                                >
                                  <span
                                    className={styles.destIcon}
                                    style={{ backgroundColor: dest.color, color: dest.iconColor }}
                                  >
                                    <Icon size={16} />
                                  </span>
                                  <span>{dest.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.id} className={styles.navItem}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className={styles.navCta}>
              <Link href="/contact" className="btn btn-primary">
                Bookings
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => {
              if (link.id === 'packages') {
                return (
                  <li key={link.id}>
                    <button
                      className={styles.mobileLink}
                      onClick={() => setMobileDestOpen(!mobileDestOpen)}
                      style={{ width: '100%', cursor: 'pointer' }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`${styles.chevron} ${mobileDestOpen ? styles.chevronUp : ''}`}
                      />
                    </button>
                    {mobileDestOpen && (
                      <div className={styles.mobileDropdown}>
                        {destinations.map((dest) => {
                          const Icon = dest.icon;
                          return (
                            <Link
                              key={dest.slug}
                              href={`/destinations/${dest.slug}`}
                              className={styles.mobileDropdownItem}
                            >
                              <span
                                className={styles.destIcon}
                                style={{
                                  backgroundColor: dest.color,
                                  color: dest.iconColor,
                                  width: '26px',
                                  height: '26px',
                                  borderRadius: '6px',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}
                              >
                                <Icon size={13} />
                              </span>
                              <span>{dest.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Bookings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
