import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquarePlus, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { testimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="STUDENT FEEDBACK"
          title="What Our Students Say"
          highlightText="Our Students Say"
          subtitle="Read honest reviews and learning experiences shared by AppStack Academy students and graduates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/testimonials">
            <Button size="md" variant="outline">
              View All Student Feedback
            </Button>
          </Link>
          <Link to="/feedback">
            <Button size="md" variant="secondary" icon={MessageSquarePlus} iconPosition="left">
              Share Your Experience →
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
