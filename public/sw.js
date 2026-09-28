const CACHE_NAME = 'tapu-takip-v2';
const PRECACHE_URLS = [
    '/',
    '/favicon.png',
    '/manifest.json'
];
// Önbellek üst sınırı: sınırsız büyümeyi engeller (en eskisi silinir)
const MAX_ENTRIES = 80;

// Yükleme - öncelikli dosyaları cache'e ekle
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS))
    );
    self.skipWaiting();
});

// Aktivasyon - eski sürüm cache'leri temizle (v1 → v2 geçişi)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eski cache siliniyor:', cacheName);
                        return caches.delete(cacheName);
                    }
                    return undefined;
                })
            );
        })
    );
    self.clients.claim();
});

function isCacheable(response) {
    return response && response.status === 200 && response.type === 'basic';
}

async function trimCache() {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    for (let i = 0; i < keys.length - MAX_ENTRIES; i++) {
        await cache.delete(keys[i]);
    }
}

// Sayfa gezinmeleri: ağ öncelikli, düşerse cache'den
async function networkFirst(request) {
    const cache = await caches.open(CACHE_NAME);
    try {
        const fresh = await fetch(request);
        if (isCacheable(fresh)) {
            await cache.put(request, fresh.clone());
            await trimCache();
        }
        return fresh;
    } catch (error) {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') {
            const home = await cache.match('/');
            if (home) return home;
        }
        return new Response(
            'Çevrimdışısınız ve bu içerik önbellekte bulunmuyor.',
            { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
        );
    }
}

// Statik varlıklar: cache öncelikli + arka planda tazeleme (SWR)
async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const network = fetch(request)
        .then((response) => {
            if (isCacheable(response)) {
                cache.put(request, response.clone()).then(trimCache);
            }
            return response;
        })
        .catch(() => cached);
    return cached || network;
}

// Fetch - yalnızca aynı kaynaklı GET istekleri; /api hariç
self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    if (url.pathname.startsWith('/api/')) return;

    event.respondWith(
        request.mode === 'navigate'
            ? networkFirst(request)
            : staleWhileRevalidate(request)
    );
});
