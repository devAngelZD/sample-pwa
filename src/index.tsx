import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';

import { registerToServicerWorker } from './serviceWorkerRegistration';

render(<App />, document.getElementById('app'));

registerToServicerWorker();
