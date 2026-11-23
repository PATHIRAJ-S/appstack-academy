import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Printer, Share2, Award, Calendar, Clock, BookOpen } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl border-2 border-emerald-500/30 p-6 md:p-10 shadow-xl relative overflow-hidden max-w-3xl mx-auto"
      id="printable-certificate"
    >
      {/* Background Decorative Crest */}
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0F172A]">AppStack Credential Verification</h3>
            <p className="text-xs text-[#64748B]">Official Academic & Skill Record</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-300 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>✓ VERIFIED</span>
        </div>
      </div>

      {/* Certificate Body */}
      <div className="text-center py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">
          This certifies that
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3 text-brand-gradient">
          {certificate.studentName}
        </h1>

        <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto mb-6">
          has successfully completed the comprehensive training program and capstone evaluation in
        </p>

        <div className="inline-block px-6 py-2.5 rounded-2xl bg-blue-50 border border-blue-200/80 text-[#2563EB] font-bold text-xl md:text-2xl mb-8">
          {certificate.course}
        </div>

        {/* Certificate Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 mb-8 text-left text-xs">
          <div>
            <span className="text-slate-400 block mb-1">Duration</span>
            <span className="font-semibold text-slate-800 text-sm">{certificate.duration}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Completion Date</span>
            <span className="font-semibold text-slate-800 text-sm">{certificate.completionDate}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Evaluation Grade</span>
            <span className="font-semibold text-emerald-600 text-sm">{certificate.grade}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Certificate ID</span>
            <span className="font-mono font-bold text-[#2563EB] text-sm">{certificate.certificateId}</span>
          </div>
        </div>

        {/* Skills Verified */}
        {certificate.skillsVerified && (
          <div className="mb-8 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Verified Technical Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skillsVerified.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 text-xs rounded-lg bg-emerald-50 text-emerald-700 font-medium border border-emerald-100">
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* QR Code & Sign Off */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-4">
            {/* Simulated QR Code */}
            <div className="w-20 h-20 bg-slate-900 p-2 rounded-xl flex flex-col items-center justify-center text-white shrink-0 shadow-md">
              <div className="grid grid-cols-4 gap-1 w-full h-full p-1 bg-white rounded">
                <div className="bg-black col-span-2 row-span-2 rounded-sm" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="bg-black col-span-2 row-span-2 rounded-sm" />
              </div>
            </div>
            <div className="text-left text-xs">
              <p className="font-semibold text-slate-800">Scan QR Code to Verify</p>
              <p className="text-slate-500">Issued by AppStack Academy Certification Board</p>
              <p className="text-[11px] text-blue-600 font-mono mt-1">Status: Authenticated Record</p>
            </div>
          </div>

          <div className="flex items-center gap-3 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
