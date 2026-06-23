import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';

// --- SEO METADATA ---
export const metadata = {
  title: 'Digroz Studio | Powerful Apps for Creators',
  description: 'Digroz Studio empowers independent creators with a high-performance, privacy-first suite of media tools including photo mastering, video editing, and audio playback.',
  keywords: ['Digroz Studio', 'creator tools', 'video editor', 'photo editor', 'privacy-first apps', 'multimedia streaming', 'music player'],
  authors: [{ name: 'Digroz Studio' }],
  creator: 'Digroz Studio',
  publisher: 'Digroz Studio',
  
  // Open Graph (How your link looks when shared on Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    title: 'Digroz Studio | Powerful Apps for Creators',
    description: 'A high-performance, privacy-first suite of media tools ensuring your creative workflow remains entirely under your control.',
    url: 'https://www.digroz.com', // Replace with your actual live domain
    siteName: 'Digroz Studio',
    images: [
      {
        src: '/assets/hero_bg.png', // Fallback to your hero image for link previews
        width: 1200,
        height: 630,
        alt: 'Digroz Studio App Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card (How your link looks when shared on X/Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Digroz Studio | Powerful Apps for Creators',
    description: 'Built on a strict privacy-first foundation, our apps combine minimalist design with professional-grade features.',
    images: ['/assets/hero_bg.png'],
  },
  
  // Search Engine Crawling Instructions
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
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ToolsSection />
      <Testimonials />
      <Footer />
    </main>
  );
}