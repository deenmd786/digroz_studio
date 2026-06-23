import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';

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