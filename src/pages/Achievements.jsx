import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import AchievementCard from '../components/AchievementCard';
import FinalCTA from '../sections/FinalCTA';
import { achievements, achievementCategories } from '../data/achievements';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Student Success Wall | AppStack Academy';
  }, []);

  const filtered = activeCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
            STUDENT SUCCESS WALL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Celebrating <span className="text-brand-gradient">Student Excellence</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Highlighting remarkable capstone projects, certifications, hackathons, workshops, and career transitions achieved by AppStack students.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {achievementCategories.map((cat) => (
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
            {filtered.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Achievements;
