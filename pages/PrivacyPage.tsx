import React from 'react';
import DocumentHero from '../components/DocumentHero';
import PrivacyHeader from '../components/documents/PrivacyHeader';
import PrivacyP1 from '../components/documents/PrivacyP1';
import PrivacyP2 from '../components/documents/PrivacyP2';
import PrivacyP3 from '../components/documents/PrivacyP3';
import PrivacyP4 from '../components/documents/PrivacyP4';
import PrivacyFooter from '../components/documents/PrivacyFooter';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      <DocumentHero title="Политика конфиденциальности" />
      <div className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-xl -mt-20 md:-mt-32 relative z-10">
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