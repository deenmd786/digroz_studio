import { 
  Image as ImageIcon, 
  Video, 
  Layers, 
  Music, 
  Play, 
  ImagePlus, 
  Clapperboard, 
  Library 
} from 'lucide-react';

export default function ToolsSection() {
  const categories = [
    { name: 'Image', icon: ImageIcon, color: 'text-blue-400' },
    { name: 'Video', icon: Video, color: 'text-purple-400' },
    { name: 'Multimedia', icon: Layers, color: 'text-indigo-400' },
    { name: 'Music', icon: Music, color: 'text-pink-400' },
  ];

  const features = [
    {
      title: 'Digroz Photo Master',
      desc: 'Precise adjustments and creative filters.',
      icon: ImagePlus,
      color: 'text-indigo-400',
    },
    {
      title: 'Digroz Video Editor Pro',
      desc: 'Timeline editing, transitions, and 4K export.',
      icon: Clapperboard,
      color: 'text-purple-400',
    },
    {
      title: 'Digroz Music Player Plus',
      desc: 'Dynamic playlists and offline playback.',
      icon: Music,
      color: 'text-pink-400',
    },
    {
      title: 'Universal Media Streamer',
      desc: 'Flawless playback for any file format.',
      icon: Library,
      color: 'text-blue-400',
    },
  ];

  return (
    // Reduced mobile top/bottom padding from py-24 to py-16
    <section className="w-full py-16 md:py-24 bg-[#0a0f1c] flex flex-col items-center font-sans text-white relative">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

      {/* --- TOP ROW: Category Icons --- */}
      {/* Reduced mobile gap from gap-6 to gap-3 so all 4 fit on one line on small phones */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-16 relative z-10 px-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            // Scaled down boxes for mobile: w-[72px] up to w-28 on desktop
            className="flex flex-col items-center justify-center w-[76px] h-[76px] sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all cursor-pointer shadow-lg"
          >
            {/* Swapped size prop for Tailwind responsive w/h classes */}
            <cat.icon className={`${cat.color} w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 drop-shadow-md`} />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-200">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* --- STORE BADGES --- */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-16 md:mb-20 relative z-10 px-4 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-3 px-4 py-2 bg-black border border-gray-700 rounded-lg hover:border-gray-500 transition-colors w-full sm:w-auto">
          <Play size={20} className="text-green-400 fill-green-400" />
          <div className="text-left">
            <div className="text-[10px] text-gray-400 leading-none mb-1">GET IT ON</div>
            <div className="text-sm font-semibold leading-none">Google Play</div>
          </div>
        </button>
        <button className="flex items-center justify-center gap-3 px-4 py-2 bg-black border border-gray-700 rounded-lg hover:border-gray-500 transition-colors w-full sm:w-auto">
          <Play size={20} className="text-green-400 fill-green-400" />
          <div className="text-left">
            <div className="text-[10px] text-gray-400 leading-none mb-1">GET IT ON</div>
            <div className="text-sm font-semibold leading-none">Google Play</div>
          </div>
        </button>
      </div>

      {/* --- BOTTOM GRID: Advanced Tools --- */}
      <div className="w-full max-w-5xl px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8 md:mb-10 text-gray-100 drop-shadow-sm px-2">
          Explore Our Advanced Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            
            <div 
              key={idx} 
              className="relative p-[1px] rounded-3xl group cursor-pointer hover:-translate-y-1 transition-transform duration-500 shadow-2xl overflow-hidden"
            >
              
              <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#8b5cf6_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Reduced mobile inner padding from p-8 to p-6 */}
              <div className="relative flex flex-col h-full p-6 md:p-8 bg-[#0d1224]/95 backdrop-blur-2xl rounded-[23px] z-10">
                
                {/* Scaled down icon container on mobile */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className={`${feature.color} w-6 h-6 md:w-7 md:h-7`} />
                </div>
                
                {/* Scaled down text on mobile */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            </div>
            
          ))}
        </div>
      </div>

    </section>
  );
}