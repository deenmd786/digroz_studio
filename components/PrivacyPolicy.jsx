import { ShieldCheck, Orbit, PlaySquare, Shield, ArrowRightCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. INFORMATION WE COLLECT:",
      icon: ShieldCheck,
      iconColor: "text-indigo-400",
      content: (
        <div className="text-gray-300 font-light leading-relaxed space-y-4">
          <p>We operate with a minimal data collection philosophy.</p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-indigo-400">&bull;</span>
              <span>
                We collect zero data from non-premium (standard) users. Your app usage is completely private and off-network. We have no trackers, analytics, or profiling for free tier usage.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">&bull;</span>
              <span>
                For Premium (Subscription) Users, we collect only necessary service data. To fulfill your subscription and restore your premium status (preventing multiple charges after app re-installation), we securely store a unique identifier linked to your unique identifier linked to your transaction status. This ID is purely for verification and does not contain personal files or content.
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "2. HOW WE USE YOUR INFORMATION:",
      icon: Orbit,
      iconColor: "text-purple-400",
      content: (
        <div className="text-gray-300 font-light leading-relaxed space-y-4">
          <p>
            Premium User Data is used exclusively for service fulfillment. This includes: (1) Granting and verifying premium access. (2) Seamlessly restoring premium status and features if you re-install the app (preventing re-subscription).
          </p>
          <p>
            Non-premium users are completely private. We do not profile or track standard users.
          </p>
        </div>
      )
    },
    {
      title: "3. DATA SHARING:",
      icon: PlaySquare,
      iconColor: "text-pink-400",
      content: (
        <p className="text-gray-300 font-light leading-relaxed">
          Since we collect zero data from standard users, there is nothing to share. For premium users, your unique identifier is shared ONLY with the supporting platform (Google Play / Apple App Store) for transaction validation. We never sell, rent, or trade any user data.
        </p>
      )
    },
    {
      title: "4. DATA SECURITY:",
      icon: Shield,
      iconColor: "text-blue-400",
      content: (
        <p className="text-gray-300 font-light leading-relaxed">
          We use industry-standard encryption and security measures. (Re-affirm all data is handled with maximum care).
        </p>
      )
    },
    {
      title: "5. YOUR RIGHTS:",
      icon: ArrowRightCircle,
      iconColor: "text-indigo-400",
      content: (
        <p className="text-gray-300 font-light leading-relaxed">
          Describe access, edit, delete data. (You have full control over any minimal data collected).
        </p>
      )
    },
    {
      title: "6. CONTACT US:",
      icon: null,
      content: (
        <p className="text-gray-300 font-light leading-relaxed">
          For questions, email <strong className="text-white font-medium">support@digroz.com</strong> or call <strong className="text-white font-medium">+1 888 555 0101</strong>.
        </p>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10 relative">
      
      {/* Page Headers */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
          DIGROZ STUDIO<br />PRIVACY POLICY
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light">
          Last Updated: June 20, 2026
        </p>
      </div>

      {/* Main Glassmorphism Container */}
      <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Subtle inner glow for the container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-indigo-500/10 blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col gap-12 relative z-10">
          {sections.map((section, idx) => (
            <div key={idx} className="relative group">
              
              {/* Flex container for Title and floating Icon */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide max-w-[85%]">
                  {section.title}
                </h2>
                
                {/* Floating Glass Icon (Hidden on very small screens, visible on SM and up) */}
                {section.icon && (
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl shadow-lg shrink-0">
                    <section.icon size={26} className={section.iconColor} />
                  </div>
                )}
              </div>

              {/* Text Content */}
              {section.content}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}