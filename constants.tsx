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
    id: 'aqua',
    title: 'АКВА-ЗОНА',
    desc: 'Бассейн 24 метра с озонированной водой. Пять дорожек для комфортного плавания. Финская сауна, джакузи и детский бассейн для всей семьи.',
    image: '/Panova-3.jpg',
    floorIndex: 1
  },
  {
    id: 'gym',
    title: 'СИЛОВОЙ ЗАЛ',
    desc: '700м² лучшего "железа" от Life Fitness и Hammer. Профессиональное оборудование для достижения профессиональных целей. Пространство на 4 этаже.',
    image: '/Panova-2.jpg',
    floorIndex: 3
  },
  {
    id: 'groups',
    title: 'ГРУППОВЫЕ ПРОГРАММЫ',
    desc: 'Более 50 программ: от взрывных HIIT до глубокого релакса в зоне йоги и пилатеса. Современные залы на 3 и 5 этажах.',
    image: '/Panova-9.jpg',
    floorIndex: 0
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
    badge: 'СТАНДАРТ',
    title: 'СТАНДАРТ',
    desc: 'Базовый доступ ко всем зонам клуба и групповым программам. Идеальный выбор для регулярных тренировок.',
    badgeColor: 'bg-[#F2F5F6]'
  },
  {
    id: '2',
    badge: 'БИЗНЕС',
    title: 'БИЗНЕС',
    desc: 'Расширенный доступ с дополнительными услугами и приоритетной записью на занятия. Для активных членов клуба.',
    badgeColor: 'bg-[#D4F058]'
  },
  {
    id: '3',
    badge: 'VIP',
    title: 'VIP',
    desc: 'Максимальный уровень с персональным менеджером и эксклюзивными услугами. Премиальный опыт в каждом посещении.',
    badgeColor: 'bg-[#1A262A]'
  }
];