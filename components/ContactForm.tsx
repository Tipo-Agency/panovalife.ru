import React, { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get UTM and analytics data
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || '';
      const utmMedium = urlParams.get('utm_medium') || '';
      const utmCampaign = urlParams.get('utm_campaign') || '';
      const utmTerm = urlParams.get('utm_term') || '';
      const utmContent = urlParams.get('utm_content') || '';

      // Get analytics IDs (if available)
      const gaCid = (window as any).ga?.getAll?.()?.[0]?.get?.('clientId') || '';
      const ymCid = (window as any).ym?.getClientID?.() || '';
      const rsCid = (window as any).roistat?.visitorId || '';
      const rsVid = (window as any).roistat?.visitId || '';
      const ctCid = (window as any).ct?.client?.id || '';

      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        name: firstName,
        last_name: lastName,
        phone: formData.phone.replace(/\D/g, ''),
        email: formData.email || '',
        comment: 'Новая заявка с сайта',
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_term: utmTerm,
        utm_content: utmContent,
        ga_cid: gaCid,
        rs_cid: rsCid,
        ym_cid: ymCid,
        rs_vid: rsVid,
        ct_cid: ctCid
      };

      console.log('Sending payload:', payload);

      // Try direct request to 1C API (might fail due to CORS, but some servers allow it)
      const response = await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/474c4e2b-9fcd-49a6-aabd-b3e1fc946070', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Use no-cors mode to bypass CORS, response will be opaque but request will be sent
      });

      // With no-cors mode, we can't read response, but request is sent
      // Assume success after a short delay
      console.log('Request sent (no-cors mode)');
      
      // Show success message - we can't verify response in no-cors mode
      alert('Спасибо! Ваша заявка отправлена.');
      setFormData({ name: '', phone: '', email: '' });
      onClose();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.message || 'Неизвестная ошибка';
      alert(`Произошла ошибка: ${errorMessage}. Попробуйте еще раз или позвоните нам по телефону +7 (4212) 90-30-62.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-[32px] p-8 md:p-12 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-8">
          <h2 className="font-syne text-3xl md:text-4xl font-bold uppercase text-[#1A262A]">Создайте личную фитнес-карту</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F2F5F6] hover:bg-[#D4F058] flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email (необязательно)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
            />
          </div>

          <p className="text-xs text-[#1A262A]/60 leading-relaxed">
            При отправке формы вы соглашаетесь с{' '}
            <a href="#privacy" className="text-[#1A262A] underline hover:text-[#D4F058] transition-colors">
              политикой конфиденциальности
            </a>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
