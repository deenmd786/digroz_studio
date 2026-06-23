import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function PrivacyPage() {
  return (
    // Reusing the exact same deep space background gradient from your Hero section
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black text-white relative overflow-hidden flex flex-col">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <Navbar />
      
      {/* Content wrapper with top and bottom padding */}
      <div className="flex-grow pt-12 pb-24 px-4 md:px-8">
        <PrivacyPolicy />
      </div>

      <Footer />
      
    </main>
  );
}