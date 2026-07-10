import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationsSection from '@/components/DestinationsSection';
import Link from 'next/link';

export const metadata = {
  title: 'All Destinations | Samast Travel',
  description: 'Explore all travel destinations: Himachal, Spiti, Ladakh, Kashmir, Uttarakhand, Goa, Rajasthan, Kerala, North East India & International tours.',
};

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-header">
          <h1>Our Destinations</h1>
          <p>From the icy Himalayas to tropical beaches — explore it all</p>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Destinations</span>
          </nav>
        </div>
        <div style={{ paddingTop: 0 }}>
          <DestinationsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
