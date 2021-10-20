import { clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

const version = BUILD_VERSION;

// @ts-ignore
self.addEventListener( "fetch", event => {
  console.log('WORKER: Fetching', event.request);
  console.log(version)
});

// @ts-ignore
self.addEventListener('install', event => {
  console.log(caches)
  console.log(event)
  // event.waitUntil(
  //   caches
  //     .open('my-site-name')
  //     .then(cache =>
  //       cache.addAll([
  //         'favicon.ico',
  //         'style.css',
  //         'script.js',
  //         'https://fonts.googleapis.com/css?family=Inconsolata:400,700'
  //       ])
  //     )
  // )
})


skipWaiting();
clientsClaim();

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
