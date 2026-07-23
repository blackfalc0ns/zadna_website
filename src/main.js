import './styles.css';
import { initI18n } from './i18n.js';

initI18n();

const revealItems = document.querySelectorAll('[data-reveal]');

if (revealItems.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 },
  );

  for (const item of revealItems) {
    observer.observe(item);
  }
} else {
  for (const item of revealItems) {
    item.classList.add('is-visible');
  }
}

document.documentElement.classList.add('js-ready');
