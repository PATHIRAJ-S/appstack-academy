import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, User } from 'lucide-react';

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#2563EB] text-white shadow-sm">
          {achievement.badgeText}
        </div>
        <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-[#7C3AED]">
          {achievement.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs text-[#64748B] mb-2 font-medium">
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{achievement.studentName}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>{achievement.date}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2">
            {achievement.title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
