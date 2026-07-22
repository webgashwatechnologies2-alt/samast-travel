import './globals.css';
import Script from 'next/script';

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

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KNGCJJMN');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNGCJJMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}