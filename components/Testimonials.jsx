import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      quote: '"The video tools are a game-changer!"',
      // Replace with your actual image path in the public folder
      avatar: '/assets/sarah.jpg', 
    },
    {
      name: 'Mark L.',
      quote: '"The photo editor is my daily choice."',
      avatar: '/assets/mark.jpg',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0a0f1c] flex flex-col items-center justify-center font-sans text-white overflow-hidden">
      
      {/* --- THE GLOWING CONTAINER BACKGROUND --- */}
      {/* This creates a soft, pulsing light directly behind the testimonial cards */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[400px] bg-indigo-500/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none animate-pulse"></div>

      {/* --- TESTIMONIAL CARDS --- */}
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-xl px-4 mb-16 md:mb-24">
        {testimonials.map((item, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-4 md:gap-6 p-3 pr-6 md:p-4 md:pr-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[50px] shadow-2xl hover:scale-105 hover:bg-white/15 transition-all duration-300 cursor-default"
          >
            {/* Avatar Circle */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
               {/* Fallback to a gray circle if the image isn't found yet */}
              <div className="absolute inset-0 bg-gray-600 animate-pulse"></div>
              <Image 
                src={item.avatar} 
                alt={`${item.name} Avatar`}
                fill
                className="object-cover relative z-10"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-semibold text-white tracking-wide mb-1">
                {item.name}
              </h4>
              <p className="text-base md:text-lg text-gray-200 font-light">
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- MISSION STATEMENT TEXT --- */}
      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light">
          Digroz Studio is an event member with our mission to creating 
          surround streaming, and our expert keyboard, and tower, and 
          softwares launches and fair coordination.
        </p>
      </div>

    </section>
  );
}