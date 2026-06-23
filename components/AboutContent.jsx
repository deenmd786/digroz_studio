import Image from 'next/image';
import { 
  Star, 
  Shield, 
  Monitor, 
  Users, 
  Share2, 
  Camera, 
  Music, 
  Clapperboard, 
  FileText 
} from 'lucide-react';

export default function AboutContent() {
  const coreValues = [
    {
      title: "Privacy-First",
      desc: "Compelling, real & Lock",
      icon: Shield,
      color: "text-indigo-400"
    },
    {
      title: "Minimalist Design",
      desc: "Clean Desk & single button",
      icon: Monitor,
      color: "text-pink-400"
    },
    {
      title: "Accessibility",
      desc: "Diverse users & real",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Ecosystem Performance",
      desc: "Linked data nodes text",
      icon: Share2,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center z-10 relative px-4 md:px-0">
      
      {/* Page Title */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg leading-tight">
          MEET THE <br className="hidden md:block" />
          DIGROZ STUDIO <br className="hidden md:block" />
          VISIONARIES
        </h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8 md:gap-12">
        
        {/* --- TOP ROW: Founders & Avatar --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Card: The Founders Text */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 md:p-12 shadow-2xl hover:bg-white/15 transition-all">
            
            {/* Custom Star / A&E Logo Graphic */}
            <div className="relative mb-6">
              <Star size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white tracking-widest mt-1">
                A&E
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-widest mb-2">THE FOUNDERS</h2>
            <h3 className="text-sm font-semibold text-indigo-300 mb-6 uppercase tracking-wide">
              ALAN (Lead Engineer) & <br/> ELIZA (Creative Director)
            </h3>
            
            <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
              Expert engineering and creative direction, with a combined passion for building tools that empower creators.
            </p>
          </div>

          {/* Right Card: The Founders Image */}
          <div className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 shadow-2xl overflow-auto min-h-[350px] hover:bg-white/15 transition-all">
            <Image 
              src="/assets/founders.png" 
              alt="Alan and Eliza - Founders"
              fill
              sizes="(max-width: 768px) index-5 100vw, 50vw" // <--- Added sizes prop here
              className="object-contain object-bottom p-4"
              priority
            />
          </div>

        </div>

        {/* --- MIDDLE ROW: Core Values --- */}
        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white tracking-widest text-center mb-8">
            OUR CORE VALUES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {coreValues.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-black/20 shrink-0 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-white tracking-wide">{item.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM ROW: The Creator Ecosystem --- */}
        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center overflow-hidden relative">
          
          {/* Custom Ecosystem Graphic Built with Icons & CSS */}
          <div className="flex items-center justify-center gap-2 md:gap-6 mb-10 relative w-full">
            
            <div className="bg-white/10 p-3 md:p-4 rounded-2xl border border-cyan-400/30 z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)] text-cyan-300">
              <Camera size={32} />
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-2xl border border-purple-400/30 z-10 shadow-[0_0_20px_rgba(192,132,252,0.2)] text-purple-300">
              <Clapperboard size={32} />
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-2xl border border-pink-400/30 z-10 shadow-[0_0_20px_rgba(244,114,182,0.2)] text-pink-300">
              <Music size={32} />
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-2xl border border-indigo-400/30 z-10 shadow-[0_0_20px_rgba(129,140,248,0.2)] text-indigo-300">
              <FileText size={32} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white tracking-widest mb-4 uppercase">
            The Creator Ecosystem
          </h2>
          <p className="text-gray-300 leading-relaxed font-light max-w-2xl text-sm md:text-base">
            A growing suite of interconnected tools for image editing, video creation, and media playback, supporting modern creative workflows.
          </p>
        </div>

      </div>
    </div>
  );
}