import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'EhPTv_Hmevj1YyVN8iTlMdl8AM04nJdJxuxRXVJbTG4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <main className="pt-20"> {/* Add padding-top equal to header height */}
        <Header />{children}<Footer />
        </main>
        
      </body>
    </html>
  );
}
