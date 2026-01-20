import React, { useState, useEffect } from 'react';

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
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Block body scroll when form is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Phone mask for +7 (Russia)
  const formatPhone = (value: string) => {
    // Remove all non-digits
    let digits = value.replace(/\D/g, '');
    
    // If starts with 8, replace with 7
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    }
    
    // If empty or starts with +7, handle appropriately
    if (digits.length === 0) return '';
    
    // If doesn't start with 7, add 7
    if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }
    
    // Limit to 11 digits (7 + 10)
    digits = digits.slice(0, 11);
    
    // Format: +7 (XXX) XXX-XX-XX
    if (digits.length <= 1) return '+7';
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatPhone(inputValue);
    setFormData({ ...formData, phone: formatted });
    setMessage(null); // Clear message on input change
  };

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

      // Validate phone (should be 11 digits for Russia)
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
        throw new Error('Введите корректный номер телефона');
      }

      const payload = {
        name: firstName,
        last_name: lastName,
        phone: phoneDigits,
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

      // Request to 1C API with no-cors (CORS not allowed by server)
      const response = await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/474c4e2b-9fcd-49a6-aabd-b3e1fc946070', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Use no-cors because server doesn't allow CORS
      });

      // With no-cors, we can't read response, but request is sent
      console.log('Request sent (no-cors mode)');
      
      // Show success message
      setMessage({ type: 'success', text: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.' });
      setFormData({ name: '', phone: '', email: '' });
      
      // Close form after 2 seconds
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 2000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.message || 'Неизвестная ошибка';
      setMessage({ 
        type: 'error', 
        text: `Произошла ошибка: ${errorMessage}. Попробуйте еще раз или позвоните нам по телефону +7 (4212) 47-90-79.` 
      });
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
              placeholder="+7 (XXX) XXX-XX-XX"
              value={formData.phone}
              onChange={handlePhoneChange}
              onFocus={(e) => {
                if (!formData.phone) {
                  setFormData({ ...formData, phone: '+7' });
                }
              }}
              onKeyDown={(e) => {
                // Prevent deletion of +7
                if (e.key === 'Backspace' && formData.phone === '+7') {
                  e.preventDefault();
                }
              }}
              required
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
            />
          </div>

          {/* Message Display */}
          {message && (
            <div className={`p-4 rounded-[24px] text-sm font-medium transition-all ${
              message.type === 'success' 
                ? 'bg-[#D4F058] text-[#1A262A]' 
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}>
              {message.text}
            </div>
          )}

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
            <a 
              href="/privacy" 
              onClick={(e) => {
                e.preventDefault();
                onClose();
                window.history.pushState({}, '', '/privacy');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="text-[#1A262A] underline hover:text-[#D4F058] transition-colors"
            >
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
