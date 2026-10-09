export type MenuCategoryId = 'pancakes' | 'waffles' | 'mini';
export type CategoryId = MenuCategoryId | 'toppings';

export interface Category {
  id: CategoryId;
  title: string;
  caption: string;
  image: string;
  pandaSays: string;
}

export interface Dish {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  ingredients: string;
  price: string;
  joke: string;
  pandaSays: string;
  image: string;
}

export interface Topping {
  name: string;
  icon: string;
  price: string;
  joke: string;
  imageLeft: string;
  imageTop: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    id: 'pancakes',
    title: 'פנקייקים',
    caption: 'גבוהים, רכים ומוגזמים בדיוק במידה',
    image: '/ronni-store/pancakes-loaded.webp',
    pandaSays:
      'ערימת הפנקייקים הזאת כל כך גבוהה, שהזמנתי מעלית. תיפגשו איתי בקומת המייפל.',
  },
  {
    id: 'waffles',
    title: 'וופל בלגי',
    caption: 'פריך מבחוץ, חלום מבפנים',
    image: '/ronni-store/waffles-berries.webp',
    pandaSays:
      'אני לא אומרת שהוופל מושלם, אבל כבר ביטלתי תוכניות עם חברות כדי להיות איתו.',
  },
  {
    id: 'mini',
    title: 'מיני פנקייק',
    caption: 'קטנים בגודל, ענקיים בחשבון',
    image: '/ronni-store/mini-loaded.webp',
    pandaSays: 'מיני? חמודים. אני אקח 84. אל תעשו פרצוף — אני פנדה בצמיחה.',
  },
  {
    id: 'toppings',
    title: 'תוספות',
    caption: 'כי תמיד אפשר להגזים עוד קצת',
    image: '/ronni-store/toppings.webp',
    pandaSays:
      'מי שאומרת ״בלי תוספות״ פשוט עוד לא טעמה אושר. וגם קצת חשודה בעיניי.',
  },
];

export const DISHES: readonly Dish[] = [
  {
    id: 'ronni-classic',
    name: 'הקלאסי של רוני',
    category: 'pancakes',
    description: 'שלושה פנקייקים ענניים עם חמאה שנמסה בדיוק בזמן ומפל מייפל.',
    ingredients: 'פנקייקים, חמאה, סירופ מייפל',
    price: '7 סקווישים',
    joke: 'המייפל כלול. אפשר גם אחד ענקי במקום.',
    pandaSays: '״קלאסי״ זה שם מנומס ל״תביאו עוד מייפל לפני שאני עושה פה סצנה״.',
    image: '/ronni-store/pancakes-classic.webp',
  },
  {
    id: 'panda-pancake',
    name: 'פנקייק פנדה',
    category: 'pancakes',
    description: 'מגדל פנקייקים עם נוטלה, בננות, פירות יער ופירורי אוראו.',
    ingredients: 'פנקייקים, נוטלה, בננה, פירות יער, אוראו',
    price: '12 סקווישי דאמפלינג',
    joke: 'הפנדה טעמה ואישרה. רק שלא יהיו דביקים.',
    pandaSays: 'קראו לזה פנקייק פנדה ואני דורשת עשרה אחוז מהנוטלה וזכויות על התמונה.',
    image: '/ronni-store/pancakes-loaded.webp',
  },
  {
    id: 'black-forest-waffle',
    name: 'וופל יער שחור',
    category: 'waffles',
    description: 'וופל בלגי זהוב עם נוטלה, בננות, פטל, אוכמניות וקראנץ׳ אוראו.',
    ingredients: 'וופל בלגי, נוטלה, בננה, פטל, אוכמניות, אוראו',
    price: '9 סקווישים ענקיים',
    joke: 'כולל נוף ליער ומקום מיוחד לסקווישים.',
    pandaSays: 'יש פה פירות יער, אז זה בריא. הודעתי למדענים — הם עדיין בוכים.',
    image: '/ronni-store/waffles-berries.webp',
  },
  {
    id: 'oreo-extreme-waffle',
    name: 'וופל אוראו אקסטרים',
    category: 'waffles',
    description: 'וופל פריך תחת שכבת שוקולד ופירורי אוראו בכמות בלתי אחראית.',
    ingredients: 'וופל בלגי, סירופ שוקולד, פירורי אוראו',
    price: '20 סקווישי פנדה',
    joke: 'פירור אחד נפל, אז הורדנו סקווישי.',
    pandaSays: 'לא רואים את הוופל? מצוין. זאת בדיוק כמות האוראו שביקשתי.',
    image: '/ronni-store/waffles-oreo.webp',
  },
  {
    id: 'mini-party',
    name: 'מיני מסיבה',
    category: 'mini',
    description: 'קערה שמחה של מיני פנקייק, נוטלה, בננות, פירות יער ואוראו.',
    ingredients: 'מיני פנקייק, נוטלה, בננה, פירות יער, אוראו',
    price: '6 סקווישי קצפת',
    joke: 'מיני בשם בלבד. הסקווישים בגודל משפחתי.',
    pandaSays: 'אחד בכל ביס? הצחקתן אותי. אני מכניסה ארבעה ובוהה במי ששופטת.',
    image: '/ronni-store/mini-loaded.webp',
  },
  {
    id: 'mini-tropical',
    name: 'מיני טרופי',
    category: 'mini',
    description: 'מיני פנקייק עם אננס, בננות ומייפל לחופשה בלי לצאת מהכיסא.',
    ingredients: 'מיני פנקייק, אננס, בננה, סירופ מייפל',
    price: '15 סקווישי דאמפלינג',
    joke: 'כרטיס טיסה לא כלול. סקוויז אחד לפני ההמראה.',
    pandaSays:
      'האננס בחופשה, הבננה בשיזוף ואני שילמתי 15 סקווישים כדי להיות המלון שלהן.',
    image: '/ronni-store/mini-tropical.webp',
  },
];

