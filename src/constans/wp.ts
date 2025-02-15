import { v4 as uuidv4 } from 'uuid';

export const WP = [
  { id: uuidv4().toString(), name: 'WP1', number: 1 },
  { id: uuidv4().toString(), name: 'WP2', number: 2 },
  { id: uuidv4().toString(), name: 'WP3', number: 3 },
  { id: uuidv4().toString(), name: 'WP4', number: 4 },
  { id: uuidv4().toString(), name: 'WP5', number: 5 },
  { id: uuidv4().toString(), name: 'WP6', number: 6 },
];

export const WP1 = [
  {
    id: uuidv4().toString(),
    name: 'T1.1',
    text: 'T1.1 Comparative state-of-the-art analysis and development of an inventory of partner country (PC) universities’ needs in Green Dimensions.',
  },
  {
    id: uuidv4().toString(),
    name: 'T1.2',
    text: 'T1.2 Preparation and approval of the training program for university administrators, teachers, and IT specialists.',
  },
  {
    id: uuidv4().toString(),
    name: 'T1.3',
    text: 'T1.3 Conducting a series of webinars.',
  },
  {
    id: uuidv4().toString(),
    name: 'T1.4',
    text: 'T1.4 Organization of Training of Trainers (ToT) workshops in Kyrgyzstan (KG) with a focus on horizontal analysis of curricula and processes in Green Dimensions.',
  },
  {
    id: uuidv4().toString(),
    name: 'T1.5',
    text: 'T1.5 Preparation and organization of study tours to EU partners with a focus on EU practices in Digitalization & Green Policy.',
  },
  {
    id: uuidv4().toString(),
    name: 'T1.6',
    text: 'T1.6 Conducting second-wave training seminars for the staff of Kyrgyz partner universities.',
  },
];

export const PARTNERS = [
  {
    id: uuidv4().toString(),
    name: 'I. Razzakov Kyrgyz State Technical University',
    results: [
      { task_name: 'TP1', task_result: 'Result 1' },
      { task_name: 'TP2', task_result: 'Result 2' },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'I.K. Akhunbaev Kyrgyz State Medical Academy',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Medical research completed',
      },
      {
        task_name: 'TP2',
        task_result: 'New study published',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'I. Arabaev Kyrgyz State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Educational program updated',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Batken State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Implemented new curriculum',
      },
      {
        task_name: 'TP2',
        task_result: 'Student exchange program initiated',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'K. Karasaev Bishkek State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Joint project with EU universities',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'International Higher School of Medicine',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Clinical trials conducted',
      },
      {
        task_name: 'TP2',
        task_result: 'New medical protocols developed',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'S. Naamatov Naryn State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Research collaboration with EU partners',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Osh State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Developed AI-based learning tools',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'K. Tynystanov Issyk-Kul State University',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Environmental studies completed',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Ministry of Education and Science of the Kyrgyz Republic',
    results: [
      {
        task_name: 'TP1',
        task_result: 'National education strategy developed',
      },
      {
        task_name: 'TP2',
        task_result: 'New legislation proposed',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Capacity Building Consulting Group',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Conducted leadership training',
      },
      {
        task_name: 'TP2',
        task_result: 'Published whitepaper on policy reforms',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Hamburg University of Applied Sciences (Germany)',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Joint research paper published',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Vilnius University (Lithuania)',
    results: [
      {
        task_name: 'TP1',
        task_result: 'New digital learning platform launched',
      },
    ],
  },
  {
    id: uuidv4().toString(),
    name: 'Diplomatic Academy of the Ministry of Foreign Affairs of the Kyrgyz Republic',
    results: [
      {
        task_name: 'TP1',
        task_result: 'Hosted international conference',
      },
    ],
  },
];
