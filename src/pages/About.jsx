import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Users, ShieldCheck, Heart, Laptop, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FinalCTA from '../sections/FinalCTA';

const coreValues = [
  {
    icon: Target,
    title: "Practical-First Approach",
    desc: "We prioritize writing actual code, designing real systems, and deploying working software over passive lecture memorization."
  },
  {
    icon: Compass,
    title: "Industry Relevance",
    desc: "Our curriculums are continuously updated to reflect modern tools, frameworks, and engineering standards used by top tech teams."
  },
  {
    icon: Users,
    title: "Dedicated Mentorship",
    desc: "Students receive continuous 1-on-1 guidance, pull request code reviews, and project feedback from practicing senior engineers."
  },
  {
    icon: ShieldCheck,
    title: "Verifiable Credibility",
    desc: "Every certificate awarded by AppStack Academy features instant online QR verification for employer authenticity."
  }
];

const mentors = [
  {
    name: "Vikramaditya Sen",
    role: "Lead Full Stack Architect",
    exp: "12+ Years Experience in MERN & Cloud Architecture",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Dr. Sunita Rao",
    role: "Head of Python & AI Programs",
    exp: "10+ Years in Backend Engineering & Data Analytics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Karan Johar",
    role: "Senior UI/UX & Frontend Mentor",
    exp: "8+ Years Product Design at Tech Unicorns",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  }
];

const About = () => {
  useEffect(() => {
    document.title = 'About Us | AppStack Academy';
  }, []);

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="py-16 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            ABOUT APPSTACK ACADEMY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Empowering the Next Generation of <span className="text-brand-gradient">Tech Leaders</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            AppStack Academy was founded with a clear mission: to eliminate the gap between theoretical college education and real-world software engineering expectations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                OUR FOUNDATION
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] leading-tight">
                Building Real Skills for Modern Digital Careers
              </h2>
              <p className="text-slate-64748B text-base leading-relaxed">
                At AppStack Academy, we believe that software engineering is best learned by building. We have redesigned technical training from the ground up: replacing long theoretical slides with live coding labs, production capstones, code reviews, and QR-verifiable certifications.
              </p>
              <p className="text-slate-64748B text-base leading-relaxed">
                Whether you are a college student aiming for your first tech job, a graduate looking to upskill, or a working professional switching tracks to web development, AppStack Academy provides the environment and guidance to help you succeed.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                alt="AppStack Mentors & Students in Code Workshop"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR CORE PRINCIPLES"
            title="Values That Drive AppStack Academy"
            highlightText="Values That Drive"
            subtitle="The principles that guide our curriculum design, mentor interaction, and student career outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{val.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EXPERT FACULTY"
            title="Learn Directly from Industry Practitioners"
            highlightText="Industry Practitioners"
            subtitle="Our mentors bring years of software development experience from leading technology companies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-center">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-white shadow-md"
                />
                <h3 className="text-xl font-bold text-[#0F172A]">{mentor.name}</h3>
                <p className="text-sm font-semibold text-[#2563EB] mb-1">{mentor.role}</p>
                <p className="text-xs text-[#64748B]">{mentor.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default About;
