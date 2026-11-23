import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import FinalCTA from '../sections/FinalCTA';
import { projects, projectCategories } from '../data/projects';

const StudentProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Student Projects | AppStack Academy';
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Built by Our <span className="text-brand-gradient">Students</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Real software applications, landing pages, tools, and full stack portals built during AppStack training tracks.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default StudentProjects;
