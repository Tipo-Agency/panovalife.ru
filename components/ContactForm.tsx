import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { sendLead } from '../services/leadService';

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
      const ctCid = (window as any).ct?.client?.id || '';

      // Validate phone (should be 11 digits for Russia)
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
        throw new Error('Введите корректный номер телефона');
      }

      // Prepare lead data for Calltouch
      const leadData = {
        name: formData.name.trim(),
        phone: phoneDigits,
        email: formData.email || '',
        comment: 'Новая заявка с сайта panovalife.ru',
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_term: utmTerm || undefined,
        utm_content: utmContent || undefined,
        ga_cid: gaCid || undefined,
        ym_cid: ymCid || undefined,
        ct_cid: ctCid || undefined,
      };

      // Send lead to Calltouch
      const result = await sendLead(leadData);
      
      if (!result.success) {
        console.warn('Failed to send lead to Calltouch:', result.error);
        // Don't fail form submission if Calltouch fails
      }
      
      // Immediately redirect to thank you page
      setFormData({ name: '', phone: '', email: '' });
      onClose();
      window.history.pushState({}, '', '/submitted');
      window.dispatchEvent(new PopStateEvent('popstate'));
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

  // Prevent navigation when clicking inside modal, but allow input interactions
  useEffect(() => {
    if (!isOpen) return;

    const preventNavigation = (e: Event) => {
      const target = e.target as HTMLElement;
      // Only prevent navigation for links INSIDE the modal content
      // Don't prevent default behavior for inputs, buttons, or close button
      const modalContent = target.closest('.contact-form-modal-content');
      if (modalContent) {
        const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
        const isButton = target.tagName === 'BUTTON';
        const isCloseButton = target.closest('button[aria-label="Закрыть"]');
        const isLink = target.tagName === 'A';
        
        // Only block links that might navigate INSIDE the modal, not inputs or buttons
        // Allow links that have onClick handlers (they handle navigation themselves)
        if (!isInput && !isButton && !isCloseButton && isLink && target.getAttribute('onClick') === null) {
          // Only prevent if it's a link without onClick handler inside modal
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
    };

    // Use capture phase to catch events before they bubble
    document.addEventListener('click', preventNavigation, true);

    return () => {
      document.removeEventListener('click', preventNavigation, true);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      style={{ pointerEvents: 'auto', cursor: 'default' }}
    >
      <div 
        className="contact-form-modal-content bg-white rounded-[32px] p-8 md:p-12 max-w-md w-full shadow-2xl"
        style={{ pointerEvents: 'auto', cursor: 'default', position: 'relative', zIndex: 10001 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-8">
          <h2 className="font-syne text-3xl md:text-4xl font-bold uppercase text-[#1A262A]">Создайте личную фитнес-карту</h2>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Закрыть"
            className="w-10 h-10 rounded-full bg-[#F2F5F6] hover:bg-[#D4F058] flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" onClick={(e) => e.stopPropagation()}>
          <div onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              value={formData.name}
              onChange={(e) => {
                e.stopPropagation();
                setFormData({ ...formData, name: e.target.value });
              }}
              onClick={(e) => e.stopPropagation()}
              onFocus={(e) => e.stopPropagation()}
              required
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
              style={{ cursor: 'text' }}
            />
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            <input
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={formData.phone}
              onChange={(e) => {
                e.stopPropagation();
                handlePhoneChange(e);
              }}
              onClick={(e) => e.stopPropagation()}
              onFocus={(e) => {
                e.stopPropagation();
                if (!formData.phone) {
                  setFormData({ ...formData, phone: '+7' });
                }
              }}
              onKeyDown={(e) => {
                e.stopPropagation();
                // Prevent deletion of +7
                if (e.key === 'Backspace' && formData.phone === '+7') {
                  e.preventDefault();
                }
              }}
              required
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
              style={{ cursor: 'text' }}
            />
          </div>

          {/* Error Message Display */}
          {message && message.type === 'error' && (
            <div className="p-4 rounded-[24px] text-sm font-medium transition-all bg-red-100 text-red-700 border border-red-300">
              {message.text}
            </div>
          )}

          <div onClick={(e) => e.stopPropagation()}>
            <input
              type="email"
              placeholder="Email (необязательно)"
              value={formData.email}
              onChange={(e) => {
                e.stopPropagation();
                setFormData({ ...formData, email: e.target.value });
              }}
              onClick={(e) => e.stopPropagation()}
              onFocus={(e) => e.stopPropagation()}
              className="w-full bg-[#F2F5F6] border border-[#1A262A]/5 rounded-full py-4 px-6 text-base text-[#1A262A] font-medium placeholder:text-[#1A262A]/40 focus:outline-none focus:border-[#D4F058] focus:bg-white transition-all"
              style={{ cursor: 'text' }}
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
            onClick={(e) => e.stopPropagation()}
            className="w-full py-4 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ContactForm;
