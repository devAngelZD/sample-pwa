import { Workbox } from 'workbox-window';

interface ServiceWorkerMessage {
  message: string;
}

const wb = new Workbox('/sw.js');

const isServiceWorkerSupported = () => 'serviceWorker' in navigator;

const registerToServicerWorker = (): void => {
  window.addEventListener('load', () => {
    if (isServiceWorkerSupported()) {
      wb.register()
        .then(registration => {
          console.log(registration)
        //   if(registration){
        //    // eslint-disable-next-line no-param-reassign
        //   registration.onupdatefound = () => {
        //     const installingWorker = registration!.installing;

        //    if(installingWorker){
        //     installingWorker.onstatechange = () => {
        //       if (installingWorker.state === 'installed') {
        //         if (navigator.serviceWorker.controller) {
        //           // At this point, the updated precached content has been fetched,
        //           // but the previous service worker will still serve the older
        //           // content until all client tabs are closed.
        //           window.location.reload();

        //         } else {
        //           // At this point, everything has been precached.
        //           // It's the perfect time to display a
        //           // "Content is cached for offline use." message.
        //           console.log('Content is cached for offline use.');

        //         }
        //       }
        //     };
        //    }
        //   };
        //  }
        })
        .catch(err => {
          console.error('Service Worker registration failed:', err);
        });
    }
  });
};

const sendMessageToServiceWorker = (message: ServiceWorkerMessage): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    wb.messageSW(message).then(
      (event: MessageEvent): void => {
        if (event.data) {
          if (event.data.error) {
            reject(event.data.error);
          } else {
            resolve(event.data);
          }
        }
      }
    );
  });
};

export { sendMessageToServiceWorker, registerToServicerWorker, isServiceWorkerSupported };
