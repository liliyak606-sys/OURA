export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      gallery: "Gallery",
      blueprints: "Floor Plans",
      contact: "Contact",
    },
    hero: {
      tagline: "Exclusive Mediterranean Living",
      title: "The Pearl of Tel Aviv",
      subtitle: "A transcendent architectural masterpiece located directly on the Mediterranean coastline. Experience uninterrupted luxury and modern design.",
      cta: "Discover the Estate"
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
    blueprints: {
      title: "Architectural Plans",
      subtitle: "Explore the spatial continuity and meticulous zoning of the estate.",
      floor1: "Ground Floor & Pool Deck",
      floor2: "Master Suites & Terraces",
      specs: [
        { label: "Total Area", value: "850 m²" },
        { label: "Bedrooms", value: "6 Suites" },
        { label: "Bathrooms", value: "8" },
        { label: "Pool", value: "Infinity Edge 25m" }
      ]
    },
    contact: {
      title: "Schedule a Private Viewing",
      subtitle: "Connect with our exclusive agents to arrange a comprehensive tour of the property.",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      date: "Preferred Date",
      submit: "Send Request",
      success: "Thank you. Our concierge will contact you shortly."
    }
  },
  ru: {
    nav: {
      gallery: "Галерея",
      blueprints: "Чертежи",
      contact: "Контакты",
    },
    hero: {
      tagline: "Эксклюзивная Жизнь у Моря",
      title: "Жемчужина Тель-Авива",
      subtitle: "Архитектурный шедевр на побережье Средиземного моря. Погрузитесь в атмосферу абсолютной роскоши и современного дизайна.",
      cta: "Исследовать Виллу"
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
      title: "Виртуальный Тур",
      subtitle: "Взгляните на безупречность каждой детали."
    },
    blueprints: {
      title: "Архитектурные Чертежи",
      subtitle: "Детальная планировка и зонирование пространства.",
      floor1: "Первый этаж и бассейн",
      floor2: "Мастер-спальни и террасы",
      specs: [
        { label: "Общая площадь", value: "850 м²" },
        { label: "Спальни", value: "6 люксов" },
        { label: "Ванные", value: "8" },
        { label: "Бассейн", value: "Инфинити 25м" }
      ]
    },
    contact: {
      title: "Заказать Приватный Показ",
      subtitle: "Свяжитесь с нашим эксклюзивным агентом для организации индивидуального просмотра.",
      name: "Ваше Имя",
      phone: "Номер Телефона",
      email: "E-mail",
      date: "Желаемая дата",
      submit: "Отправить Заявку",
      success: "Спасибо. Наш консьерж свяжется с вами в ближайшее время."
    }
  }
};
