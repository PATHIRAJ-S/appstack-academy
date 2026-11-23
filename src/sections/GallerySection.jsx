import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import { galleryCategories, galleryItems } from '../data/gallery';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CAMPUS & EVENTS"
          title="Life & Learning at AppStack Academy"
          highlightText="Life & Learning"
          subtitle="Take a glimpse inside our coding labs, workshops, hackathons, and graduation ceremonies."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedImageIndex(index)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded bg-[#2563EB] w-fit mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold">{item.title}</h4>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Component */}
        {selectedImageIndex !== null && (
          <Lightbox
            item={currentItem}
            onClose={() => setSelectedImageIndex(null)}
            onNext={() => setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length)}
            onPrev={() => setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
            hasNext={filteredItems.length > 1}
            hasPrev={filteredItems.length > 1}
          />
        )}

      </div>
    </section>
  );
};

export default GallerySection;
