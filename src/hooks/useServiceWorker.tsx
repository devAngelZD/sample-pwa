import {  useEffect, useState } from "react";
import { Workbox } from "workbox-window";


const useServiceWorker = () => {
  const [isUpdateAvailable] = useState(false)

  const isServiceWorkerSupported =  'serviceWorker' in navigator;

  useEffect(()=> {

    if(isServiceWorkerSupported){
      const wb = new Workbox('/sw.js');

      // register service worker
      wb.register().then(r=>{console.log(r)})

    }

  }, [isServiceWorkerSupported])

  return { isUpdateAvailable };
};

export default useServiceWorker;
