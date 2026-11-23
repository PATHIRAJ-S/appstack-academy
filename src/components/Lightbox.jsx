import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ item, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Lightbox Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
        >
          <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[300px]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="p-5 bg-slate-900 text-white flex items-center justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-[#2563EB] text-white inline-block mb-1">
                {item.category}
              </span>
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.caption && <p className="text-xs text-slate-400 mt-1">{item.caption}</p>}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Lightbox;
