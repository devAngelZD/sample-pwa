import React from 'react';

import useServiceWorker from 'hooks/useServiceWorker';

const App = () => {

  const {isUpdateAvailable} = useServiceWorker();

  return <div>
    <div id="message">{isUpdateAvailable && 'has newVersion'}</div>
    <h1>This is a sample pwa site</h1>
    <h2>VERSION: {BUILD_VERSION}</h2>
    <div><img src="https://picsum.photos/200/300" alt="text"/></div>
  </div>;

};

export default App;
