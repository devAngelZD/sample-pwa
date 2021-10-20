import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';

import * as serviceWorker from './serviceWorkerRegistration';

render(<App />, document.getElementById('app'));

serviceWorker.unregister();
