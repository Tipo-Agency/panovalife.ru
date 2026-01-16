import React from 'react';
import DocumentHero from '../components/DocumentHero';
import RulesHeader from '../components/documents/RulesHeader';
import RulesGeneralP1 from '../components/documents/RulesGeneralP1';
import RulesGeneralP2 from '../components/documents/RulesGeneralP2';
import RulesGeneralP3 from '../components/documents/RulesGeneralP3';
import RulesGeneralP4 from '../components/documents/RulesGeneralP4';
import RulesGeneralP5 from '../components/documents/RulesGeneralP5';
import RulesGeneralP6 from '../components/documents/RulesGeneralP6';
import RulesGeneralP7 from '../components/documents/RulesGeneralP7';
import RulesGeneralP8 from '../components/documents/RulesGeneralP8';
import RulesGeneralP9 from '../components/documents/RulesGeneralP9';
import RulesGeneralP10 from '../components/documents/RulesGeneralP10';
import RulesGeneralP11 from '../components/documents/RulesGeneralP11';
import RulesGeneralP12 from '../components/documents/RulesGeneralP12';
import RulesGeneralP13 from '../components/documents/RulesGeneralP13';
import RulesGeneralP14 from '../components/documents/RulesGeneralP14';
import RulesGeneralP15 from '../components/documents/RulesGeneralP15';
import RulesGeneralP16 from '../components/documents/RulesGeneralP16';
import RulesGeneralP17 from '../components/documents/RulesGeneralP17';
import RulesGeneralP18 from '../components/documents/RulesGeneralP18';
import RulesGeneralP19 from '../components/documents/RulesGeneralP19';
import RulesGeneralP20 from '../components/documents/RulesGeneralP20';
import RulesGeneralP21 from '../components/documents/RulesGeneralP21';
import RulesGeneralP22 from '../components/documents/RulesGeneralP22';
import RulesGeneralP23 from '../components/documents/RulesGeneralP23';
import RulesGeneralP24 from '../components/documents/RulesGeneralP24';
import RulesGeneralP25 from '../components/documents/RulesGeneralP25';
import RulesAdditionalServices from '../components/documents/RulesAdditionalServices';
import RulesStorage from '../components/documents/RulesStorage';
import RulesClasses from '../components/documents/RulesClasses';
import RulesGym from '../components/documents/RulesGym';
import RulesPool from '../components/documents/RulesPool';
import RulesPoolClasses from '../components/documents/RulesPoolClasses';
import RulesGuest from '../components/documents/RulesGuest';

const RulesPage: React.FC = () => {
  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      <DocumentHero title="Правила посещения" />
      <div className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-xl -mt-20 md:-mt-32 relative z-10">
          <RulesHeader />
        <RulesGeneralP1 />
        <RulesGeneralP2 />
        <RulesGeneralP3 />
        <RulesGeneralP4 />
        <RulesGeneralP5 />
        <RulesGeneralP6 />
        <RulesGeneralP7 />
        <RulesGeneralP8 />
        <RulesGeneralP9 />
        <RulesGeneralP10 />
        <RulesGeneralP11 />
        <RulesGeneralP12 />
        <RulesGeneralP13 />
        <RulesGeneralP14 />
        <RulesGeneralP15 />
        <RulesGeneralP16 />
        <RulesGeneralP17 />
        <RulesGeneralP18 />
        <RulesGeneralP19 />
        <RulesGeneralP20 />
        <RulesGeneralP21 />
        <RulesGeneralP22 />
        <RulesGeneralP23 />
        <RulesGeneralP24 />
        <RulesGeneralP25 />
        <RulesAdditionalServices />
        <RulesStorage />
        <RulesClasses />
        <RulesGym />
        <RulesPool />
        <RulesPoolClasses />
        <RulesGuest />
        </div>
      </div>
    </div>
  );
};

export default RulesPage;