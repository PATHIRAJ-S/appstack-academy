import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, FolderGit2, Award, Briefcase } from 'lucide-react';

const iconMap = {
  Users,
  BookOpen,
  FolderGit2,
  Award,
  Briefcase
};

const StatCard = ({ stat, index = 0 }) => {
  const IconComponent = iconMap[stat.iconName] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-slate-200/80 p-6 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-6 h-6" />
      </div>

      <div className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-1 text-brand-gradient">
        {stat.value}
      </div>

      <div className="text-sm font-bold text-[#0F172A] mb-1">
        {stat.label}
      </div>

      {stat.description && (
        <div className="text-xs text-[#64748B]">
          {stat.description}
        </div>
      )}
    </motion.div>
  );
};

export default StatCard;
