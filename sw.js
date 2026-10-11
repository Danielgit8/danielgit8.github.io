// Offline-Cache fürs Portfolio: online immer die neueste Version, offline die gespeicherte
const VERSION = 'portfolio-v2';
const FILES = ['./index.html', './projects.js', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './assets/varg-cover.jpg', './assets/ciabatta-poster.jpg'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('portfolio-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // nur eigene Portfolio-Dateien, nie die anderen Apps (/varg/, /francais-a1/, /para-cockpit/)
  if (e.request.method !== 'GET' || u.origin !== location.origin || /^\/(varg|francais-a1|para-cockpit)\//.test(u.pathname) || u.pathname.endsWith('.mp4')) return;
  e.respondWith(fetch(e.request.url, {cache: 'no-cache'}).then(r => {
    const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html'))));
});
