import React, { useEffect } from 'react';
import CertificateVerificationSection from '../sections/CertificateVerificationSection';
import FinalCTA from '../sections/FinalCTA';

const CertificateVerification = () => {
  useEffect(() => {
    document.title = 'Certificate Verification | AppStack Academy';
  }, []);

  return (
    <div className="pt-24">
      <CertificateVerificationSection />
      <FinalCTA />
    </div>
  );
};

export default CertificateVerification;
