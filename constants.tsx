import React from 'react';

export const ICONS = {
  SEARCH: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  CHEVRON_RIGHT: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
  ),
  PHONE: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  CLOCK: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  ),
  MAP_PIN: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  )
};

export const SERVICES = [
  {
    id: 'pool',
    title: 'АКВА-ЗОНА',
    desc: 'Бассейн 24 метра с озонированной водой. Пять дорожек для тех, кто не привык останавливаться перед препятствиями.',
    image: '/Panova-3.jpg'
  },
  {
    id: 'gym',
    title: 'СИЛОВОЙ ЗАЛ',
    desc: '700м² лучшего "железа" от Technogym. Профессиональное оборудование для достижения профессиональных целей.',
    image: '/Panova-2.jpg'
  },
  {
    id: 'groups',
    title: 'ГРУППОВЫЕ',
    desc: 'Более 50 программ: от взрывных HIIT до глубокого релакса в зоне йоги и пилатеса.',
    image: '/Panova-9.jpg'
  }
];

export const SCHEDULE = [
  { time: '09:00', name: 'ЙОГА СИЛЫ', coach: 'АННА ИВАНОВА', spots: '5 МЕСТ СВОБОДНО' },
  { time: '11:00', name: 'ПИЛАТЕС', coach: 'МАРИЯ ПЕТРОВА', spots: '3 МЕСТА СВОБОДНО' },
  { time: '18:00', name: 'БОКС / PRO', coach: 'ДМИТРИЙ СИДОРОВ', spots: '8 МЕСТ СВОБОДНО' },
  { time: '19:30', name: 'HIIT / ЖАРА', coach: 'ЕЛЕНА СМИРНОВА', spots: 'МЕСТ НЕТ' },
];

export const PROMOS = [
  {
    id: '1',
    badge: 'ЭКСКЛЮЗИВ',
    title: '30 ДНЕЙ ТЕСТ-ДРАЙВА',
    desc: 'Месяц премиального фитнеса в подарок при покупке годового членства. Твой старт начинается сейчас.',
    badgeColor: 'bg-white/10'
  },
  {
    id: '2',
    badge: 'ЛИМИТИРОВАНО',
    title: 'ФИКСИРОВАННАЯ ЦЕНА',
    desc: 'Забронируй карту по старой цене до сезонного повышения. Инвестируй в себя выгодно.',
    badgeColor: 'bg-[#6768E8]'
  }
];