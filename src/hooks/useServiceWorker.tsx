import { useCallback, useEffect, useState } from "react";
import { Workbox } from "workbox-window";

const useServiceWorker = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)

  const isServiceWorkerSupported =  'serviceWorker' in navigator;
  console.log(isServiceWorkerSupported)




  return { isUpdateAvailable };
};

export default useServiceWorker;
