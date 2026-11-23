import React from 'react';
import StatCard from '../components/StatCard';
import { statsData } from '../data/stats';

const Stats = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
