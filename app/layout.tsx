import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Metadata object for SEO & verification
export const metadata: Metadata = {
  title: "Inframe School: Best Art, Design & Business School in Jodhpur | Top College for Creative Education",
  description:
    "Inframe School of Art, Design & Business is a Leading Institution in Jodhpur with Over 15 Years of Excellence. We are the Trusted Choice for Creative Education in Jodhpur.",
  icons: {
    icon: "/500x500.jpg",
  },
  openGraph: {
    title: "Inframe School: Best Art, Design & Business School in Jodhpur | Top College for Creative Education",
    description:
      "Inframe School of Art, Design & Business is a Leading Institution in Jodhpur with Over 15 Years of Excellence. We are the Trusted Choice for Creative Education in Jodhpur.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yt3.googleusercontent.com/I3nimXEi9IpFwfTOoYovMl9RLJWHxZOewDCKXRYkrb4veYqEtu2vENdA3hLYemdtbBdta54kaQ=s160-c-k-c0x00ffffff-no-rj",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  other: {
    "google-site-verification": "dGWC26ZkV6A4Ue6fhZdXFh5gMfWQDF3Q-3qpLE71h5M",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {/* Google Analytics */}
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
