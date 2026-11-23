import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AchievementCard from '../components/AchievementCard';
import Button from '../components/Button';
import { achievements } from '../data/achievements';

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="STUDENT SUCCESS WALL"
          title="Our Student Achievements & Milestones"
          highlightText="Achievements & Milestones"
          subtitle="Celebrating excellence in capstone projects, certifications, hackathons, workshops, and career transitions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {achievements.slice(0, 3).map((item) => (
            <AchievementCard key={item.id} achievement={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/achievements">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Explore Full Student Success Wall
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
