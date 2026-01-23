/**
 * Сервис для отправки заявок в Calltouch API
 * Calltouch автоматически отправляет заявки в 1C через настроенный вебхук
 */

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  comment?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ga_cid?: string;
  ym_cid?: string;
  ct_cid?: string;
}

/**
 * Нормализует номер телефона (убирает все, кроме цифр)
 */
const normalizePhone = (phone: string): string => {
  // Убираем все, кроме цифр
  const digits = phone.replace(/\D/g, '');
  
  // Если начинается с 8, заменяем на 7
  if (digits.startsWith('8') && digits.length === 11) {
    return '7' + digits.slice(1);
  }
  
  // Если начинается с +7 или 7, оставляем как есть
  if (digits.startsWith('7')) {
    return digits;
  }
  
  // Если начинается с другого кода, добавляем 7
  if (digits.length === 10) {
    return '7' + digits;
  }
  
  return digits;
};

/**
 * Отправляет лид в Calltouch API
 * Calltouch автоматически отправляет заявки в 1C через настроенный вебхук
 */
export const sendLead = async (data: LeadData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Нормализуем телефон
    const normalizedPhone = normalizePhone(data.phone);
    if (!normalizedPhone || normalizedPhone.length < 10) {
      return { success: false, error: 'Пожалуйста, укажите корректный номер телефона' };
    }
    
    // Настройки Calltouch
    // ⚠️ ВАЖНО: Для каждого клуба нужно заменить calltouchSiteId!
    const calltouchSiteId = '52899'; // ← ЗДЕСЬ ЗАМЕНИТЬ НА НОВЫЙ SITE_ID
    const calltouchModId = '8qd6tqap'; // Mod ID счетчика из index.html
    
    // Получаем sessionId из Calltouch скрипта
    let calltouchSessionId = undefined;
    if (typeof window !== 'undefined' && (window as any).ct) {
      try {
        const ctParams = (window as any).ct('calltracking_params', calltouchModId);
        calltouchSessionId = ctParams?.sessionId;
      } catch (e) {
        // Игнорируем ошибку, sessionId не обязателен
      }
    }
    
    // Формируем данные для Calltouch
    const fio = data.name.trim() || 'Клиент';
    const calltouchData = new URLSearchParams();
    calltouchData.append('fio', fio);
    calltouchData.append('phoneNumber', normalizedPhone);
    calltouchData.append('email', data.email || '');
    calltouchData.append('subject', 'Заявка с сайта panovalife.ru');
    calltouchData.append('comment', data.comment || 'Новая заявка с сайта panovalife.ru');
    calltouchData.append('targetRequest', 'true');
    if (calltouchSessionId) {
      calltouchData.append('sessionId', calltouchSessionId);
    }
    if (typeof window !== 'undefined') {
      calltouchData.append('requestUrl', window.location.href);
    }
    
    // Добавляем UTM параметры, если есть
    if (data.utm_source) calltouchData.append('utm_source', data.utm_source);
    if (data.utm_medium) calltouchData.append('utm_medium', data.utm_medium);
    if (data.utm_campaign) calltouchData.append('utm_campaign', data.utm_campaign);
    if (data.utm_term) calltouchData.append('utm_term', data.utm_term);
    if (data.utm_content) calltouchData.append('utm_content', data.utm_content);
    
    // Отправляем в Calltouch
    try {
      const calltouchResponse = await fetch(`https://api.calltouch.ru/calls-service/RestAPI/requests/${calltouchSiteId}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: calltouchData.toString(),
      });
      
      if (!calltouchResponse.ok) {
        const errorText = await calltouchResponse.text().catch(() => '');
        console.error('[LeadService] Calltouch error:', calltouchResponse.status, errorText);
        return { success: false, error: 'Ошибка отправки заявки. Попробуйте позже.' };
      }
      
      await calltouchResponse.json().catch(() => null);
      console.log('[LeadService] Calltouch: заявка успешно отправлена');
    } catch (error: any) {
      console.error('[LeadService] Calltouch error:', error);
      return { success: false, error: 'Ошибка отправки заявки. Попробуйте позже.' };
    }
    
    // Отправляем событие в Calltouch (клиентское)
    if (typeof window !== 'undefined' && (window as any).ct) {
      try {
        (window as any).ct('event', 'form_submit');
      } catch (e) {
        console.warn('Failed to send Calltouch event:', e);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error sending lead to Calltouch:', error);
    return { success: false, error: 'Ошибка отправки заявки. Попробуйте позже.' };
  }
};
