/**
 * Сервис для отправки заявок в Calltouch
 * 
 * Для других клубов нужно изменить только calltouchSiteId ниже.
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
 * Отправка заявки в Calltouch API
 * 
 * Для других клубов: замените calltouchSiteId на новый site_id из личного кабинета Calltouch
 */
export async function sendLead(data: LeadData): Promise<SendLeadResult> {
  const calltouchApiToken = (import.meta.env?.VITE_CALLTOUCH_API_TOKEN as string) || '';
  
  // ⚠️ ВАЖНО: Для каждого клуба нужно заменить этот ID!
  // Site ID можно найти в личном кабинете Calltouch: Интеграции / Отправка данных во внешние системы / API / ID личного кабинета
  const calltouchSiteId = '52899'; // ← ЗДЕСЬ ЗАМЕНИТЬ НА НОВЫЙ SITE_ID

  if (!calltouchApiToken) {
    console.warn('[LeadService] Calltouch API token not configured');
    return { success: false, error: 'Calltouch API token not configured' };
  }

  // Валидация телефона
  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
    return { success: false, error: 'Invalid phone number format' };
  }

  try {
    // Подготовка данных для Calltouch API
    const calltouchPayload: any = {
      subjectId: calltouchSiteId,
      subjectType: 'site',
      phone: phoneDigits,
      name: data.name.trim(),
      ...(data.email && { email: data.email }),
      ...(data.comment && { comment: data.comment }),
      // UTM параметры
      ...(data.utm_source && { utm_source: data.utm_source }),
      ...(data.utm_medium && { utm_medium: data.utm_medium }),
      ...(data.utm_campaign && { utm_campaign: data.utm_campaign }),
      ...(data.utm_term && { utm_term: data.utm_term }),
      ...(data.utm_content && { utm_content: data.utm_content }),
      // Analytics IDs
      ...(data.ga_cid && { ga_cid: data.ga_cid }),
      ...(data.ym_cid && { ym_cid: data.ym_cid }),
      ...(data.ct_cid && { ct_cid: data.ct_cid }),
    };

    console.log('[LeadService] Отправка заявки в Calltouch:', {
      siteId: calltouchSiteId,
      phone: phoneDigits,
      name: data.name.trim(),
      hasToken: !!calltouchApiToken,
    });

    // Попытка отправки через JavaScript API Calltouch (предпочтительный способ)
    // Проверяем наличие Calltouch API разными способами
    const ct = (window as any).ct;
    const ctPush = (window as any).ct?.push;
    const ctLoaded = (window as any).ct?.loaded;
    
    console.log('[LeadService] Calltouch API status:', {
      ctExists: !!ct,
      ctType: typeof ct,
      ctPushExists: !!ctPush,
      ctPushType: typeof ctPush,
      ctLoaded: ctLoaded,
    });
    
    // Способ 1: через ct.push (если доступен) - правильный формат для Calltouch
    if (ctPush && typeof ctPush === 'function') {
      try {
        // Формат согласно документации Calltouch: ct.push(['sendForm', {...}])
        ctPush(['sendForm', {
          name: data.name.trim(),
          phone: phoneDigits,
          email: data.email || '',
          comment: data.comment || 'Новая заявка с сайта panovalife.ru',
          subjectId: calltouchSiteId,
          subjectType: 'site',
          ...(data.utm_source && { utm_source: data.utm_source }),
          ...(data.utm_medium && { utm_medium: data.utm_medium }),
          ...(data.utm_campaign && { utm_campaign: data.utm_campaign }),
          ...(data.utm_term && { utm_term: data.utm_term }),
          ...(data.utm_content && { utm_content: data.utm_content }),
          ...(data.ga_cid && { ga_cid: data.ga_cid }),
          ...(data.ym_cid && { ym_cid: data.ym_cid }),
          ...(data.ct_cid && { ct_cid: data.ct_cid }),
        }]);
        console.log('[LeadService] Calltouch: заявка успешно отправлена через ct.push');
        return { success: true };
      } catch (pushError) {
        console.warn('[LeadService] Calltouch ct.push error, trying other methods:', pushError);
      }
    }

    // Способ 2: через ct как функцию (старый способ)
    if (ct && typeof ct === 'function') {
      try {
        ct('send', 'request', {
          subjectId: calltouchSiteId,
          subjectType: 'site',
          phone: phoneDigits,
          name: data.name.trim(),
          email: data.email || '',
          comment: data.comment || 'Новая заявка с сайта panovalife.ru',
        });
        console.log('[LeadService] Calltouch: заявка успешно отправлена через ct()');
        return { success: true };
      } catch (ctError) {
        console.warn('[LeadService] Calltouch ct() error, trying fetch API:', ctError);
      }
    }

    // Способ 3: Fallback - отправка через Fetch API (no-cors mode для обхода CORS)
    // Важно: используем правильный endpoint согласно документации Calltouch
    try {
      await fetch(
        `https://api.calltouch.ru/calls-service/RestAPI/${calltouchApiToken}/requests/register/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(calltouchPayload),
          mode: 'no-cors', // Используем no-cors для обхода CORS политики
        }
      );
      console.log('[LeadService] Calltouch: заявка успешно отправлена через Fetch API (no-cors)');
      return { success: true };
    } catch (fetchError) {
      console.error('[LeadService] Calltouch Fetch API error:', fetchError);
      return { success: false, error: 'Failed to send via all methods' };
    }
  } catch (error: any) {
    console.error('[LeadService] Calltouch error:', error);
    return { success: false, error: error?.message || 'Unknown error' };
  }
}
