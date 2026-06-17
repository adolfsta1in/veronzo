import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Building2,
  DoorOpen,
  Gem,
  Hammer,
  House,
  Layers3,
  MessagesSquare,
  PanelsTopLeft,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Workflow,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ImageItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export type CategoryItem = {
  title: string;
  href: string;
  description: string;
  image: string;
  icon: LucideIcon;
  material?: string;
  color?: string;
  purpose?: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const contacts = {
  phone: "+992872701515",
  phoneHref: "tel:+992872701515",
  whatsapp: "https://wa.me/992872701515",
  telegram: "https://t.me/veronzo_placeholder",
  instagram: "https://instagram.com/veronzo_placeholder",
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Продукция", href: "/catalog" },
  { label: "Изделия", href: "/products" },
  { label: "Услуги", href: "/service" },
  { label: "Проекты", href: "/projects" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const productCategories: CategoryItem[] = [
  {
    title: "Камень",
    href: "/catalog-stone",
    description: "Премиальные натуральные и инженерные поверхности для интерьера и фасада.",
    image: "/images/source/catalog/catalog-01.jpeg",
    icon: Gem,
    material: "Натуральный камень",
    color: "Светлый",
    purpose: "Интерьер",
  },
  {
    title: "Входные двери",
    href: "/catalog",
    description: "Архитектурные входные группы для частных и коммерческих объектов.",
    image: "/images/source/catalog/catalog-02.jpeg",
    icon: DoorOpen,
    material: "Металл и отделка",
    color: "Графит",
    purpose: "Фасад",
  },
  {
    title: "Лифты",
    href: "/catalog",
    description: "Вертикальные решения для объектов с высоким уровнем отделки.",
    image: "/images/source/catalog/catalog-03.jpeg",
    icon: Building2,
    material: "Инженерные системы",
    color: "Металл",
    purpose: "Коммерция",
  },
];

export const stoneCategories: CategoryItem[] = [
  {
    title: "Мрамор",
    href: "/catalog-stone",
    description: "Выразительная белая, серая и цветная порода для статусных интерьеров.",
    image: "/images/source/catalog-stone/catalog-stone-01.jpeg",
    icon: Layers3,
    material: "Мрамор",
    color: "Светлый",
    purpose: "Интерьер",
  },
  {
    title: "Кварц",
    href: "/catalog-stone",
    description: "Практичные поверхности для кухонь, санузлов и общественных зон.",
    image: "/images/source/catalog-stone/catalog-stone-02.jpg",
    icon: SquareStack,
    material: "Кварц",
    color: "Светлый",
    purpose: "Столешницы",
  },
  {
    title: "Гранит",
    href: "/catalog-stone",
    description: "Прочный камень для лестниц, фасадов, полов и наружных решений.",
    image: "/images/source/catalog-stone/catalog-stone-03.jpg",
    icon: ShieldCheck,
    material: "Гранит",
    color: "Темный",
    purpose: "Фасад",
  },
  {
    title: "Травертин",
    href: "/catalog-stone",
    description: "Фактурный природный камень для спокойных архитектурных поверхностей.",
    image: "/images/source/catalog-stone/catalog-stone-04.jpg",
    icon: PanelsTopLeft,
    material: "Травертин",
    color: "Теплый",
    purpose: "Фасад",
  },
  {
    title: "Полудрагоценный Камень",
    href: "/catalog-stone",
    description: "Акцентные слэбы для баров, панелей, подсветки и деталей.",
    image: "/images/source/catalog-stone/catalog-stone-05.jpg",
    icon: Sparkles,
    material: "Полудрагоценный камень",
    color: "Акцентный",
    purpose: "Декор",
  },
  {
    title: "Оникс",
    href: "/catalog-stone",
    description: "Полупрозрачные поверхности для интерьерных световых сценариев.",
    image: "/images/source/catalog-stone/catalog-stone-06.jpg",
    icon: Gem,
    material: "Оникс",
    color: "Акцентный",
    purpose: "Декор",
  },
  {
    title: "Керамогранит",
    href: "/catalog-stone",
    description: "Крупноформатные плиты для современных стен, полов и фасадов.",
    image: "/images/source/catalog-stone/catalog-stone-07.jpeg",
    icon: Blocks,
    material: "Керамогранит",
    color: "Светлый",
    purpose: "Интерьер",
  },
];

export const productWorks: CategoryItem[] = [
  {
    title: "Камины",
    href: "/products",
    description: "Монолитные и облицовочные решения с точной подгонкой камня.",
    image: "/images/source/fireplaces/fireplaces-01.jpeg",
    icon: House,
    material: "Мрамор",
    color: "Светлый",
    purpose: "Интерьер",
  },
  {
    title: "Полы и стены",
    href: "/products",
    description: "Большие поверхности с подбором рисунка, формата и шва.",
    image: "/images/source/floors-walls/floors-walls-02.jpeg",
    icon: PanelsTopLeft,
    material: "Камень",
    color: "Светлый",
    purpose: "Интерьер",
  },
  {
    title: "Ванные комнаты",
    href: "/products",
    description: "Санузлы, душевые и SPA-зоны с премиальной каменной отделкой.",
    image: "/images/source/bathrooms/bathrooms-03.jpg",
    icon: Sparkles,
    material: "Мрамор",
    color: "Светлый",
    purpose: "Влажные зоны",
  },
  {
    title: "Бани",
    href: "/products",
    description: "Хаммамы и wellness-пространства с долговечными материалами.",
    image: "/images/source/baths/baths-01.jpg",
    icon: BadgeCheck,
    material: "Камень",
    color: "Теплый",
    purpose: "SPA",
  },
  {
    title: "Лестницы",
    href: "/products",
    description: "Ступени, площадки и ограждающие элементы для частных объектов.",
    image: "/images/source/stairs/stairs-01.jpeg",
    icon: Workflow,
    material: "Гранит",
    color: "Темный",
    purpose: "Лестницы",
  },
  {
    title: "Столешницы и барные стойки",
    href: "/products",
    description: "Кухонные, островные и коммерческие поверхности без указания цены.",
    image: "/images/source/countertops/countertops-01.jpeg",
    icon: SquareStack,
    material: "Кварц",
    color: "Светлый",
    purpose: "Столешницы",
  },
  {
    title: "Мебель",
    href: "/products",
    description: "Каменные столы, консоли, стойки и декоративные элементы.",
    image: "/images/source/furniture/furniture-01.jpg",
    icon: Blocks,
    material: "Камень",
    color: "Акцентный",
    purpose: "Мебель",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Подбор материалов",
    description: "Помогаем выбрать фактуру, формат и рисунок под архитектуру проекта.",
    image: "/images/source/service/service-01.jpeg",
    icon: MessagesSquare,
  },
  {
    title: "Поставка продукции",
    description: "Организуем поставку камня, плитки, дверей, лифтов и комплектующих.",
    image: "/images/source/service/service-02.jpeg",
    icon: ArrowUpRight,
  },
  {
    title: "Изготовление изделий",
    description: "Производим столешницы, лестницы, панели, камины и нестандартные детали.",
    image: "/images/source/service/service-03.jpeg",
    icon: Hammer,
  },
  {
    title: "Монтаж",
    description: "Выполняем установку материалов и изделий на объекте.",
    image: "/images/source/service/service-04.jpeg",
    icon: BadgeCheck,
  },
  {
    title: "Комплексная отделка",
    description: "Собираем материалы, изделия и работы в единую отделочную систему.",
    image: "/images/source/service/service-05.jpeg",
    icon: Layers3,
  },
  {
    title: "Работа с коммерческими объектами",
    description: "Поддерживаем проекты для шоурумов, ресторанов, офисов и отелей.",
    image: "/images/source/service/service-06.jpeg",
    icon: Building2,
  },
  {
    title: "Сервис лифтов",
    description: "Сопровождаем лифтовые решения от подбора до монтажа.",
    image: "/images/source/service/service-07.jpeg",
    icon: Workflow,
  },
  {
    title: "Дверные решения",
    description: "Подбираем и интегрируем входные группы в архитектуру объекта.",
    image: "/images/source/service/service-08.jpeg",
    icon: DoorOpen,
  },
];

export const advantages = [
  "Натуральные и премиальные материалы",
  "Решения для интерьера и фасада",
  "Каталог изделий и камня",
  "Индивидуальный подбор под проект",
  "Работа с архитекторами и строителями",
];

export const gallery: ImageItem[] = [
  ...productWorks.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    category: "Изделия",
  })),
  ...services.slice(0, 8).map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    category: "Услуги",
  })),
  ...stoneCategories.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    category: "Камень",
  })),
];

export const allCatalogItems = [...productCategories, ...stoneCategories, ...productWorks];

export const contactActions = [
  { label: "WhatsApp", href: contacts.whatsapp, icon: Phone },
  { label: "Telegram", href: contacts.telegram, icon: Send },
  { label: "Instagram", href: contacts.instagram, icon: ArrowUpRight },
];
