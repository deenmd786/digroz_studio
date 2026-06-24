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
  
  openGraph: {
    title: 'Digroz Studio | Powerful Apps for Creators',
    description: 'A high-performance, privacy-first suite of media tools ensuring your creative workflow remains entirely under your control.',
    url: 'https://www.digroz.com', 
    siteName: 'Digroz Studio',
    images: [
      {
        src: '/assets/hero_bg.png', 
        width: 1200,
        height: 630,
        alt: 'Digroz Studio App Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Digroz Studio | Powerful Apps for Creators',
    description: 'Built on a strict privacy-first foundation, our apps combine minimalist design with professional-grade features.',
    images: ['/assets/hero_bg.png'],
  },
  
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
    // FIX: Moved the gradient background here and added flex-col
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black relative overflow-hidden flex flex-col pt-6">
      <Navbar />
      <Hero />
      <ToolsSection />
      <Testimonials />
      <Footer />
    </main>
  );
}