import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100/80 -z-0 pointer-events-none" />

      <div className="relative z-10">
        {/* Rating Stars & Sample Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          {testimonial.tag && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
              {testimonial.tag}
            </span>
          )}
        </div>

        {/* Review Content */}
        <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6">
          "{testimonial.review}"
        </p>
      </div>

      {/* Student Author Metadata */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 relative z-10">
        <img
          src={testimonial.avatar}
          alt={testimonial.studentName}
          className="w-11 h-11 rounded-full object-cover border border-slate-200"
          loading="lazy"
        />
        <div>
          <h4 className="text-sm font-bold text-[#0F172A]">{testimonial.studentName}</h4>
          <p className="text-xs text-[#2563EB] font-medium">{testimonial.course}</p>
          <span className="text-[11px] text-[#64748B]">{testimonial.batch}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
