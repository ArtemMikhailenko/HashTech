import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "HashTech | Blockchain & Web3 Development Solutions",
  description: "HashTech is a Web3 startup studio and development partner focused on building and launching high-impact blockchain products.",
  keywords: [
    "blockchain development", 
    "Web3", 
    "DeFi solutions", 
    "smart contracts", 
    "blockchain apps", 
    "blockchain studio", 
    "Web3 innovation", 
    "crypto development",
    "decentralized applications",
    "NFT development",
    "blockchain consultancy"
  ],
  openGraph: {
    title: "HashTech | Blockchain & Web3 Development Solutions",
    description: "HashTech is a Web3 startup studio and development partner focused on building and launching high-impact blockchain products.",
    url: "https://hashtech.dev",
    siteName: "HashTech",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure to create this image
        width: 1200,
        height: 630,
        alt: "HashTech - Web3 Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HashTech | Blockchain & Web3 Development Solutions",
    description: "HashTech is a Web3 startup studio and development partner focused on building and launching high-impact blockchain products.",
    images: ["/images/og-image.jpg"], // Make sure to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hashtech.dev",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}