import { clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope & Window & typeof globalThis

self.addEventListener('install', () => {
  skipWaiting();
})

clientsClaim();

precacheAndRoute([{
  url: '/index.html'
}]);
