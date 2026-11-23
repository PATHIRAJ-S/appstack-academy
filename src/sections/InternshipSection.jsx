import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2, GitBranch, Layers, Rocket, Users, FileText, Presentation } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const processSteps = [
  { step: "01", name: "Apply", desc: "Submit your program work and apply for the internship cohort." },
  { step: "02", name: "Learn", desc: "Work with lead mentors on live project sprints and system design." },
  { step: "03", name: "Build", desc: "Collaborate on individual and team full-stack codebases." },
  { step: "04", name: "Review", desc: "Rigorous pull request code reviews and performance audits." },
  { step: "05", name: "Present", desc: "Demo your project architecture before industry mentors." },
  { step: "06", name: "Complete", desc: "Receive your Internship Completion Certificate and Recommendation." }
];

const highlights = [
  { icon: Layers, label: "Practical Real Projects" },
  { icon: Users, label: "Individual & Team Sprints" },
  { icon: GitBranch, label: "GitHub Portfolio Workflows" },
  { icon: Rocket, label: "Live Cloud Deployment" },
  { icon: Presentation, label: "Architecture Presentations" },
  { icon: FileText, label: "Full Project Documentation" }
];

const InternshipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-blue-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="INTERNSHIP PROGRAM"
          title="Turn Learning Into Experience"
          highlightText="Learning Into Experience"
          subtitle="Bridge the gap between academic learning and software industry expectations with our hands-on live project internship."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 text-center border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#0F172A]">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Process Timeline Flow */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl">
          <h3 className="text-xl font-bold text-center text-[#0F172A] mb-10">
            AppStack Internship Step-by-Step Pipeline
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white font-extrabold text-sm flex items-center justify-center mb-3 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1">{step.name}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center border-t border-slate-100 pt-8">
            <Link to="/internship">
              <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                Apply for Internship Program
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternshipSection;
