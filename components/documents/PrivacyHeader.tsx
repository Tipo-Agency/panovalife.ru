import React from 'react';

const PrivacyHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-syne text-4xl md:text-6xl font-bold uppercase text-[#1A262A] mb-4 leading-tight">
        СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ И БИОМЕТРИЧЕСКИХ ДАННЫХ
      </h1>
      <p className="text-lg text-[#1A262A]/80 font-bold mb-2">
        (в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ)
      </p>
      <p className="text-lg text-[#1A262A] leading-relaxed">
        Клиент принимает решение о предоставлении своих персональных и биометрических данных Индивидуальному предпринимателю Донских Сергею Геннадиевичу ИНН   272104237135 ОГРНИП 304272103400040, (далее – «Оператор персональных данных») и даю согласие на их обработку свободно, своей волей и в своем интересе на указанных ниже условиях:
      </p>
    </div>
  );
};

export default PrivacyHeader;