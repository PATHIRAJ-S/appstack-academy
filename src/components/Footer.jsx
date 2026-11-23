import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                APPSTACK <span className="text-[#06B6D4]">ACADEMY</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-cyan-400">
              Learn • Build • Get Certified • Grow Your Career
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Modern technology training institute empowering students, graduates, and professionals with hands-on coding, production projects, internships, and career coaching.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#2563EB] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-pink-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-[#2563EB] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              </li>
              {/*   <li>
                <Link to="/student-projects" className="hover:text-white transition-colors">Student Projects</Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-white transition-colors">Internship Program</Link>
              </li> */}
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Student Feedback</span>
                  <ArrowUpRight className="w-3 h-3 text-purple-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Hub */}
          {/*   <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-[#7C3AED] pl-2.5">
              Student Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">

              <li>
                <Link to="/certificate-verification" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verify Certificate</span>
                </Link>
              </li> 
               <li>
                <Link to="/achievements" className="hover:text-white transition-colors">Student Success Wall</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Campus Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Articles & Guides</Link>
              </li> 
            </ul>
          </div> */}

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-[#06B6D4] pl-2.5">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <a
                  href="tel:+919500919946"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 95009 19946
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <a
                  href="https://wa.me/919500919946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 95009 19946
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                <a
                  href="mailto:admissions@appstackacademy.com"
                  className="break-all hover:text-purple-400 transition-colors"
                >
                  admissions@appstackacademy.com
                </a>
              </li>

              {/*  <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>AppStack Tech Tower, Cyber City, Tech Hub Campus, India</span>
              </li> */}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 AppStack Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/certificate-verification" className="hover:text-slate-300 transition-colors">Certificate Verification</Link>
            <Link to="/feedback" className="hover:text-slate-300 transition-colors">Student Review Form</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Admissions Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
