import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects, projectCategories } from '../data/projects';

const StudentProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="PORTFOLIO SHOWCASE"
          title="Featured Student Capstone Projects"
          highlightText="Student Capstone"
          subtitle="Explore production-ready web applications, tools, and portfolios designed and built by AppStack Academy students."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/student-projects">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              View All Student Projects
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default StudentProjectsSection;
