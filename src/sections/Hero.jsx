import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Laptop, Award, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { useEnquiry } from '../context/EnquiryContext';

const Hero = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-glow">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-4 h-4 text-[#2563EB] animate-pulse" />
              <span>WELCOME TO APPSTACK ACADEMY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Learn. Build.{' '}
              <span className="text-brand-gradient">Get Certified.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Practical technology training designed to help students build real-world skills, complete portfolio projects, and prepare for their careers.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link to="/courses">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Explore Courses
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openEnquiry('General Career Counseling')}
              >
                Talk to Us
              </Button>
            </div>

            {/* Feature Checklist Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0 border-t border-slate-200/60">
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hands-on Labs</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Live Mentorship</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real Projects</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>QR Verification</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Hero Visual & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Student/Dev Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="AppStack Academy Students Collaborating on Tech Projects"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-2.5 py-1 rounded bg-[#2563EB] text-[11px] font-bold uppercase tracking-wider">
                    Interactive Campus
                  </span>
                  <h3 className="text-lg font-bold mt-1">Real-World Tech Training</h3>
                  <p className="text-xs text-slate-300">From fundamentals to production deployment</p>
                </div>
              </div>

              {/* Floating Card 1: Real-World Projects */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 sm:-left-8 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Real-World Projects</h4>
                  <p className="text-[11px] text-[#64748B]">Portfolio Ready</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Practical Training */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 -right-6 sm:-right-8 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center font-bold">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Practical Training</h4>
                  <p className="text-[11px] text-[#64748B]">Hands-on Labs</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Certificate */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Verifiable Certificate</h4>
                  <p className="text-[11px] text-[#64748B]">QR Authenticated</p>
                </div>
              </motion.div>

              {/* Floating Card 4: Career Support */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Career Guidance</h4>
                  <p className="text-[11px] text-[#64748B]">Resume & Portfolio</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
