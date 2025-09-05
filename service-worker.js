// service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
});

self.addEventListener('fetch', (event) => {
    // Na razie nie robimy nic z żądaniami sieciowymi
});