export const TOPPINGS: readonly Topping[] = [
  {
    name: 'נוטלה',
    icon: '🍫',
    price: '5 סקווישים',
    joke: 'כפית נדיבה, סקוויז נדיב יותר',
    imageLeft: '-5%',
    imageTop: '-54%',
  },
  {
    name: 'סירופ שוקולד',
    icon: '🤎',
    price: '3 סקווישים',
    joke: 'כל טיפה שווה לחיצה',
    imageLeft: '-115%',
    imageTop: '-54%',
  },
  {
    name: 'סירופ מייפל',
    icon: '🍁',
    price: '4 סקווישי דוב',
    joke: 'יובא היישר מהעץ הכי רך',
    imageLeft: '-225%',
    imageTop: '-54%',
  },
  {
    name: 'קצפת',
    icon: '☁️',
    price: '3 סקווישי ענן',
    joke: 'רכים בדיוק כמו הקצפת',
    imageLeft: '-335%',
    imageTop: '-183%',
  },
  {
    name: 'פירורי אוראו',
    icon: '🍪',
    price: '8 סקווישים',
    joke: 'כתשנו עוגיות, לא סקווישים',
    imageLeft: '-335%',
    imageTop: '-54%',
  },
  {
    name: 'אננס',
    icon: '🍍',
    price: '10 סקווישי אננס',
    joke: 'קוצניים מבחוץ ורכים מבפנים',
    imageLeft: '-5%',
    imageTop: '-183%',
  },
  {
    name: 'פירות יער',
    icon: '🫐',
    price: '11 סקווישים',
    joke: 'פטל ואוכמניות מהעונה הנכונה',
    imageLeft: '-115%',
    imageTop: '-183%',
  },
  {
    name: 'בננות',
    icon: '🍌',
    price: '4 סקווישי בננה',
    joke: 'קילפנו בשבילכן',
    imageLeft: '-225%',
    imageTop: '-183%',
  },
];

export function categoryById(id: CategoryId): Category {
  const category = CATEGORIES.find((candidate) => candidate.id === id);

  if (!category) {
    throw new Error(`Unknown Ronni Store category: ${id}`);
  }

  return category;
}

export function dishById(id: string): Dish {
  const dish = DISHES.find((candidate) => candidate.id === id);

  if (!dish) {
    throw new Error(`Unknown Ronni Store dish: ${id}`);
  }

  return dish;
}
