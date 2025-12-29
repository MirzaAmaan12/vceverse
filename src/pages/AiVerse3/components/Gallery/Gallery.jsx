import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

// IMPORTANT: Update these paths to your actual image filenames in src/pages/AiVerse3/assets/gallery/
const galleryImages = [
  { src: "/src/pages/AiVerse3/assets/gallery/event-1.jpg", alt: "Generative AI Session", span: "row-span-2" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-2.jpg", alt: "Web Development Workshop", span: "col-span-2" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-3.jpg", alt: "Technical Quiz in Progress", span: "" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-4.jpg", alt: "Cultural Activities Evening", span: "col-span-2 row-span-2" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-5.jpg", alt: "Sandeep Akkapelli Speaking", span: "" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-6.jpg", alt: "Prashanth Ravichandran Presentation", span: "" },
  { src: "/src/pages/AiVerse3/assets/gallery/event-7.jpg", alt: "Vaagdevi Campus View", span: "col-span-1 row-span-1" },
  // Add more image objects here with their correct paths and desired spans
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-[#F0FF42] uppercase tracking-[0.4em] text-xs mb-4 font-bold">Visuals</h2>
          <h3 className="text-5xl font-black italic uppercase leading-none">Event <span className="text-[#22D3EE]">Moments</span></h3>
        </div>
        <a 
          href="#" // Link to a larger gallery view if available
          className="text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-[#22D3EE] transition-colors flex items-center gap-2"
        >
          View All Photos <Image size={16} />
        </a>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`relative rounded-xl overflow-hidden group glass-card hover:ring-2 hover:ring-[#22D3EE] transition-all ${image.span}`}
            style={{ minHeight: index % 3 === 0 ? '250px' : '150px' }} // Varying heights for Bento feel
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Overlay for Image Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}