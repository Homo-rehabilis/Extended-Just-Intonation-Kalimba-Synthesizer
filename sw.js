const CACHE_NAME = 'ji-kalimba-ver.1.0.5.3.5.2.2.3.9.9.5'; // アプリ更新時はここを v3, v4... とインクリメントします
const urlsToCache = [
  './',
  './index.html',
  './custom.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './chinese3limit_8.scl',
  './chinese3limit_17.scl',
  './pythagorean_8.scl',
  './pythagorean_17.scl',
  './classic5limit_8.scl',
  './classic5limit_17.scl',
  './7limitsouljazz_8.scl',
  './7limitsouljazz_17.scl',
  './7limitarchytas_8.scl',
  './7limitarchytas_17.scl',
  './23limitharmonics_8.scl',
  './23limitharmonics_17.scl'
];

// インストール時に新しいファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// 古いキャッシュの自動削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// キャッシュまたはネットワークから取得
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// 画面側から更新の指示（SKIP_WAITING）を受け取った場合
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
