import React from 'react';

import useServiceWorker from 'hooks/useServiceWorker';

const App = () => {

  const {hasNewVersion} = useServiceWorker();

  return <div>
    <h1>This is a sample pwa site</h1>
    <h2>VERSION: {BUILD_VERSION}</h2>
    <div><img src="https://picsum.photos/200/300" alt="text"/></div>
    <div id="message">{hasNewVersion && 'has newVersion'}</div>
  </div>;

};

export default App;
