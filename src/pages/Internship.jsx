import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, GitBranch, Rocket, Presentation, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FinalCTA from '../sections/FinalCTA';
import { useEnquiry } from '../context/EnquiryContext';

const features = [
  { icon: Layers, title: "Practical Live Projects", desc: "Work on actual business codebases and web applications with real requirements." },
  { icon: Users, title: "Individual & Team Sprints", desc: "Experience Agile team collaboration, sprint planning, and GitHub pull request reviews." },
  { icon: GitBranch, title: "GitHub Portfolio Development", desc: "Build a clean, documented GitHub repository history showcasing production commits." },
  { icon: Rocket, title: "Production Cloud Deployment", desc: "Deploy web applications live using Vercel, Netlify, Render, Docker, and AWS." },
  { icon: Presentation, title: "Architecture Presentations", desc: "Present your project design decisions before industry mentors during Capstone Defense." },
  { icon: FileText, title: "Complete Documentation", desc: "Learn to write clean README docs, API specifications, and architectural diagrams." }
];

const pipeline = [
  { step: "01", title: "Apply & Evaluation", text: "Submit your coursework for assessment by our academic leads." },
  { step: "02", title: "Cohort Onboarding", text: "Get assigned to a live project track with a dedicated senior mentor." },
  { step: "03", title: "Agile Building Sprints", text: "Execute weekly coding tasks, feature implementations, and API connections." },
  { step: "04", title: "Pull Request Reviews", text: "Receive line-by-line code feedback to refine performance and security." },
  { step: "05", title: "Demo Defense", text: "Present your working product and answer technical architecture questions." },
  { step: "06", title: "Credential Award", text: "Receive your Internship Completion Certificate with online QR verification." }
];

const Internship = () => {
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    document.title = 'Internship Program | AppStack Academy';
  }, []);

  return (
    <div className="pt-28 pb-20">
      {/* Banner */}
      <section className="py-16 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
            LIVE PROJECT INTERNSHIP
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Turn Learning Into <span className="text-brand-gradient">Experience</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Gain hands-on software development experience, collaborate in Agile teams, build production projects, and earn a QR-verifiable internship credential.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => openEnquiry('Internship Program Application')}
            >
              Apply for Internship Cohort
            </Button>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT YOU WILL DO"
            title="Comprehensive Practical Internship Experience"
            highlightText="Practical Internship"
            subtitle="Designed to mimic actual software company workflows and software development lifecycles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4 font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INTERNSHIP ROADMAP"
            title="The Step-by-Step Internship Pipeline"
            highlightText="Internship Pipeline"
            subtitle="From application to final project presentation and certificate award."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {pipeline.map((p, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-extrabold text-[#7C3AED] block mb-2">{p.step}</span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => openEnquiry('Internship Direct Application')}
            >
              Apply for Internship Now →
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Internship;
