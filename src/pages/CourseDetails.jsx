import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, BarChart, Users, Star, CheckCircle2, ChevronDown, ChevronUp, Code2, Award, Briefcase, HelpCircle, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import { useEnquiry } from '../context/EnquiryContext';
import { courses } from '../data/courses';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} | AppStack Academy`;
    }
  }, [course]);

  if (!course) {
    return (
      <div className="pt-36 pb-20 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Course Not Found</h2>
        <p className="text-slate-64748B text-sm mb-6">The requested course track does not exist or has been updated.</p>
        <Link to="/courses">
          <Button icon={ArrowLeft} iconPosition="left">Back to All Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </div>

      {/* Course Hero Banner */}
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-[#2563EB] border border-blue-100">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
                    {course.badge}
                  </span>
                )}
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{course.rating} Rating</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                {course.fullDescription}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-xs text-[#64748B] block">Duration</span>
                  <span className="font-bold text-slate-800 text-sm">{course.duration}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-xs text-[#64748B] block">Skill Level</span>
                  <span className="font-bold text-slate-800 text-sm">{course.level}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 col-span-2 sm:col-span-1">
                  <span className="text-xs text-[#64748B] block">Students Enrolled</span>
                  <span className="font-bold text-slate-800 text-sm">{course.studentsCount}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Technologies Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-[#2563EB] text-xs font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl space-y-6">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
                  <span className="text-xs text-[#64748B] uppercase font-bold tracking-wider">Format</span>
                  <p className="text-base font-bold text-[#2563EB] mt-0.5">{course.format}</p>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Live Interactive Mentorship Sprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{course.projectsCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>QR-Verifiable Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Career & Internship Support</span>
                  </div>
                </div>

                <Button
                  fullWidth
                  size="lg"
                  onClick={() => openEnquiry(course.title)}
                >
                  Enquire About Next Batch
                </Button>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Limited seats per cohort for high mentor attention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-16">

            {/* Modules Accordion */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#2563EB]" />
                <span>Course Modules & Curriculum</span>
              </h2>

              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setActiveModuleIndex(activeModuleIndex === idx ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-base">{mod.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-normal">
                        <span className="hidden sm:inline bg-slate-100 px-2.5 py-1 rounded">{mod.duration}</span>
                        {activeModuleIndex === idx ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeModuleIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50"
                        >
                          <ul className="space-y-2 text-sm text-slate-700">
                            {mod.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#2563EB] font-bold">•</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Projects Built */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#7C3AED]" />
                <span>Projects Built in This Course</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.projectsBuilt.map((p, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                    <h3 className="text-lg font-bold text-[#0F172A]">{p.name}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded bg-purple-50 text-[#7C3AED] text-xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Who Can Join */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Skills You Will Master</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {course.skillsAcquired.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Who Should Enroll</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {course.whoCanJoin.map((w, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Target Career Roles</h3>
              <div className="flex flex-wrap gap-2">
                {course.careerOpportunities.map((role, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-200 text-[#2563EB] font-bold text-xs shadow-xs">
                    💼 {role}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {course.faqs && (
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#06B6D4]" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-3">
                  {course.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-4">
                      <button
                        onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                        className="w-full text-left font-bold text-slate-900 flex justify-between items-center text-sm"
                      >
                        <span>{faq.question}</span>
                        {activeFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {activeFaqIndex === idx && (
                        <p className="mt-3 text-xs text-[#64748B] leading-relaxed border-t border-slate-100 pt-2">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Bottom Sticky Enquire CTA Banner */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Join {course.title}?</h2>
          <p className="text-slate-400 text-sm mb-6">Take the first step toward mastering real-world skills and building your tech portfolio.</p>
          <Button size="lg" variant="primary" icon={PhoneCall} iconPosition="left" onClick={() => openEnquiry(course.title)}>
            Enquire Now for Enrollment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
