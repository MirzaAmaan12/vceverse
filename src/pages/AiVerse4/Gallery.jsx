// Gallery images - Placeholder with gradients until actual images are added
const galleryImages4 = [
  { color: "from-purple-500 to-cyan-500" },
  { color: "from-blue-500 to-purple-500" },
  { color: "from-cyan-500 to-blue-500" },
  { color: "from-purple-600 to-pink-500" },
  { color: "from-cyan-600 to-purple-600" },
  { color: "from-blue-600 to-cyan-600" },
  { color: "from-purple-700 to-blue-500" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-container pb-12 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Event Gallery</h2>
        <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <style>
          {`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee-scroll { display: flex; width: max-content; animation: marquee 35s linear infinite; }
            .gallery-wrapper:hover .animate-marquee-scroll { animation-play-state: paused; }
            .mask-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
          `}
        </style>

        <div className="gallery-wrapper mask-edges max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-marquee-scroll py-8 flex gap-6">
            {galleryImages4.map((item, i) => (
              <div key={`a4-1-${i}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl border border-white/10">
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer`}>
                  <span className="text-white/30 text-6xl font-black">AI</span>
                </div>
              </div>
            ))}
            {galleryImages4.map((item, i) => (
              <div key={`a4-2-${i}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl border border-white/10">
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer`}>
                  <span className="text-white/30 text-6xl font-black">AI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
