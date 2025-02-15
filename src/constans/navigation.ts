import { v4 as uuidv4 } from 'uuid';

export const NAVIGATION_LINK = [
  {
    id: '10',
    main: 'О нас',
    options: [
      { id: uuidv4(), name: 'О Нас', address: '' },
      { id: uuidv4(), name: 'Партнеры', address: '' },
      { id: uuidv4(), name: 'Контакты', address: '' },
      {
        id: uuidv4(),
        name: 'Отказ от ответственности',
        address: '',
      },
    ],
  },
  {
    id: '11',
    main: 'Менеджмент',
    options: [
      { id: uuidv4(), name: 'План работы', address: '' },
      { id: uuidv4(), name: 'Рабочие пакеты', address: '' },
      { id: uuidv4(), name: 'Совет управление проектом', address: '' },
      {
        id: uuidv4(),
        name: 'Управляющий комитет',
        address: '',
      },
      { id: uuidv4(), name: 'Тренера', address: '' },
    ],
  },
  {
    id: '12',
    main: 'Нововсти',
    options: [
      { id: uuidv4(), name: 'Встречи', address: '' },
      { id: uuidv4(), name: 'События', address: '' },
    ],
  },
];
