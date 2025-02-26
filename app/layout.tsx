import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head"; // Import Next.js Head component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        {/* Title & Description */}
        <title>
          Inframe School: Best Art, Design & Business School in Jodhpur | Top
          College for Creative Education
        </title>
        <meta
          name="description"
          content="Inframe School of Art, Design & Business is a Leading Institution in Jodhpur with Over 15 Years of Excellence. We are the Trusted Choice for Creative Education in Jodhpur."
        />

        {/* Favicon */}
        <link rel="icon" href="/500x500.jpg" />

        {/* Open Graph Metadata (for social sharing) */}
        <meta
          property="og:title"
          content="Inframe School: Best Art, Design & Business School in Jodhpur | Top College for Creative Education"
        />
        <meta
          property="og:description"
          content="Inframe School of Art, Design & Business is a Leading Institution in Jodhpur with Over 15 Years of Excellence. We are the Trusted Choice for Creative Education in Jodhpur."
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yt3.googleusercontent.com/I3nimXEi9IpFwfTOoYovMl9RLJWHxZOewDCKXRYkrb4veYqEtu2vENdA3hLYemdtbBdta54kaQ=s160-c-k-c0x00ffffff-no-rj"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="dGWC26ZkV6A4Ue6fhZdXFh5gMfWQDF3Q-3qpLE71h5M"
        />
      </Head>

      <body>
        {/* Google Analytics (placed inside <body>, not inside <Head>) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Q0ED5JDYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Q0ED5JDYB');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
