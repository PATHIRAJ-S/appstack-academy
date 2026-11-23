import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import FinalCTA from '../sections/FinalCTA';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  useEffect(() => {
    document.title = 'Student Testimonials | AppStack Academy';
  }, []);

  return (
    <div className="pt-28 pb-20">
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            STUDENT REVIEWS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Student Experience & <span className="text-brand-gradient">Feedback</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Read honest feedback from students who completed coding bootcamps, capstones, and internships at AppStack Academy.
          </p>

          <div className="mt-8 flex justify-center">
            <Link to="/feedback">
              <Button size="lg" variant="secondary" icon={MessageSquarePlus} iconPosition="left">
                Share Your Experience →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Testimonials;
