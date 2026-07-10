import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Samast Travel',
  description: 'Privacy policy and data collection terms for Samast Travel.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p>How we handle, secure, and protect your personal information</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Privacy Policy</span>
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
                  At Samast Travel, accessible from our website, one of our main priorities is the privacy of our visitors and customers. This Privacy Policy document contains types of information that is collected and recorded by Samast Travel and how we use it.
                </p>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when booking a tour, registering on the website, subscribing to our newsletter, or contacting us. This may include:
                </p>
                <ul>
                  <li><strong>Contact Details:</strong> Your name, email address, phone number, and physical mailing address.</li>
                  <li><strong>Identification Documents:</strong> Passport details, age, gender, and Aadhaar/Govt ID card copies, required for booking hotels, permits, flights, and travel insurance.</li>
                  <li><strong>Billing & Payment Details:</strong> Transaction details, credit card or bank account details, and GST numbers (if applicable). Please note that we do not store full card numbers directly on our servers; they are processed by secure, PCI-compliant payment gateways.</li>
                  <li><strong>Travel Preferences:</strong> Diet preferences, medical history or health limitations (for safety on adventure treks), and custom tour preferences.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the information we collect in various ways, including to:
                </p>
                <ul>
                  <li>Process, confirm, and manage your travel bookings, hotel bookings, and flights.</li>
                  <li>Communicate with you regarding tour details, itineraries, and booking confirmations.</li>
                  <li>Send you updates, promotional offers, and newsletter emails (which you can opt-out of at any time).</li>
                  <li>Provide customer support and resolve query tickets.</li>
                  <li>Ensure your safety by assessing health requirements for high-altitude treks or adventure activities.</li>
                  <li>Comply with local legal requirements, tourism regulations, and permit conditions.</li>
                </ul>

                <h2>3. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or lease your personal information to third-party marketers. We only share your information with trusted partners to facilitate your trip:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> Hotels, airlines, local transport operators, cab drivers, and local tour coordinators who need your details to deliver the booked service.</li>
                  <li><strong>Government Authorities:</strong> For permits in restricted/protected areas (e.g., Ladakh, Spiti Valley, North East India, international borders).</li>
                  <li><strong>Payment Processors:</strong> Secured payment gateways to authorize transactions.</li>
                  <li><strong>Legal Compliance:</strong> If required by law, court orders, or regulations.</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We use appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, destruction, alteration, or disclosure. All sensitive data transmission is encrypted using Secure Socket Layer (SSL) technology.
                </p>

                <h2>5. Cookies and Tracking</h2>
                <p>
                  Samast Travel uses standard &apos;cookies&apos; to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                  You have the right to request access to the personal information we hold about you, request corrections to incorrect data, or request the deletion of your data (subject to legal obligations and booking fulfillment constraints). To exercise these rights, please contact us at privacy@samasttravel.com.
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
