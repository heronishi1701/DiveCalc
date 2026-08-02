const CACHE_NAME = "divecalc-v5";

const urlsToCache = [

    "./",
    "./index.html",
    "./css/style.css",
    "./js/dive.min.js",
    "./manifest.json",
    "./img/icon-192.png",
    "./img/icon-512.png"

];

// インストール
self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(urlsToCache))

    );

});

// 有効化
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

            .then(keys =>

                Promise.all(

                    keys.map(key => {

                        if(key !== CACHE_NAME){

                            return caches.delete(key);

                        }

                    })

                )

            )

            .then(() => self.clients.claim())

    );

});

// 通信
self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request).then(cachedResponse => {

            if (cachedResponse) {

                return cachedResponse;

            }

            return fetch(event.request)

                .then(networkResponse => {

                    if (
                        !networkResponse ||
                        networkResponse.status !== 200
                    ) {
                        return networkResponse;
                    }

                    const responseClone = networkResponse.clone();

                    caches.open(CACHE_NAME).then(cache => {

                        cache.put(event.request, responseClone);

                    });

                    return networkResponse;

                })

                .catch(() => {

                    if (event.request.mode === "navigate") {

                        return caches.match("./index.html");

                    }

                });

        })

    );

});