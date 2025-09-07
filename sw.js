self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("scrabble-cache-v1").then(cache => {
      return cache.addAll([
        "./index.html",
        "./scrabble_words.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
