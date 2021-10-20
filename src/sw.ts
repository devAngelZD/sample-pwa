import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

// @ts-ignore
self.addEventListener('install', event => {

  console.log('change')
// @ts-ignore
  self.skipWaiting(()=> window.location.reload());


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


clientsClaim();

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
