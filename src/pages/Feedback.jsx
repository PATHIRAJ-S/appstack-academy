import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FinalCTA from '../sections/FinalCTA';
import { courses } from '../data/courses';

const Feedback = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    batch: '',
    trainer: '',
    rating: 5,
    experience: '',
    likedAspects: '',
    suggestions: '',
    publishConsent: true
  });

  const [hoveredStar, setHoveredStar] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Student Feedback Form | AppStack Academy';
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Full name is required';
    if (!formData.course) newErrors.course = 'Please select your course';
    if (!formData.batch.trim()) newErrors.batch = 'Batch details required (e.g. 2025-Q4)';
    if (!formData.experience.trim()) newErrors.experience = 'Please describe your training experience';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /* 
      Frontend data submission handler. 
      Ready to connect to Supabase, Firebase, or a custom REST API.
    */
    console.log('Student Feedback Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
            STUDENT FEEDBACK SYSTEM
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Share Your AppStack <span className="text-brand-gradient">Learning Experience</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Your feedback directly helps us continuously improve our curriculum, mentor guidance, and capstone project workflows.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h2 className="text-3xl font-extrabold text-[#0F172A]">
                  Thank you for your valuable feedback!
                </h2>
                <p className="text-slate-600 text-base max-w-md mx-auto">
                  We appreciate your time and dedication. Your review helps future students make informed decisions.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: '',
                        course: '',
                        batch: '',
                        trainer: '',
                        rating: 5,
                        experience: '',
                        likedAspects: '',
                        suggestions: '',
                        publishConsent: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.studentName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                    />
                    {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Course Completed *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.course ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                    >
                      <option value="">Select Course Track</option>
                      {courses.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                    {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Batch Year / Quarter *
                    </label>
                    <input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      placeholder="e.g. Batch 2025-Q4"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.batch ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                    />
                    {errors.batch && <p className="text-xs text-red-500 mt-1">{errors.batch}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Lead Trainer / Mentor Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="trainer"
                      value={formData.trainer}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Sen"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Interactive Star Rating */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Overall Rating (1–5 Stars) *
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 w-fit">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="p-1 focus:outline-none transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= (hoveredStar || formData.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">
                      {formData.rating} out of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Training Experience Summary *
                  </label>
                  <textarea
                    name="experience"
                    rows="4"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Describe your practical learning experience, curriculum depth, and mentor support..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.experience ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  />
                  {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What did you like most?
                    </label>
                    <textarea
                      name="likedAspects"
                      rows="3"
                      value={formData.likedAspects}
                      onChange={handleChange}
                      placeholder="Capstone projects, live code reviews, labs..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Suggestions for Improvement
                    </label>
                    <textarea
                      name="suggestions"
                      rows="3"
                      value={formData.suggestions}
                      onChange={handleChange}
                      placeholder="Any additional topics or workshop recommendations..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="publishConsent"
                    name="publishConsent"
                    checked={formData.publishConsent}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-[#2563EB] focus:ring-blue-500 border-slate-300"
                  />
                  <label htmlFor="publishConsent" className="text-xs text-slate-600">
                    I grant permission to AppStack Academy to display this review on the student testimonials wall.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Student Feedback</span>
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Feedback;
