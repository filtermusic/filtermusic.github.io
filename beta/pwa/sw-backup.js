// for old browsers
// importScripts("/app/cache-polyfill.js");

const CACHE_NAME = "filtermusic-v24";
// const urlsToCache = ["/"];

// install Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        // wait till resources are being cached
        caches.open(CACHE_NAME).then(cache => {
            console.log("Service Worker: cached files");
            return cache.addAll(["./"]);
        })
    );
});

// fetch data
self.addEventListener("fetch", event => {
    // cache stuff only from our domain
    if (
        event.request.url.indexOf("filtermusic.localhost") === 1
        // event.request.url.indexOf("filtermusic.github.io") === 1
        // event.request.url.indexOf("filtermusic.net") === -1
    ) {
        return false;
    }
    console.log("Service Worker: fetched data");
    // fetch data
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// clearing old cache
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Service Worker: clearing old cache");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
