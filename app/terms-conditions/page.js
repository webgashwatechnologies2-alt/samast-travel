import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms & Conditions | Samast Travel',
  description: 'Terms and conditions for booking tours and using services of Samast Travel.',
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="page-header">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before booking your tour</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Terms & Conditions</span>
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
                  Welcome to Samast Travel. By accessing our website, browsing our itineraries, or booking a tour package with us, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h2>1. Booking and Booking Confirmation</h2>
                <p>
                  To secure a booking for a tour package, you must make a booking deposit as specified in the individual package itinerary.
                </p>
                <ul>
                  <li>A booking is considered confirmed only after the deposit has been received and a confirmation email has been sent by us.</li>
                  <li>The remaining balance of the tour fee must be paid at least 15 days prior to the departure date, unless specified otherwise for specific peak season or international packages.</li>
                  <li>If the balance is not paid in full by the due date, we reserve the right to cancel your booking and retain the deposit in accordance with our cancellation policy.</li>
                </ul>

                <h2>2. Pricing and Surcharges</h2>
                <p>
                  Prices listed on our website are subject to change without prior notice due to increases in fuel costs, transport tariffs, hotel rates, government taxes, or visa fees. Once a booking is fully paid and confirmed, we will honour the price, except in cases of government tax alterations or extreme currency fluctuations.
                </p>

                <h2>3. Tour Amendments and Changes</h2>
                <p>
                  <strong>Changes by the Traveller:</strong> If you wish to amend your booking (change dates, hotels, or routing) after confirmation, we will make reasonable efforts to accommodate the changes, subject to availability and any amendment fees charged by third-party suppliers.
                </p>
                <p>
                  <strong>Changes by Samast Travel:</strong> While we aim to run all trips as advertised, local conditions (weather, road blockages, flight cancellations) may necessitate changes to routes, hotel accommodations, or itineraries. We reserve the right to modify itineraries at any time to ensure the safety and comfort of our travellers. No compensation is payable for minor changes.
                </p>

                <h2>4. Health, Fitness and Medical Responsibilities</h2>
                <p>
                  Many of our packages, particularly high-altitude Himalayan tours (e.g., Ladakh, Spiti Valley) and trekking tours, involve physical exertion and high altitude.
                </p>
                <ul>
                  <li>It is your responsibility to verify that you are physically fit and healthy enough to participate in the booked tour.</li>
                  <li>You must inform us of any pre-existing medical conditions, allergies, or physical limitations prior to booking.</li>
                  <li>We reserve the right to refuse participation to any traveller who we deem physically or mentally unfit to safely complete the tour.</li>
                </ul>

                <h2>5. Travel Insurance</h2>
                <p>
                  We strongly recommend that all travellers purchase a comprehensive travel insurance policy at the time of booking. The policy should cover trip cancellation, interruption, medical expenses, baggage loss, emergency evacuation, and adventure sports coverage if applicable.
                </p>

                <h2>6. Code of Conduct and Local Customs</h2>
                <p>
                  Travellers are expected to respect local laws, environment protection guidelines, and cultural/religious customs of the destinations visited.
                </p>
                <p>
                  We operate a zero-tolerance policy towards illegal drugs, abusive behaviour, violence, or activities that endanger the safety of the tour group, guides, or locals. The tour guide has absolute authority to terminate a traveller&apos;s trip immediately if their behaviour is disruptive, hazardous, or illegal, with no refund given.
                </p>

                <h2>7. Jurisdiction and Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these terms, our services, or travel bookings shall be subject to the exclusive jurisdiction of the courts in Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009.
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
