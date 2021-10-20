import { clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

const version = BUILD_VERSION;

// @ts-ignore
self.addEventListener( "fetch", event => {
  console.log('WORKER: Fetching', event.request);
  console.log(version)
});


skipWaiting();
clientsClaim();

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
