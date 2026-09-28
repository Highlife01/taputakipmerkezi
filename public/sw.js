const CACHE_NAME = 'tapu-takip-v1';
const urlsToCache = [
    '/',
    '/favicon.png',
    '/manifest.json'
];

// Yükleme - cache'e dosyaları ekle
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache açıldı');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Aktivasyon - eski cache'leri temizle
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eski cache siliniyor:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch - network first, cache fallback
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Başarılı yanıtı cache'e kaydet
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                }
                return response;
            })
            .catch(() => {
                // Network başarısız olursa cache'den getir
                return caches.match(event.request);
            })
    );
});
