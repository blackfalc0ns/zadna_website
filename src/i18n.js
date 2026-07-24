const STORAGE_KEY = 'zadana-lang';

const messages = {
  ar: {
    'meta.description':
      'زدانا — منصة طلب وتوصيل تربطك بالتجار القريبين في المملكة العربية السعودية.',
    'meta.title': 'زدانا | Zadana',
    'nav.home': 'الرئيسية',
    'nav.service': 'الخدمة',
    'nav.how': 'كيف تعمل',
    'nav.privacy': 'الخصوصية',
    'nav.support': 'الدعم',
    'nav.label': 'التنقل الرئيسي',
    'brand.home': 'زدانا — الصفحة الرئيسية',
    'lang.switch': 'English',
    'lang.aria': 'Switch to English',
    'hero.aria': 'مقدمة زدانا',
    'hero.headline': 'اطلب من تجارك، واستلم عند بابك.',
    'hero.support': 'منصة سعودية تربط العملاء بالتجار ومناديب التوصيل في تجربة واحدة سلسة.',
    'hero.ctaApp': 'حمّل من App Store',
    'hero.ctaPrivacy': 'سياسة الخصوصية',
    'service.title': 'طلب وتوصيل في مكان واحد',
    'service.lead': 'تصفّح منتجات التجار، أكمل طلبك، وتابع التوصيل حتى يصل إليك.',
    'service.body':
      'زدانا توفّر المنصة التقنية التي تنسّق بينك وبين التاجر والمندوب، مع دفع إلكتروني آمن عبر مزوّد معتمد وتتبع لحالة الطلب.',
    'how.title': 'كيف تعمل زدانا',
    'how.lead': 'ثلاث خطوات بسيطة من التصفح إلى الاستلام.',
    'how.step1.title': 'اختر وتسوّق',
    'how.step1.body': 'تصفّح التجار المتاحين وأضف منتجاتك إلى السلة.',
    'how.step2.title': 'أكّد الطلب',
    'how.step2.body': 'حدّد عنوان التوصيل وطريقة الدفع المناسبة لك.',
    'how.step3.title': 'استلم بسهولة',
    'how.step3.body': 'تابع حالة الطلب واستلمه عند الباب عبر مندوب معتمد.',
    'download.title': 'حمّل تطبيق العميل',
    'download.lead':
      'رابط App Store سيُضاف هنا فور النشر. حتى ذلك الحين يمكنك مراجعة سياسة الخصوصية.',
    'download.cta': 'اقرأ سياسة الخصوصية',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.contact': 'تواصل معنا',
    'footer.copy': '© 2026 زدانا. جميع الحقوق محفوظة.',
    'privacy.meta.description':
      'سياسة خصوصية تطبيق زدانا للعميل — كيف نجمع ونستخدم ونحمي بياناتك.',
    'privacy.meta.title': 'سياسة الخصوصية | زدانا',
    'support.meta.description':
      'تواصل مع دعم زدانا — مساعدة للحساب والطلبات والدفع والتوصيل.',
    'support.meta.title': 'الدعم | زدانا',
  },
  en: {
    'meta.description':
      'Zadana — an ordering and delivery platform connecting you with nearby vendors in Saudi Arabia.',
    'meta.title': 'Zadana | زادنا',
    'nav.home': 'Home',
    'nav.service': 'Service',
    'nav.how': 'How it works',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',
    'nav.label': 'Main navigation',
    'brand.home': 'Zadana — Home',
    'lang.switch': 'العربية',
    'lang.aria': 'التبديل إلى العربية',
    'hero.aria': 'Zadana introduction',
    'hero.headline': 'Order from your vendors. Delivered to your door.',
    'hero.support':
      'A Saudi platform connecting customers, vendors, and drivers in one smooth experience.',
    'hero.ctaApp': 'Download on the App Store',
    'hero.ctaPrivacy': 'Privacy Policy',
    'service.title': 'Ordering and delivery in one place',
    'service.lead': 'Browse vendor products, place your order, and track delivery until it arrives.',
    'service.body':
      'Zadana provides the tech platform that coordinates you with the vendor and driver, with secure electronic payment through an approved provider and live order tracking.',
    'how.title': 'How Zadana works',
    'how.lead': 'Three simple steps from browsing to delivery.',
    'how.step1.title': 'Browse and shop',
    'how.step1.body': 'Explore available vendors and add products to your cart.',
    'how.step2.title': 'Confirm your order',
    'how.step2.body': 'Choose your delivery address and preferred payment method.',
    'how.step3.title': 'Receive easily',
    'how.step3.body': 'Track your order and receive it at your door via an approved driver.',
    'download.title': 'Get the customer app',
    'download.lead':
      'The App Store link will be added here once published. Until then, you can review our Privacy Policy.',
    'download.cta': 'Read the Privacy Policy',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact us',
    'footer.copy': '© 2026 Zadana. All rights reserved.',
    'privacy.meta.description':
      'Zadana Customer App Privacy Policy — how we collect, use, and protect your data.',
    'privacy.meta.title': 'Privacy Policy | Zadana',
    'support.meta.description':
      'Contact Zadana support — help with accounts, orders, payments, and delivery.',
    'support.meta.title': 'Support | Zadana',
  },
};

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'ar' || saved === 'en') return saved;
  const browser = (navigator.language || 'ar').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'ar';
}

export function getLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'ar';
}

export function applyLanguage(lang) {
  const next = lang === 'en' ? 'en' : 'ar';
  const dict = messages[next];
  const root = document.documentElement;

  root.lang = next;
  root.dir = next === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem(STORAGE_KEY, next);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] != null) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key] != null) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.setAttribute('alt', next === 'ar' ? 'زدانا' : 'Zadana');
  });

  const page = document.body.dataset.page;
  const titleKey =
    page === 'privacy'
      ? 'privacy.meta.title'
      : page === 'support'
        ? 'support.meta.title'
        : 'meta.title';
  const descKey =
    page === 'privacy'
      ? 'privacy.meta.description'
      : page === 'support'
        ? 'support.meta.description'
        : 'meta.description';

  if (dict[titleKey]) document.title = dict[titleKey];

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict[descKey]) metaDesc.setAttribute('content', dict[descKey]);

  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.hidden = el.getAttribute('data-lang') !== next;
  });

  const toggle = document.querySelector('[data-lang-toggle]');
  if (toggle) {
    toggle.textContent = dict['lang.switch'];
    toggle.setAttribute('aria-label', dict['lang.aria']);
  }

  root.dispatchEvent(new CustomEvent('zadana:langchange', { detail: { lang: next } }));
}

export function initI18n() {
  applyLanguage(detectLang());

  document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
    applyLanguage(getLang() === 'ar' ? 'en' : 'ar');
  });
}
