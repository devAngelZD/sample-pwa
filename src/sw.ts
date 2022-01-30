import { cacheNames, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope & Window & typeof globalThis

// self.addEventListener('install', () => {
//   skipWaiting();
// })

self.addEventListener('install', (event: any) => {
  // const urls:any = [/* ... */];
  const cacheName = cacheNames.runtime;
  console.log(cacheName)
  console.log(event)
  // event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)));
});


clientsClaim();
// eslint-disable-next-line no-underscore-dangle
const precacheUrls = self.__WB_MANIFEST;
if (precacheUrls) {
  precacheAndRoute(precacheUrls);
}



