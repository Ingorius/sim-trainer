const CACHE = 'sim-trainer-v5';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './m1.js', './m2.js', './m3.js', './m4.js', './m5.js', './m6.js', './fixes.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Netzwerk zuerst (damit neue Fragen ankommen), sonst Cache -> funktioniert offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
