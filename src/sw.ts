import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope & Window & typeof globalThis

self.addEventListener('install', e => {
  console.log(e)
})

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
