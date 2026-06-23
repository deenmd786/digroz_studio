import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f1c] py-12 md:py-16 px-6 md:px-12 border-t border-white/10 text-white flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-16">

        {/* --- TOP CONTENT ROW --- */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          
          {/* Left Column: About */}
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">A Bit About Us</h3>
           <p className="text-gray-300 text-base leading-relaxed font-light">
    At Digroz Studio, we empower independent creators with a high-performance suite of media tools. 
  </p>
          </div>

          {/* Right Column: Contact */}
          <div className="md:text-right">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Contact</h3>
            
            <p className="text-gray-300 text-base font-light">
              Email: <a href="mailto:digrozstudio@gmail.com" className="hover:text-indigo-400 transition-colors">digrozstudio@gmail.com</a>
            </p>
          </div>
          
        </div>

        {/* --- BOTTOM BAR: Copyright & Socials --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6 md:pt-8 border-t border-white/5">
          
          <p className="text-gray-400 text-sm font-light">
            © 2026 DIGROZ STUDIO. All Rights Reserved.
          </p>

          {/* SOCIAL ICONS (Using inline SVGs to avoid missing exports) */}
          <div className="flex items-center gap-6">
            
            {/* X (Twitter) */}
            <Link href="#" className="text-white hover:text-indigo-400 hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            
            {/* Facebook */}
            <Link href="#" className="text-white hover:text-indigo-400 hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="#" className="text-white hover:text-indigo-400 hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link href="#" className="text-white hover:text-indigo-400 hover:scale-110 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>

          </div>
          
        </div>

      </div>
    </footer>
  );
}