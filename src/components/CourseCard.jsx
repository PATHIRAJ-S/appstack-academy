import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart, Star, Users, ArrowRight, Code, Layout, Terminal, Palette, TrendingUp } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const iconMap = {
  Code,
  Layout,
  Terminal,
  Figma: Palette,
  TrendingUp
};

const CourseCard = ({ course }) => {
  const { openEnquiry } = useEnquiry();
  const IconComponent = iconMap[course.iconName] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full overflow-hidden group"
    >
      {/* Card Header & Badge */}
      <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        {course.badge && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
            {course.badge}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2 font-medium">
            <span className="text-[#2563EB]">{course.category}</span>
            <span>•</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700">{course.rating}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2 line-clamp-1">
            {course.title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between gap-2 py-3 px-3.5 bg-slate-50 rounded-xl text-xs text-slate-600 mb-4 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="w-4 h-4 text-[#7C3AED]" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#06B6D4]" />
              <span>{course.studentsCount}</span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {course.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
            {course.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-500 font-medium">
                +{course.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <Link
            to={`/courses/${course.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => openEnquiry(course.title)}
            className="px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Enquire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
