import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';

// import { registerToServicerWorker } from './serviceWorkerRegistration';

render(<App />, document.getElementById('app'));

// registerToServicerWorker();

// function init() {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js').then(registration => {
//         console.log('SW registered: ', registration);
//       }).catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//       });
//     });
//   }
// }

// init();
