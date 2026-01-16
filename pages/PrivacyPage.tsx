import React, { useEffect } from 'react';
import PrivacyHeader from '../components/documents/PrivacyHeader';
import PrivacyP1 from '../components/documents/PrivacyP1';
import PrivacyP2 from '../components/documents/PrivacyP2';
import PrivacyP3 from '../components/documents/PrivacyP3';
import PrivacyP4 from '../components/documents/PrivacyP4';
import PrivacyFooter from '../components/documents/PrivacyFooter';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    // Mark page as light theme for navbar
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className="bg-[#F2F5F6] min-h-screen pt-32">
      <div className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-xl">
          <PrivacyHeader />
        <PrivacyP1 />
        <PrivacyP2 />
        <PrivacyP3 />
        <PrivacyP4 />
        <PrivacyFooter />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;