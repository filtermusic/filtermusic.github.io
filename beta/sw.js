// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open("v2");
//   await cache.addAll(resources);
// };

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     addResourcesToCache([
//       "/"
//     ])
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//   );
// });

// console.log('SW2');


self.addEventListener('fetch', function (event) {
  // do nothing here, just log all the network requests
  // console.log(event.request.url);
});


