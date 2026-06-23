import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

// --- PAGE SPECIFIC SEO METADATA ---
// Because of your layout.js template, this title automatically becomes:
// "Privacy Policy | Digroz Studio" in the browser tab!
export const metadata = {
  title: 'Privacy Policy',
  description: 'Review the Digroz Studio Privacy Policy. We operate with a strict minimal data collection philosophy to ensure your creative workflow remains private and secure.',
};

export default function PrivacyPage() {
  return (
    // Consistent dark space background matching Hero and other pages
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black text-white relative overflow-hidden flex flex-col">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <Navbar />
      
      {/* Content wrapper with top and bottom padding */}
      {/* Note: I added 'flex justify-center' here so your policy container stays perfectly centered on ultrawide monitors! */}
      <div className="flex-grow pt-12 pb-24 px-4 md:px-8 flex justify-center">
        <PrivacyPolicy />
      </div>

      <Footer />
      
    </main>
  );
}