import { v4 as uuid } from 'uuid';
import img1 from './assets/images/card-1.png';
import img2 from './assets/images/card-2.png';
import img3 from './assets/images/card-3.png';
import img4 from './assets/images/card-4.png';
import img5 from './assets/images/card-5.png';
import img6 from './assets/images/card-6.png';
import img7 from './assets/images/card-7.png';
import img8 from './assets/images/card-8.png';
import img9 from './assets/images/card-9.png';
import img10 from './assets/images/card-10.png';
import img11 from './assets/images/card-11.png';
import img12 from './assets/images/card-12.png';
import img13 from './assets/images/card-13.png';
import img14 from './assets/images/card-14.png';
import img15 from './assets/images/card-15.png';
import img16 from './assets/images/card-16.png';
import img17 from './assets/images/card-17.png';
import img18 from './assets/images/card-18.png';
import { ICard } from './types';

const CARDS: ICard[] = [
  {
    id: uuid(),
    name: 'SOFA',
    category: 'Design',
    categoryId: 1,
    img: img1,
  },
  {
    id: uuid(),
    name: 'KeyBoard',
    category: 'Branding',
    categoryId: 2,
    img: img2,
  },
  {
    id: uuid(),
    name: 'Work Media',
    category: 'Illustration',
    categoryId: 3,
    img: img3,
  },
  {
    id: uuid(),
    name: 'DDDone',
    category: 'Motion',
    categoryId: 4,
    img: img4,
  },
  {
    id: uuid(),
    name: 'Abstract',
    category: 'Design',
    categoryId: 1,
    img: img5,
  },
  {
    id: uuid(),
    name: 'HandP',
    category: 'Branding',
    categoryId: 2,
    img: img6,
  },
  {
    id: uuid(),
    name: 'Architect',
    category: 'Motion',
    categoryId: 4,
    img: img7,
  },
  {
    id: uuid(),
    name: 'Calc',
    category: 'Design',
    categoryId: 1,
    img: img8,
  },
  {
    id: uuid(),
    name: 'Sport',
    category: 'Branding',
    categoryId: 2,
    img: img9,
  },
  {
    id: uuid(),
    name: 'SOFA',
    category: 'Design',
    categoryId: 1,
    img: img10,
  },
  {
    id: uuid(),
    name: 'KeyBoard',
    category: 'Branding',
    categoryId: 2,
    img: img11,
  },
  {
    id: uuid(),
    name: 'Work Media',
    category: 'Illustration',
    categoryId: 3,
    img: img12,
  },
  {
    id: uuid(),
    name: 'DDDone',
    category: 'Motion',
    categoryId: 4,
    img: img13,
  },
  {
    id: uuid(),
    name: 'Abstract',
    category: 'Design',
    categoryId: 1,
    img: img14,
  },
  {
    id: uuid(),
    name: 'HandP',
    category: 'Branding',
    categoryId: 2,
    img: img15,
  },
  {
    id: uuid(),
    name: 'Architect',
    category: 'Motion',
    categoryId: 4,
    img: img16,
  },
  {
    id: uuid(),
    name: 'Calc',
    category: 'Design',
    categoryId: 1,
    img: img17,
  },
  {
    id: uuid(),
    name: 'Sport',
    category: 'Branding',
    categoryId: 2,
    img: img18,
  },
]

const RADIO_OPTIONS = [
  {
    id: "all",
    value: 0,
    checked: false,
    label: "Show All",
    name: "category",
  },
  {
    id: "design",
    value: 1,
    checked: false,
    label: "Design",
    name: "category",
  },
  {
    id: "branding",
    value: 2,
    checked: false,
    label: "Branding",
    name: "category",
  },
  {
    id: "illustration",
    value: 3,
    checked: false,
    label: "Illustration",
    name: "category",
  },
  {
    id: "motion",
    value: 4,
    checked: false,
    label: "Motion",
    name: "category",
  },
];

const SELECT_OPTIONS = RADIO_OPTIONS.map((el) => el.label);

const NAV_LINKS = [
  {
    href: '/',
    name: 'About',
  },
  {
    href: '/',
    name: 'Services',
  },
  {
    href: '/',
    name: 'Pricing',
  },
  {
    href: '/',
    name: 'Blog',
  },
];

export { CARDS, RADIO_OPTIONS, SELECT_OPTIONS, NAV_LINKS };