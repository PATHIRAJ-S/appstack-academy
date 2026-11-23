import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import FinalCTA from '../sections/FinalCTA';
import { courses } from '../data/courses';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '' // Honeypot field for bot spam prevention
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    document.title = 'Contact & Admissions | AppStack Academy';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validate = () => {
    const newErrors = {};

    // Full Name validation (required)
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email Address validation (required)
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    // Phone Number validation (optional, but validated if provided)
    if (formData.phone.trim()) {
      const cleanPhone = formData.phone.trim();
      if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.0-9]{7,15}$/.test(cleanPhone)) {
        newErrors.phone = 'Enter a valid phone number';
      }
    }

    // Subject validation (required)
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject must be at least 2 characters';
    }

    // Message validation (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while in flight
    if (isSubmitting) return;

    setSubmitError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setIsSubmitted(true);
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          website: ''
        });
        setErrors({});
        setSubmitError('');
      } else {
        setSubmitError(
          data?.message || 'Unable to send your message. Please try again.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitError('Unable to send your message. Please check your network connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Banner */}
      <section className="py-14 bg-hero-glow border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mt-4 mb-4">
            Contact <span className="text-brand-gradient">AppStack Academy</span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Have questions about course tracks, batch schedules, or career guidance? Our admissions team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">Admissions & Campus Hub</h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Support</h4>
                    <p className="text-sm font-bold text-[#0F172A] mt-0.5">+91 98765 43210</p>
                    <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp Desk</h4>
                    <p className="text-sm font-bold text-[#0F172A] mt-0.5">+91 98765 43210</p>
                    <p className="text-xs text-slate-500">Instant chat & course brochure request</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Admissions</h4>
                    <p className="text-sm font-bold text-[#0F172A] mt-0.5">admissions@appstackacademy.com</p>
                    <p className="text-xs text-slate-500">24-hour response time guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Us Form */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Send an Enquiry</h2>
              <p className="text-sm text-[#64748B] mb-6">
                Fill out the form below and an AppStack academic advisor will respond shortly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-[#0F172A]">Enquiry Sent Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been sent successfully. Thank you for contacting AppStack Academy. Our admissions team will review your message and reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        website: ''
                      });
                      setSubmitError('');
                      setErrors({});
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-500/20"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Submission Error Banner */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Failed</p>
                        <p className="text-xs text-red-600 mt-0.5">{submitError}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Honeypot Spam Protection Field (invisible to legitimate users) */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      top: '-9999px',
                      opacity: 0,
                      height: 0,
                      width: 0,
                      zIndex: -1,
                      pointerEvents: 'none'
                    }}
                  >
                    <label htmlFor="appstack_contact_website">Do not fill this field</label>
                    <input
                      type="text"
                      id="appstack_contact_website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${errors.name
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-blue-500'
                        }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${errors.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-blue-500'
                          }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${errors.phone
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-blue-500'
                          }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Subject with Datalist Suggestions */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      list="subject-suggestions"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Admission Inquiry for Full Stack Track"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${errors.subject
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-blue-500'
                        }`}
                    />
                    <datalist id="subject-suggestions">
                      {courses.map((c) => (
                        <option key={c.id} value={`Course Admission: ${c.title}`} />
                      ))}
                      <option value="Weekend Batch Timings & Schedule" />
                      <option value="Fees, Installments & Scholarship Assistance" />
                      <option value="Career Counseling & Placement Support" />
                      <option value="Corporate / Team Training Inquiry" />
                      <option value="General Inquiry" />
                    </datalist>
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your learning background, career goals, or any specific questions..."
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed ${errors.message
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-blue-500'
                        }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button with Loading Spinner & Duplicate Protection */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Contact;
