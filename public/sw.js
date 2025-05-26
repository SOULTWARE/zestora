// Service Worker for Zestora Restaurant
const CACHE_NAME = 'zestora-cache-v1';
const urlsToCache = [
  '/',
  '/menu',
  '/about',
  '/contact',
  '/reservation',
  '/images/Zestora.png',
  '/images/home/hero-background.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
