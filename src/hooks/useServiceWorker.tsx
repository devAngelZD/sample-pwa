import { useCallback, useEffect, useState } from "react";
import { Workbox } from "workbox-window";

const useServiceWorker = () => {
  const [hasNewVersion, setHasNewVersion] = useState(false)
const isServiceWorkerSupported =  'serviceWorker' in navigator;

const register = useCallback(()=> {
  window.addEventListener('load', () => {
    if(isServiceWorkerSupported){
      const wb = new Workbox('/sw.js');

      wb.register()
      .then(registration => {
        console.log(registration)
        if(registration){
        // eslint-disable-next-line no-param-reassign
        registration.onupdatefound = () => {
          const installingWorker = registration!.installing;

        if(installingWorker){
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but the previous service worker will still serve the older
                // content until all client tabs are closed.
      console.log('old service worker')
      setHasNewVersion(true)
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');

              }
            }
          };
        }
        };
      }
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });

    }

  });





}, [isServiceWorkerSupported])


useEffect(()=> {
  register();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return { hasNewVersion };
};

export default useServiceWorker;
