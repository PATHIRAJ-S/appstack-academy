import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Code2, CheckCircle, Award, Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover & Enroll",
    description: "Choose a skill path aligned with your career goals and receive immediate access to learning materials."
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Hands-on Practical Training",
    description: "Learn core fundamentals through live mentor sessions, coding exercises, and active building sprints."
  },
  {
    number: "03",
    icon: Code2,
    title: "Build Capstone Projects",
    description: "Apply your skills to build real production-grade applications that solve actual business problems."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Code Reviews & Mentorship",
    description: "Get personalized 1-on-1 feedback on your GitHub pull requests from senior software engineers."
  },
  {
    number: "05",
    icon: Award,
    title: "Earn Course Certification",
    description: "Complete your evaluation and receive an industry-recognized AppStack Academy completion certificate."
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Internship & Career Growth",
    description: "Join the live project internship program, polish your resume, and prepare for tech job interviews."
  }
];

const LearningJourney = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="Your Step-by-Step Learning Journey"
          highlightText="Learning Journey"
          subtitle="From your first line of code to deploying full production web applications and advancing your career."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-[#7C3AED] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
