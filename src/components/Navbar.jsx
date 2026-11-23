import React, { useState, useEffect } from 'react';
import APLogo from '../assets/AP-Logo.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  /*   { name: 'Student Projects', path: '/student-projects' }, */
  /*   { name: 'Internship', path: '/internship' }, */
  { name: 'Testimonials', path: '/testimonials' },
  /*   { name: 'Achievements', path: '/achievements' }, */
  /*   { name: 'Blog', path: '/blog' }, */
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openEnquiry } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'glass-nav shadow-sm py-3 border-b border-slate-200/60'
        : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex w-54 max-sm:w-44">
          <div className=" flex items-center justify-center">
            <img
              src={APLogo}
              alt="AppStack Academy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 relative ${isActive
                  ? 'text-[#2563EB] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#2563EB] hover:bg-slate-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2563EB] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => openEnquiry()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          {/*   <button
            onClick={() => openEnquiry()}
            className="sm:hidden px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold"
          >
            Enquire
          </button> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-md mx-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive
                      ? 'bg-blue-50 text-[#2563EB]'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                {/* <Link
                  to="/certificate-verification"
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Verify Certificate
                </Link> */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
