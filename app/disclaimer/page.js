import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Disclaimer | Samast Travel',
  description: 'Disclaimer and limitation of liability policy for Samast Travel.',
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="page-header">
          <h1>Disclaimer</h1>
          <p>Important terms regarding information accuracy and service limitations</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Disclaimer</span>
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
                  Please read this Disclaimer carefully before using the website operated by Samast Travel (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). Your access to and use of the website and services is conditioned upon your acceptance of and compliance with this Disclaimer.
                </p>

                <h2>Information Accuracy</h2>
                <p>
                  The information provided on this website is for general informational and travel planning purposes only. While we endeavour to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </p>

                <h2>Third-Party Services and bookings</h2>
                <p>
                  Samast Travel acts as an agent/facilitator for various third-party travel service providers, including but not limited to airlines, hotels, transport providers, local tour guides, and adventure activity organizers. 
                </p>
                <p>
                  We do not operate, control, or supervise these third-party suppliers and cannot be held responsible for their acts, omissions, defaults, errors, representations, warranties, breaches, or negligence, or for any personal injuries, death, property damage, or other damages or expenses resulting therefrom.
                </p>

                <h2>Adventure Activities and Physical Risk</h2>
                <p>
                  Certain tour packages offered by Samast Travel include adventure sports and physical activities, including but not limited to trekking, camping, mountaineering, skiing, river rafting, and paragliding. These activities carry inherent risks of injury, illness, and death.
                </p>
                <p>
                  By booking a trip with us, you acknowledge and accept these inherent risks. It is the responsibility of the traveller to assess their physical fitness, carry necessary medications, and adhere to safety rules and instructions provided by the tour guides.
                </p>

                <h2>Travel Documents and Visas</h2>
                <p>
                  It is the sole responsibility of the traveller to ensure they possess valid travel documents, passports, visas, permit entries, and vaccination certificates required for their destination. We shall not be held liable for any cancellation, delay, or denial of entry resulting from missing or invalid documentation.
                </p>

                <h2>Force Majeure</h2>
                <p>
                  Samast Travel will not be liable for any failure, delay, or alteration in tour itineraries, hotel bookings, or transport schedules caused by events beyond our reasonable control (Force Majeure). These events include, but are not limited to:
                </p>
                <ul>
                  <li>Natural disasters (landslides, earthquakes, floods, extreme weather conditions)</li>
                  <li>Political unrest, strikes, riots, war, or government restrictions</li>
                  <li>Epidemics, pandemics, or quarantine restrictions</li>
                  <li>Flight/train delays, technical breakdowns, or route closures</li>
                </ul>

                <h2>Limitation of Liability</h2>
                <p>
                  In no event will Samast Travel, its directors, employees, or agents be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or the booking of travel services.
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
