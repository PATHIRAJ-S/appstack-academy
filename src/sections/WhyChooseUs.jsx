import React from 'react';
import { motion } from 'framer-motion';
import { Code, FolderKanban, Cpu, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const features = [
  {
    icon: Code,
    title: "Practical Learning",
    description: "Hands-on coding exercises, real-world development environments, and active problem solving instead of passive lectures.",
    badgeColor: "bg-blue-50 text-[#2563EB]",
    hoverBorder: "hover:border-blue-300"
  },
  {
    icon: FolderKanban,
    title: "Project-Based Training",
    description: "Build portfolio-ready applications reviewed by senior developers to demonstrate concrete software building capabilities.",
    badgeColor: "bg-purple-50 text-[#7C3AED]",
    hoverBorder: "hover:border-purple-300"
  },
  {
    icon: Cpu,
    title: "Industry-Relevant Skills",
    description: "Master modern frameworks (React, Node, Python, Figma, Tailwind) actively used by tech teams and modern digital enterprises.",
    badgeColor: "bg-cyan-50 text-[#06B6D4]",
    hoverBorder: "hover:border-cyan-300"
  },
  {
    icon: Rocket,
    title: "Career Support",
    description: "Receive comprehensive assistance on technical resume building, GitHub portfolio reviews, mock interviews, and career guidance.",
    badgeColor: "bg-emerald-50 text-emerald-600",
    hoverBorder: "hover:border-emerald-300"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="WHY APPSTACK ACADEMY"
          title="Designed for Real-World Tech Mastery"
          highlightText="Real-World"
          subtitle="We focus on what truly matters in tech education: hands-on coding, building production projects, and acquiring practical career readiness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm ${item.hoverBorder} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.badgeColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
