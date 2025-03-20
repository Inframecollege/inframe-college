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
       

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>

        {/* Open Graph Metadata (for social sharing) */}
        
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yt3.googleusercontent.com/I3nimXEi9IpFwfTOoYovMl9RLJWHxZOewDCKXRYkrb4veYqEtu2vENdA3hLYemdtbBdta54kaQ=s160-c-k-c0x00ffffff-no-rj" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="dGWC26ZkV6A4Ue6fhZdXFh5gMfWQDF3Q-3qpLE71h5M" />
      </Head>

      <body>
        {/* Google Analytics (placed inside <body>, not inside <Head>) */}
        

        {children}
      </body>
    </html>
  );
}
