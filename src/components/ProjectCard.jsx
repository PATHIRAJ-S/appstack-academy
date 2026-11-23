import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, User, BookOpen, X, Code2 } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col h-full overflow-hidden group"
      >
        {/* Project Thumbnail Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-[#2563EB] shadow-sm">
            {project.category}
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1.5 font-medium">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">{project.studentName}</span>
            </div>
            <span className="bg-slate-900/60 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] text-slate-200">
              {project.course}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs rounded-md bg-blue-50 text-[#2563EB] font-medium border border-blue-100/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
            >
              <span>View Project Details</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Project Modal Preview */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 md:p-8"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-xl overflow-hidden mb-6 h-64 bg-slate-100">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563EB]">
                  {project.category}
                </span>
                <span className="text-xs text-[#64748B]">• Created by {project.studentName}</span>
              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">{project.title}</h2>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Technologies & Architecture</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-lg bg-slate-100 text-slate-800 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
