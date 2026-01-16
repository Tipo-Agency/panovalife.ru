import React from 'react';

interface DocumentHeroProps {
  title: string;
}

const DocumentHero: React.FC<DocumentHeroProps> = ({ title }) => {
  return (
    <section className="bg-[#1A262A] text-white py-24 md:py-32 px-6 md:px-12 -mt-16 md:-mt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-syne text-5xl md:text-7xl font-bold uppercase text-white leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default DocumentHero;