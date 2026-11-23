import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  badge = '',
  title = '',
  highlightText = '',
  subtitle = '',
  align = 'center',
  className = ''
}) => {
  const isCentered = align === 'center';

  // Render title with highlight word if provided
  const renderTitle = () => {
    if (!highlightText || !title.includes(highlightText)) {
      return title;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="text-brand-gradient">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200/60 mb-3 ${isCentered ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
