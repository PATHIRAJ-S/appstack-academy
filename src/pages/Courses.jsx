import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import FinalCTA from '../sections/FinalCTA';
import { courses } from '../data/courses';

const categories = ["All", "Full Stack", "Frontend", "Programming", "Design", "Marketing"];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Explore Courses | AppStack Academy';
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20">
      {/* Banner */}
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            APPSTACK CURRICULUMS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Master Job-Ready <span className="text-brand-gradient">Tech Skills</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Choose a course track designed around practical building, real-world projects, live mentorship, and verifiable certification.
          </p>
        </div>
      </section>

      {/* Filter & Search Controls */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
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

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses or technologies..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200/60">
              <p className="text-lg font-semibold text-slate-700 mb-2">No courses found matching your filter.</p>
              <p className="text-sm text-slate-500 mb-4">Try adjusting your search term or select a different category filter.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Courses;
