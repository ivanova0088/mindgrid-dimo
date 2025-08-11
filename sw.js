
self.addEventListener('install', e => {
  e.waitUntil(caches.open('mindgrid-v1').then(cache => cache.addAll([
    './',
    './index.html',
    './manifest.json',
    './assets/icon-192.png',
    './assets/icon-512.png'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
