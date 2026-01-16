import React from 'react';

const RulesHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-syne text-4xl md:text-6xl font-bold uppercase text-[#1A262A] mb-4 leading-tight">
        Правила посещения Клуба
      </h1>
      <p className="text-lg text-[#1A262A] leading-relaxed">
        Настоящие Правила посещения Клуба обязательны для исполнения всеми Членами Клуба, гостями Клуба, Сопровождающими лицами и иными третьими лицами (далее по тексту – Член Клуба) независимо от возраста. Настоящие Правила не являются исчерпывающими, так как Клуб вправе дополнять и изменять их в одностороннем порядке.
      </p>
    </div>
  );
};

export default RulesHeader;