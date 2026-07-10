import './globals.css';

export const metadata = {
  title: 'Samast Travel | Explore India & Beyond',
  description: 'Discover the magic of Himachal, Spiti, Ladakh, Kashmir, Uttarakhand, Goa, Rajasthan, Kerala, North East India and International destinations with Samast Travel.',
  keywords: 'travel India, Himachal Pradesh, Spiti Valley, Ladakh, Kashmir, Uttarakhand, Goa, Rajasthan, Kerala, North East India, International tours',
  icons: {
    icon: '/himalayan-tour-logo.png?v=2',
  },
  openGraph: {
    title: 'Samast Travel | Explore India & Beyond',
    description: 'Your trusted travel partner for unforgettable journeys across India and the world.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
