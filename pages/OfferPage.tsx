import React from 'react';
import DocumentHero from '../components/DocumentHero';
import OfferHeader from '../components/documents/OfferHeader';
import OfferIntro from '../components/documents/OfferIntro';
import OfferSection1 from '../components/documents/OfferSection1';
import OfferSection2 from '../components/documents/OfferSection2';
import OfferSection3 from '../components/documents/OfferSection3';
import OfferSection4 from '../components/documents/OfferSection4';
import OfferSection5 from '../components/documents/OfferSection5';
import OfferSection6 from '../components/documents/OfferSection6';

const OfferPage: React.FC = () => {
  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      <DocumentHero title="Публичная оферта" />
      <div className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-xl -mt-20 md:-mt-32 relative z-10">
        <OfferHeader />
        <OfferIntro />
        <OfferSection1 />
        <OfferSection2 />
        <OfferSection3 />
        <OfferSection4 />
        <OfferSection5 />
        <OfferSection6 />
        </div>
      </div>
    </div>
  );
};

export default OfferPage;