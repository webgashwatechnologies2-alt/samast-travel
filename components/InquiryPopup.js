'use client';

import { useState, useEffect } from 'react';
import { X, Send, Calendar, MapPin, Users, Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import styles from './InquiryPopup.module.css';
import popupimage from "@/public/images/churchnew.jpg";

const DESTINATIONS = [
  'Himachal Pradesh',
  'Spiti Valley',
  'Ladakh',
  'Kashmir',
  'Uttarakhand',
  'Goa',
  'Rajasthan',
  'Kerala',
  'North East',
  'International'
];

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelMonth: '',
    persons: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto trigger popup after 2 seconds on every page load / reload
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // NOTE: No storage flag set here — closing with X should allow popup to show again on reload.
    // Reset form after transition
    setTimeout(() => {
      setIsSubmitted(false);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelMonth: '',
        persons: ''
      });
    }, 4000);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      // Matches standard 10 digit Indian number formats
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.destination) newErrors.destination = 'Please select a destination';
    if (!formData.travelMonth) newErrors.travelMonth = 'Please select a month';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Only after actual submission do we block the popup for this browser session.
      sessionStorage.setItem('samast_inquiry_submitted', 'true');
    }
  };

  // Get next 6 months for travel selection
  // Get months from now through end of 2027
  const getUpcomingMonths = () => {
    const months = [];
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    const endYear = 2027;
    const endMonth = 11; // December (0-indexed)

    const totalMonths = (endYear - currentYear) * 12 + (endMonth - currentMonth) + 1;

    for (let i = 0; i < totalMonths; i++) {
      const futureDate = new Date(currentYear, currentMonth + i, 1);
      const label = futureDate.toLocaleString('default', { month: 'long', year: 'numeric' });
      months.push(label);
    }
    return months;
  };

  return (
    <>
      {/* Floating Manual Trigger Badge (Bottom Left) */}
      <button
        className={`${styles.floatingTrigger} ${isOpen ? styles.hiddenTrigger : ''}`}
        onClick={handleOpen}
        aria-label="Plan your trip with us"
      >
        <div className={styles.triggerIconWrapper}>
          <MessageSquare className={styles.triggerIcon} size={20} />
          <span className={styles.triggerBadge}>1</span>
        </div>
        <span className={styles.triggerText}>Plan Your Trip</span>
        <div className={styles.pulseRing} />
      </button>

      {/* Modal Wrapper */}
      {isOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close Pop-up"
            >
              <X size={20} />
            </button>

            {/* Split Content */}
            <div className={styles.splitContent}>

              {/* Left Side: Brand Imagery & Selling Points */}
              <div className={styles.visualColumn}>
                <Image
                  src={popupimage}
                  alt="Beautiful mountain view representing Samast Travel packages"
                  fill
                  className={styles.visualImg}
                  priority
                />
                <div className={styles.visualOverlay} />
                <div className={styles.visualText}>
                  <span className={styles.visualTag}>SAMAST TRAVELS</span>
                  <h2>Get Free Custom Tour Quotes</h2>
                  <p>Design your perfect holiday itinerary with the help of local destination specialists.</p>

                  <div className={styles.features}>
                    <div className={styles.featureItem}>
                      <span className={styles.featureBullet}>✓</span>
                      <span>100% Customized Tour Packages</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.featureBullet}>✓</span>
                      <span>Experienced Local Guides & Drivers</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.featureBullet}>✓</span>
                      <span>Best Price Guarantee & Safety Assured</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className={styles.formColumn}>
                {isSubmitted ? (
                  <div className={styles.successWrapper}>
                    <div className={styles.successHeader}>
                      <div className={styles.successCheck}>
                        <CheckCircle size={48} className={styles.checkIcon} />
                      </div>
                      <h3>Thank You, {formData.name}!</h3>
                      <p className={styles.successMessage}>
                        Your inquiry for <strong>{formData.destination}</strong> has been received. Our travel specialist will create a tailored itinerary and contact you shortly!
                      </p>
                    </div>

                    <div className={styles.contactShortcut}>
                      <p className={styles.contactDivider}><span>OR CONTACT US DIRECTLY</span></p>
                      <div className={styles.directActions}>
                        <a href="tel:+918679677152" className={styles.directBtn}>
                          <Phone size={16} /> Call Expert
                        </a>
                        <a
                          href={`https://wa.me/918679677152?text=${encodeURIComponent(`Hi, I'm ${formData.name}. I want to plan a trip to ${formData.destination} in ${formData.travelMonth} for ${formData.persons || 'unspecified'} person(s).`)}`} target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.directBtn} ${styles.whatsappBtn}`}
                        >
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.formHeader}>
                      <h3>Plan Your Dream Trip</h3>
                      <p>Tell us your plans and we'll build a custom itinerary for free.</p>
                    </div>

                    <div className={styles.formBody}>
                      {/* Name Input */}
                      <div className={styles.inputGroup}>
                        <label htmlFor="inquiry-name">Full Name *</label>
                        <input
                          type="text"
                          id="inquiry-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="E.g., Rahul Sharma"
                          className={errors.name ? styles.inputError : ''}
                        />
                        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                      </div>

                      {/* Contact Fields Row */}
                      <div className={styles.row}>
                        {/* Phone Input */}
                        <div className={styles.inputGroup}>
                          <label htmlFor="inquiry-phone">Phone Number *</label>
                          <div className={styles.phoneInputWrapper}>
                            <span className={styles.phonePrefix}>+91</span>
                            <input
                              type="tel"
                              id="inquiry-phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="98765 43210"
                              className={errors.phone ? styles.inputError : ''}
                            />
                          </div>
                          {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                        </div>

                        {/* Email Input */}
                        {/* Email Input */}
                        <div className={styles.inputGroup}>
                          <label htmlFor="inquiry-email">Email Address (Optional)</label>
                          <input
                            type="email"
                            id="inquiry-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rahul@example.com"
                            className={errors.email ? styles.inputError : ''}
                          />
                          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                        </div>
                      </div>

                      {/* Travel Fields Row */}
                      <div className={styles.row}>
                        {/* Destination Dropdown */}
                        <div className={styles.inputGroup}>
                          <label htmlFor="inquiry-destination">Destination *</label>
                          <div className={styles.selectWrapper}>
                            <select
                              id="inquiry-destination"
                              name="destination"
                              value={formData.destination}
                              onChange={handleChange}
                              className={errors.destination ? styles.inputError : ''}
                            >
                              <option value="">Select Destination</option>
                              {DESTINATIONS.map(dest => (
                                <option key={dest} value={dest}>{dest}</option>
                              ))}
                            </select>
                            <MapPin className={styles.selectIcon} size={15} />
                          </div>
                          {errors.destination && <span className={styles.errorMessage}>{errors.destination}</span>}
                        </div>

                        {/* Travel Month Dropdown */}
                        <div className={styles.inputGroup}>
                          <label htmlFor="inquiry-month">Month of Travel *</label>
                          <div className={styles.selectWrapper}>
                            <select
                              id="inquiry-month"
                              name="travelMonth"
                              value={formData.travelMonth}
                              onChange={handleChange}
                              className={errors.travelMonth ? styles.inputError : ''}
                            >
                              <option value="">Select Month</option>
                              {getUpcomingMonths().map(month => (
                                <option key={month} value={month}>{month}</option>
                              ))}
                            </select>
                            <Calendar className={styles.selectIcon} size={15} />
                          </div>
                          {errors.travelMonth && <span className={styles.errorMessage}>{errors.travelMonth}</span>}
                        </div>
                      </div>

                      {/* Budget Range Dropdown */}
                      <div className={styles.inputGroup}>
                        <label htmlFor="inquiry-persons">Number of Persons</label>
                        <div className={styles.selectWrapper}>
                          <select
                            id="inquiry-persons"
                            name="persons"
                            value={formData.persons}
                            onChange={handleChange}
                          >
                            <option value="">Select Number of Persons</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10+</option>
                          </select>
                          <Users className={styles.selectIcon} size={15} />
                        </div>
                      </div>
                    </div>

                    <div className={styles.formFooter}>
                      <button type="submit" className={styles.submitBtn}>
                        <span>Request Custom Itinerary</span>
                        <Send size={15} className={styles.sendIcon} />
                      </button>
                      <p className={styles.privacyNote}>We value your privacy. 100% secure. No spam.</p>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
