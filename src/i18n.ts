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
    blueprints: {
      title: "Architectural Plans",
      subtitle: "Explore the spatial continuity and meticulous zoning of the penthouse.",
      floor1: "Main Floor",
      floor2: "Upper Level & Terrace",
      specs: [
        { label: "Total Area", value: "150-400 m²" },
        { label: "Bedrooms", value: "2-5" },
        { label: "Bathrooms", value: "2-4" },
        { label: "View", value: "Panoramic Sea View" }
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
      title: "Виртуальный Тур",
      subtitle: "Взгляните на безупречность каждой детали."
    },
    blueprints: {
      title: "Архитектурные Чертежи",
      subtitle: "Детальная планировка и зонирование пространства.",
      floor1: "Основной этаж",
      floor2: "Верхний уровень и терраса",
      specs: [
        { label: "Общая площадь", value: "150-400 м²" },
        { label: "Спальни", value: "2-5" },
        { label: "Ванные", value: "2-4" },
        { label: "Вид", value: "Панорамный на море" }
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
