import React, { useState } from 'react';
import { Search, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CertificateCard from '../components/CertificateCard';
import { certificatesDatabase } from '../data/certificates';

const CertificateVerificationSection = () => {
  const [certIdInput, setCertIdInput] = useState('');
  const [searchedResult, setSearchedResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const query = certIdInput.trim().toUpperCase();

    if (!query) {
      setErrorMsg('Please enter a Certificate ID.');
      setSearchedResult(null);
      setHasSearched(false);
      return;
    }

    const found = certificatesDatabase.find(c => c.certificateId.toUpperCase() === query);

    setHasSearched(true);
    if (found) {
      setSearchedResult(found);
      setErrorMsg('');
    } else {
      setSearchedResult(null);
      setErrorMsg('Certificate not found. Please check the Certificate ID.');
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CREDENTIAL AUTHENTICATION"
          title="Verify Your AppStack Certificate"
          highlightText="AppStack Certificate"
          subtitle="Instant online verification for employers, HR recruiters, and academic institutions."
        />

        {/* Verification Form Card */}
        <div className="max-w-2xl mx-auto mt-10 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md">
          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Enter Certificate Verification ID
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={certIdInput}
                  onChange={(e) => setCertIdInput(e.target.value)}
                  placeholder="e.g. APP-2026-001"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all uppercase"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-md shadow-blue-500/20 shrink-0 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Certificate</span>
              </button>
            </div>

            {/* Quick Demo Sample IDs */}
            <div className="pt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Try Sample Demo IDs:
              </span>
              {certificatesDatabase.map(c => (
                <button
                  type="button"
                  key={c.certificateId}
                  onClick={() => {
                    setCertIdInput(c.certificateId);
                    setSearchedResult(c);
                    setErrorMsg('');
                    setHasSearched(true);
                  }}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-blue-600 font-mono font-medium hover:bg-blue-50 transition-colors"
                >
                  {c.certificateId}
                </button>
              ))}
            </div>
          </form>

          {/* Error Message */}
          {errorMsg && (
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Certificate Card Output Result */}
        {hasSearched && searchedResult && (
          <div className="mt-12">
            <CertificateCard certificate={searchedResult} />
          </div>
        )}

      </div>
    </section>
  );
};

export default CertificateVerificationSection;
