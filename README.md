# Zadana Website

موقع عام لـ **زدانا**: Landing + سياسة الخصوصية (عربي / إنجليزي) لرفع App Store.

## الأوامر

```bash
npm install
npm run dev
npm run build
```

بعد الـ build، انشر محتويات `dist/` على الدومين الأساسي `https://zadna0.com` عبر cPanel Git Deploy (`.cpanel.yml` → `public_html`).

- الرئيسية: `https://zadna0.com/`
- الخصوصية: `https://zadna0.com/privacy/`
- تبديل اللغة من زر الهيدر (يُحفظ في `localStorage`)

اللوجو الشفاف في الهيدر: `public/assets/logo/zadana-logo-transparent.png`

ضع رابط App Store النهائي في الزر داخل `index.html` عند توفره.
