import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

// --- PAGE SPECIFIC SEO METADATA ---
export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Digroz Studio team. We are here to help with support, feedback, or business inquiries regarding our creator tools.',
};

export default function ContactPage() {
  return (
    // Consistent dark space background matching Hero and Privacy pages
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black text-white relative overflow-hidden flex flex-col">
      
      {/* Subtle Ambient Lights (Not too bright) */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <Navbar />
      
      {/* Content wrapper */}
      <div className="flex-grow pt-16 pb-24 px-4 md:px-8 flex justify-center">
        <ContactForm />
      </div>

      <Footer />
      
    </main>
  );
}