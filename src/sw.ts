import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

// @ts-ignore
self.addEventListener('install', event => {
  console.log('change dapat mag load')
// @ts-ignore
  self.skipWaiting();
console.log(event)
  window.location.reload();

})


clientsClaim();

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
