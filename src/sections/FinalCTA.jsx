import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import { useEnquiry } from '../context/EnquiryContext';

const FinalCTA = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/40 via-[#7C3AED]/40 to-[#06B6D4]/30 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-white/5 backdrop-blur-xl p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>START YOUR TECH CAREER TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Learn practical skills, build portfolio-ready projects, and take the next step toward your software engineering career with AppStack Academy.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                Explore Courses
              </Button>
            </Link>
            <Button
              size="lg"
              variant="secondary"
              icon={PhoneCall}
              iconPosition="left"
              onClick={() => openEnquiry('Final CTA Direct Enquiry')}
            >
              Enquire Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
