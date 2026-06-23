import Image from 'next/image';

export default function Hero() {
  // 1. BULLETPROOF BACKGROUND: Using standard Tailwind 'to-b' (top-to-bottom) gradient. 
  // This guarantees a deep, rich space-blue color instead of harsh black.
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-20 pb-32 overflow-hidden bg-gradient-to-b from-[#1a1b4b] via-[#0d0e1f] to-black text-white">
      
      {/* 2. ENHANCED AMBIENT GLOW: Increased opacity to /20 so you can actually see the light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Headlines */}
      <div className="text-center z-20 mb-16 px-4 relative">
        <h1 className="text-3xl md:text-5xl font-light mb-2 text-indigo-100">
          Powerful Apps for Creators.
        </h1>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          DIGROZ STUDIO.
        </h2>
      </div>

      {/* Orbital System Container */}
      <div className="relative flex justify-center items-center w-full max-w-3xl h-[400px] md:h-[600px] mt-8">
        
        {/* The "Sun": Background Flow/Nebula (Layer 1) */}
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] md:w-[650px] md:h-[650px] z-10 animate-sun">
          <Image
            src="/assets/hero_bg.png"
            alt="Glowing Background"
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-contain opacity-100 mix-blend-screen"
            priority
          />
        </div>

        {/* The "Planets": Orbiting App Icons (Layer 2) */}
        <div className="absolute top-1/2 left-1/2 z-20">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`orbit-icon orbit-${num}`}>
              <div className="relative w-20 h-20 md:w-32 md:h-32 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Image
                  src={`/assets/${num}.png`}
                  alt={`App icon ${num}`}
                  fill 
                  sizes="(max-width: 768px) 80px, 128px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* The Centerpiece: Mobile Phone (Layer 3 - Highest) */}
        <div className="relative z-30 w-[220px] md:w-[280px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <Image
            src="/assets/mobile.png"
            alt="Mobile App Preview"
            width={300}
            height={600}
            className="object-contain"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}