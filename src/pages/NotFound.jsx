import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | AppStack Academy';
  }, []);

  return (
    <div className="pt-36 pb-24 flex items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-extrabold text-[#0F172A] tracking-tight mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-3">Page Not Found</h2>
        <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button icon={ArrowLeft} iconPosition="left">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
