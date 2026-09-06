export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      features: "Features",
      gallery: "Gallery",
      blueprints: "Floor Plans",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Exclusive Mediterranean Living",
      title: "The Pearl of Tel Aviv",
      subtitle: "A transcendent architectural masterpiece located directly on the Mediterranean coastline. Experience uninterrupted luxury and modern design.",
      cta: "Discover the Penthouse",
      stats: [
        { value: "2-5", label: "bedrooms" },
        { value: "5", unit: "min", label: "to beach" },
        { value: "150-400", unit: "sqm", label: "penthouse size" },
        { value: "3.5", unit: "m", label: "ceilings" }
      ]
    },
    features: {
      title: "Uncompromising Luxury",
      items: [
        {
          title: "Prime Location",
          desc: "Situated in the beating heart of Tel Aviv, offering absolute privacy while being steps away from the vibrant city and pristine beaches.",
          icon: "MapPin"
        },
        {
          title: "Panoramic Vistas",
          desc: "Floor-to-ceiling architectural glass wrapping the entire structure, offering breathtaking 360° views of the sea and skyline.",
          icon: "View"
        },
        {
          title: "Smart Integration",
          desc: "State-of-the-art home automation, climate control, and invisible security systems seamlessly integrated into the design.",
          icon: "Cpu"
        }
      ]
    },
    gallery: {
      title: "Visual Tour",
      subtitle: "Step inside the architectural marvel."
    },
    smallCta: {
      text: "Ready to experience the space in person?",
      button: "Schedule a Viewing"
    },
    blueprints: {
      title: "Architectural Plans",
      subtitle: "Explore the spatial continuity and meticulous zoning of the penthouse.",
      floor1: "Main Floor",
      floor2: "Upper Level & Terrace",
      tour3dTitle: "Immersive Tour\nOf The Residence",
      tour3dTab: "3D Tour",
      tour2dTab: "2D Plans",
      collapse: "Collapse",
      expand: "Fullscreen",
      alt3d: "3D Tour of the Residence",
      specs: [
        { label: "Total Area", value: "150-400 m²" },
        { label: "Bedrooms", value: "2-5" },
        { label: "Bathrooms", value: "2-4" },
        { label: "View", value: "Panoramic Sea View" }
      ],
      hotspots: {
        master: { title: "Master Bedroom", area: "42 m²" },
        bath: { title: "Bathroom", area: "18 m²" },
        bed2: { title: "Second Bedroom", area: "24 m²" },
        stairs: { title: "Stairs", area: "12 m²" },
        pool: { title: "Pool Terrace", area: "45 m²" },
        living: { title: "Living Room", area: "55 m²" },
        dining: { title: "Dining Area", area: "30 m²" },
        kitchen: { title: "Kitchen", area: "35 m²" },
        entrance: { title: "Entrance", area: "15 m²" },
        balcony: { title: "Balcony", area: "20 m²" }
      }
    },
    about: {
      title: "Architecture as\nthe Art of Living",
      text: "AURA Development is a boutique developer creating iconic coastal projects. We don't just build real estate; we engineer an uncompromising level of comfort. This penthouse was conceived as a personal manifesto of modern luxury: from the precise geometry of the space to the integration of cutting-edge smart home systems.",
      signature: "Aviv Rozen, Chief Architect of the Project"
    },
    contact: {
      title: "Schedule a\nPrivate Viewing",
      subtitle: "Connect with our exclusive agents to arrange a comprehensive tour of the property.",
      name: "Full Name",
      namePlaceholder: "E.g. John Doe",
      phone: "Phone Number",
      email: "Email Address",
      date: "Preferred Date",
      submit: "Send Request",
      success: "Thank you. Our concierge will contact you shortly."
    },
    footer: {
      office: "Sales Office:",
      address: "Herbert Samuel St 10, Tel Aviv (by appointment only)",
      hoursTitle: "Working Hours:",
      hoursText: "Sun - Thu: 09:00 – 19:00 | Fri: 09:00 – 13:00",
      phoneLabel: "Phone (WhatsApp/Telegram):",
      emailLabel: "E-mail:",
      copyright: "© 2026 AURA Tel Aviv. All rights reserved.",
      design: "UX/UI Design & Art Direction by Liliya Khablo"
    }
  },
  ru: {
    nav: {
      features: "Особенности",
      gallery: "Галерея",
      blueprints: "Чертежи",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      tagline: "Эксклюзивная Жизнь у Моря",
      title: "Жемчужина Тель-Авива",
      subtitle: "Архитектурный шедевр на побережье Средиземного моря. Погрузитесь в атмосферу абсолютной роскоши и современного дизайна.",
      cta: "Исследовать Пентхаус",
      stats: [
        { value: "2-5", label: "спальни" },
        { value: "5", unit: "мин", label: "до пляжа" },
        { value: "150-400", unit: "м²", label: "метраж пентхауса" },
        { value: "3.5", unit: "м", label: "потолки" }
      ]
    },
    features: {
      title: "Бескомпромиссная Роскошь",
      items: [
        {
          title: "Идеальная Локация",
          desc: "Расположена в самом сердце Тель-Авива. Идеальный баланс приватности и близости к динамичному центру и лучшим пляжам.",
          icon: "MapPin"
        },
        {
          title: "Панорамные Виды",
          desc: "Сплошное фасадное остекление гарантирует захватывающий дух вид на морской горизонт на 360 градусов.",
          icon: "View"
        },
        {
          title: "Умный Дом",
          desc: "Передовые системы автоматизации, климат-контроля и безопасности, незаметно интегрированные в интерьер.",
          icon: "Cpu"
        }
      ]
    },
    gallery: {
      title: "Визуализация",
      subtitle: "Взгляните на безупречность каждой детали."
    },
    smallCta: {
      text: "Готовы прочувствовать это пространство лично?",
      button: "Записаться на показ"
    },
    blueprints: {
      title: "Архитектурные Чертежи",
      subtitle: "Детальная планировка и зонирование пространства.",
      floor1: "Основной этаж",
      floor2: "Верхний уровень и терраса",
      tour3dTitle: "Объемный тур\nпо резиденции",
      tour3dTab: "3D-Тур",
      tour2dTab: "2D-Чертежи",
      collapse: "Свернуть",
      expand: "На весь экран",
      alt3d: "3D Тур по резиденции",
      specs: [
        { label: "Общая площадь", value: "150-400 м²" },
        { label: "Спальни", value: "2-5" },
        { label: "Ванные", value: "2-4" },
        { label: "Вид", value: "Панорамный на море" }
      ],
      hotspots: {
        master: { title: "Главная спальня", area: "42 м²" },
        bath: { title: "Ванная комната", area: "18 м²" },
        bed2: { title: "Вторая спальня", area: "24 м²" },
        stairs: { title: "Лестница", area: "12 м²" },
        pool: { title: "Терраса с бассейном", area: "45 м²" },
        living: { title: "Гостиная", area: "55 м²" },
        dining: { title: "Обеденная зона", area: "30 м²" },
        kitchen: { title: "Кухня", area: "35 м²" },
        entrance: { title: "Вход", area: "15 м²" },
        balcony: { title: "Балкон", area: "20 м²" }
      }
    },
    about: {
      title: "Архитектура как\nискусство жизни",
      text: "AURA Development — это бутик-застройщик, создающий знаковые проекты на побережье. Мы не просто строим недвижимость, мы проектируем бескомпромиссный уровень комфорта. Этот пентхаус создавался как личный манифест современной роскоши: от выверенной геометрии пространства до интеграции передовых систем умного дома.",
      signature: "Авив Розен, Главный архитектор проекта"
    },
    contact: {
      title: "Заказать\nПриватный Показ",
      subtitle: "Свяжитесь с нашим эксклюзивным агентом для организации индивидуального просмотра.",
      name: "Ваше Имя",
      namePlaceholder: "Иван Иванов",
      phone: "Номер Телефона",
      email: "E-mail",
      date: "Желаемая дата",
      submit: "Отправить Заявку",
      success: "Спасибо. Наш консьерж свяжется с вами в ближайшее время."
    },
    footer: {
      office: "Офис продаж:",
      address: "ул. Герберт Самуэль 10, Тель-Авив (прием по предварительной записи)",
      hoursTitle: "Часы работы:",
      hoursText: "Вс - Чт: 09:00 – 19:00 | Пт: 09:00 – 13:00",
      phoneLabel: "Телефон (WhatsApp/Telegram):",
      emailLabel: "E-mail:",
      copyright: "© 2026 AURA Tel Aviv. All rights reserved.",
      design: "UX/UI Design & Art Direction by Liliya Khablo"
    }
  }
};
