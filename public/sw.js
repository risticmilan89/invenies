const version = "v1";
const staticCacheName = `site-static-${version}`;
const dynamicCacheName = `site-dynamic-${version}`;
const assets = ["/"];

self.addEventListener("install", (evt) => {
  console.log("sw Install event");

  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("sw install - caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (evt) => {
  console.log("sw activate event");
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              if (evt.request.url.indexOf("chrome") > -1) {
                // doing nothing
              } else {
                cache.put(evt.request.url, fetchRes.clone());
              }

              return fetchRes;
            });
          })
        );
      })
      .catch((_) => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("/");
        }
      })
  );
});
