import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black text-white relative overflow-hidden flex flex-col">
      
      {/* Background Ambient Lights (Keeping it subtle and consistent) */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <Navbar />
      
      {/* Content wrapper */}
      <div className="flex-grow pt-12 pb-24 px-4 md:px-8 flex justify-center">
        <AboutContent />
      </div>

      <Footer />
      
    </main>
  );
}