const CACHE_NAME = "divecalc-v3";

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

    if(event.request.method !== "GET"){

        return;

    }

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if(response){

                    return response;

                }

                return fetch(event.request)

                    .then(networkResponse => {

                        return caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(

                                    event.request,

                                    networkResponse.clone()

                                );

                                return networkResponse;

                            });

                    });

            })

    );

});