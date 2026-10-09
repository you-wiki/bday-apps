import { Component, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage, ViewportScroller } from '@angular/common';

type CategoryId = 'pancakes' | 'waffles' | 'mini' | 'toppings';

interface Category {
  id: CategoryId;
  title: string;
  caption: string;
  image: string;
}

interface Dish {
  name: string;
  category: Exclude<CategoryId, 'toppings'>;
  description: string;
  ingredients: string;
  price: string;
  joke: string;
  image: string;
}

interface Topping {
  name: string;
  icon: string;
  price: string;
  joke: string;
}

@Component({
  selector: 'app-ronni-store',
  imports: [NgOptimizedImage],
  templateUrl: './ronni-store.html',
  styleUrl: './ronni-store.scss',
})
export default class RonniStore {
  private readonly viewportScroller = inject(ViewportScroller);

  readonly categories: readonly Category[] = [
    {
      id: 'pancakes',
      title: 'פנקייקים',
      caption: 'גבוהים, רכים ומוגזמים בדיוק במידה',
      image: '/ronni-store/pancakes-loaded.webp',
    },
    {
      id: 'waffles',
      title: 'וופל בלגי',
      caption: 'פריך מבחוץ, חלום מבפנים',
      image: '/ronni-store/waffles-berries.webp',
    },
    {
      id: 'mini',
      title: 'מיני פנקייק',
      caption: 'קטנים בגודל, ענקיים בחשבון',
      image: '/ronni-store/mini-loaded.webp',
    },
    {
      id: 'toppings',
      title: 'תוספות',
      caption: 'כי תמיד אפשר להגזים עוד קצת',
      image: '/ronni-store/toppings.webp',
    },
  ];

  readonly dishes: readonly Dish[] = [
    {
      name: 'הקלאסי של רוני',
      category: 'pancakes',
      description: 'שלושה פנקייקים ענניים עם חמאה שנמסה בדיוק בזמן ומפל מייפל.',
      ingredients: 'פנקייקים, חמאה, סירופ מייפל',
      price: '4,999 ₪',
      joke: 'המייפל כלול. המשכנתא בנפרד.',
      image: '/ronni-store/pancakes-classic.webp',
    },
    {
      name: 'פנקייק פנדה',
      category: 'pancakes',
      description: 'מגדל פנקייקים עם נוטלה, בננות, פירות יער ופירורי אוראו.',
      ingredients: 'פנקייקים, נוטלה, בננה, פירות יער, אוראו',
      price: '11,800 ₪',
      joke: 'הפנדה טעמה ואישרה. מנהלת הבנק עדיין בהלם.',
      image: '/ronni-store/pancakes-loaded.webp',
    },
    {
      name: 'וופל יער שחור',
      category: 'waffles',
      description: 'וופל בלגי זהוב עם נוטלה, בננות, פטל, אוכמניות וקראנץ׳ אוראו.',
      ingredients: 'וופל בלגי, נוטלה, בננה, פטל, אוכמניות, אוראו',
      price: '13,450 ₪',
      joke: 'כולל נוף ליער. לא כולל את היער.',
      image: '/ronni-store/waffles-berries.webp',
    },
    {
      name: 'וופל אוראו אקסטרים',
      category: 'waffles',
      description: 'וופל פריך תחת שכבת שוקולד ופירורי אוראו בכמות בלתי אחראית.',
      ingredients: 'וופל בלגי, סירופ שוקולד, פירורי אוראו',
      price: '22,222 ₪',
      joke: 'פירור אחד נפל, אז הורדנו שקל.',
      image: '/ronni-store/waffles-oreo.webp',
    },
    {
      name: 'מיני מסיבה',
      category: 'mini',
      description: 'קערה שמחה של מיני פנקייק, נוטלה, בננות, פירות יער ואוראו.',
      ingredients: 'מיני פנקייק, נוטלה, בננה, פירות יער, אוראו',
      price: '8,765 ₪',
      joke: 'מיני בשם בלבד. המחיר בגודל משפחתי.',
      image: '/ronni-store/mini-loaded.webp',
    },
    {
      name: 'מיני טרופי',
      category: 'mini',
      description: 'מיני פנקייק עם אננס, בננות ומייפל לחופשה בלי לצאת מהכיסא.',
      ingredients: 'מיני פנקייק, אננס, בננה, סירופ מייפל',
      price: '9,990 ₪',
      joke: 'כרטיס טיסה לא כלול, אבל המחיר מרגיש שכן.',
      image: '/ronni-store/mini-tropical.webp',
    },
  ];

  readonly toppings: readonly Topping[] = [
    { name: 'נוטלה', icon: '🍫', price: '1,450 ₪', joke: 'כפית נדיבה, מחיר נדיב יותר' },
    { name: 'סירופ שוקולד', icon: '🤎', price: '980 ₪', joke: 'כל טיפה מחושבת' },
    { name: 'סירופ מייפל', icon: '🍁', price: '1,200 ₪', joke: 'יובא היישר מהעץ הכי יקר' },
    { name: 'קצפת', icon: '☁️', price: '777 ₪', joke: 'ענן קטן עם הוצאות גדולות' },
    { name: 'פירורי אוראו', icon: '🍪', price: '2,020 ₪', joke: 'כתשנו בעצמנו, החשבון בהתאם' },
    { name: 'אננס', icon: '🍍', price: '3,600 ₪', joke: 'כולל שמש טרופית דמיונית' },
    { name: 'פירות יער', icon: '🫐', price: '4,400 ₪', joke: 'פטל ואוכמניות מהעונה הנכונה' },
    { name: 'בננות', icon: '🍌', price: '890 ₪', joke: 'קילפנו בשבילכן' },
  ];

  readonly isWelcome = signal(true);
  readonly selectedCategoryId = signal<CategoryId>('pancakes');
  readonly selectedDish = signal<Dish | null>(null);
  readonly selectedCategory = computed(
    () => this.categories.find(({ id }) => id === this.selectedCategoryId()) ?? this.categories[0],
  );
  readonly visibleDishes = computed(() =>
    this.dishes.filter(({ category }) => category === this.selectedCategoryId()),
  );

  enterMenu(): void {
    this.isWelcome.set(false);
    this.scrollToTop();
  }

  goHome(): void {
    this.selectedDish.set(null);
    this.isWelcome.set(true);
    this.scrollToTop();
  }

  selectCategory(category: CategoryId): void {
    this.selectedDish.set(null);
    this.selectedCategoryId.set(category);
    this.scrollToTop();
  }

  showDish(dish: Dish): void {
    this.selectedDish.set(dish);
    this.scrollToTop();
  }

  closeDish(): void {
    this.selectedDish.set(null);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]));
  }
}
