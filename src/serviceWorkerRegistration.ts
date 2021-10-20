import { Workbox } from 'workbox-window';

interface ServiceWorkerMessage {
  message: string;
}

const wb = new Workbox('/sw.js');

const isServiceWorkerSupported: () => boolean = () => 'serviceWorker' in navigator;

const registerToServicerWorker = (): void => {
  window.addEventListener('load', () => {
    if (isServiceWorkerSupported()) {
      wb.register()
        .then(x => {
          console.log('Service Worker registration completed');
          console.log(x);
          if (x) {
            x.addEventListener('installed', event => {
              console.log(event);
              // console.log(event.isUpdate);
              // if (event.isUpdate) {
              //   window.location.reload();
              // }
            });
          }

          // const configuration = {
          //   onUpdate: (registration) => {
          //     if (registration && registration.waiting) {
          //       if (window.confirm('New version available!  refresh to update your app?')) {
          //         registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          //         window.location.reload();
          //       }
          //     }
          //   }
          //  };
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
