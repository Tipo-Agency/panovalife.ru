/**
 * Сервис для отправки заявок в Calltouch
 * 
 * Для других клубов нужно изменить только calltouchSiteId ниже.
 * Токен НЕ нужен для заявок - они отправляются через JS API автоматически.
 */

interface LeadData {
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

interface SendLeadResult {
  success: boolean;
  error?: string;
}

/**
 * Отправка заявки в Calltouch через JavaScript API
 * 
 * Для других клубов: замените calltouchSiteId на новый site_id из личного кабинета Calltouch
 * Токен НЕ требуется - заявки отправляются автоматически через скрипт Calltouch
 */
export async function sendLead(data: LeadData): Promise<SendLeadResult> {
  // ⚠️ ВАЖНО: Для каждого клуба нужно заменить этот ID!
  // Site ID можно найти в личном кабинете Calltouch: Интеграции / Отправка данных во внешние системы / API / ID личного кабинета
  const calltouchSiteId = '52899'; // ← ЗДЕСЬ ЗАМЕНИТЬ НА НОВЫЙ SITE_ID

  // Валидация телефона
  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
    return { success: false, error: 'Invalid phone number format' };
  }

  try {
    // Получаем Calltouch API
    const ct = (window as any).ct;
    
    if (!ct) {
      console.warn('[LeadService] Calltouch script not loaded');
      return { success: false, error: 'Calltouch script not loaded' };
    }

    // Генерируем уникальный ID заявки
    const requestNumber = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Формируем данные для Calltouch согласно документации
    const calltouchData: any = {
      subject: 'Форма заявки с сайта',
      requestNumber: requestNumber,
      fio: data.name.trim(),
      phoneNumber: phoneDigits,
      requestUrl: window.location.href,
      ...(data.email && { email: data.email }),
      ...(data.comment && { comment: data.comment }),
    };

    // Добавляем UTM параметры, если есть
    if (data.utm_source || data.utm_medium || data.utm_campaign || data.utm_term || data.utm_content) {
      calltouchData.utm = {
        ...(data.utm_source && { source: data.utm_source }),
        ...(data.utm_medium && { medium: data.utm_medium }),
        ...(data.utm_campaign && { campaign: data.utm_campaign }),
        ...(data.utm_term && { term: data.utm_term }),
        ...(data.utm_content && { content: data.utm_content }),
      };
    }

    console.log('[LeadService] Отправка заявки в Calltouch:', {
      siteId: calltouchSiteId,
      phone: phoneDigits,
      name: data.name.trim(),
      requestNumber: requestNumber,
    });

    // Способ 1: через ct.push (правильный формат согласно документации Calltouch)
    // Проверяем наличие push через разные способы
    const ctPush = ct.push || (ct.callbacks && ct.callbacks.push);
    
    if (ctPush && typeof ctPush === 'function') {
      try {
        ctPush(['sendForm', calltouchData]);
        console.log('[LeadService] Calltouch: заявка успешно отправлена через ct.push');
        return { success: true };
      } catch (pushError) {
        console.warn('[LeadService] Calltouch ct.push error:', pushError);
      }
    }

    // Способ 2: через ct как функцию (формат для старых версий Calltouch)
    if (typeof ct === 'function') {
      try {
        // Используем формат: ct('sendForm', {...})
        ct('sendForm', calltouchData);
        console.log('[LeadService] Calltouch: заявка успешно отправлена через ct()');
        return { success: true };
      } catch (ctError) {
        console.warn('[LeadService] Calltouch ct() error:', ctError);
      }
    }

    // Способ 3: через callbacks (если доступны)
    if (ct.callbacks && Array.isArray(ct.callbacks)) {
      try {
        ct.callbacks.push(['sendForm', calltouchData]);
        console.log('[LeadService] Calltouch: заявка успешно отправлена через callbacks');
        return { success: true };
      } catch (callbackError) {
        console.warn('[LeadService] Calltouch callbacks error:', callbackError);
      }
    }

    // Если ничего не сработало
    console.error('[LeadService] Calltouch: не удалось отправить заявку - API недоступен');
    return { success: false, error: 'Calltouch API not available' };
  } catch (error: any) {
    console.error('[LeadService] Calltouch error:', error);
    return { success: false, error: error?.message || 'Unknown error' };
  }
}
